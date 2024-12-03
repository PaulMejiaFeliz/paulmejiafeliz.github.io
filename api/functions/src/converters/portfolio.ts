import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  Timestamp,
  WithFieldValue,
} from 'firebase-admin/firestore';
import { PortfolioUser } from '../models';
import { PortfolioUserDB } from '../models/db/portfolio';
import { SupportedAppLanguagesCodes, Translation } from '../types';
import { DEFAULT_APP_LOCALE } from '../constants';

export class PorfolioUserConverter
  implements FirestoreDataConverter<PortfolioUser, PortfolioUserDB>
{
  private language: SupportedAppLanguagesCodes;

  constructor(language?: SupportedAppLanguagesCodes) {
    this.language = language || DEFAULT_APP_LOCALE;
  }

  private getTranslations(text: string): Translation {
    return {
      en: '',
      es: '',
      [this.language]: text,
    };
  }

  private translate(translations: Translation) {
    return translations[this.language] ?? translations[DEFAULT_APP_LOCALE];
  }

  toFirestore(portfolioUser: PortfolioUser): WithFieldValue<PortfolioUserDB> {
    const {
      firstName,
      lastName,
      contactInfo: { email, phoneNumber },
      address: { city, province, country },
      socialLinks: { linkedin, github },
      portfolio: { jobTitles, summary, experience, education, skills },
      languages,
      interests,
    } = portfolioUser;

    return {
      firstName,
      lastName,
      contactInfo: {
        email,
        phoneNumber,
      },
      address: {
        city: this.getTranslations(city),
        province: this.getTranslations(province),
        country: this.getTranslations(country),
      },
      socialLinks: {
        linkedin,
        github,
      },
      portfolio: {
        jobTitles: jobTitles.map(this.getTranslations),
        summary: this.getTranslations(summary),
        experience: experience.map((e) => ({
          company: this.getTranslations(e.company),
          mode: e.mode,
          contractType: e.contractType,
          positions: e.positions.map((p) => ({
            title: this.getTranslations(p.title),
            startDate: Timestamp.fromDate(p.startDate),
            endDate: p.endDate ? Timestamp.fromDate(p.endDate) : null,
            achievements: p.achievements.map(this.getTranslations),
            skills: p.skills.map(this.getTranslations),
          })),
        })),
        education: education.map((e) => ({
          degree: this.getTranslations(e.degree),
          major: this.getTranslations(e.major),
          institution: this.getTranslations(e.institution),
          startDate: Timestamp.fromDate(e.startDate),
          endDate: e.endDate ? Timestamp.fromDate(e.endDate) : null,
        })),
        skills: skills.map(this.getTranslations),
      },
      languages,
      interests: interests.map(this.getTranslations),
    };
  }

  fromFirestore(snapshot: QueryDocumentSnapshot): PortfolioUser {
    const data = snapshot.data() as PortfolioUserDB;

    const {
      firstName,
      lastName,
      contactInfo: { email, phoneNumber },
      address: { city, province, country },
      socialLinks: { linkedin, github },
      portfolio: { jobTitles, summary, experience, education, skills },
      languages,
      interests,
    } = data;

    return {
      firstName,
      lastName,
      contactInfo: {
        email,
        phoneNumber,
      },
      address: {
        city: this.translate(city),
        province: this.translate(province),
        country: this.translate(country),
      },
      socialLinks: {
        linkedin,
        github,
      },
      portfolio: {
        jobTitles: jobTitles.map((title) => this.translate(title)),
        summary: this.translate(summary),
        experience: experience.map((e) => ({
          company: this.translate(e.company),
          mode: e.mode,
          contractType: e.contractType,
          positions: e.positions.map((p) => ({
            title: this.translate(p.title),
            startDate: p.startDate.toDate(),
            endDate: p.endDate?.toDate() ?? undefined,
            achievements: p.achievements.map((achievement) =>
              this.translate(achievement)
            ),
            skills: p.skills.map((skill) => this.translate(skill)),
          })),
        })),
        education: education.map((e) => ({
          degree: this.translate(e.degree),
          major: this.translate(e.major),
          institution: this.translate(e.institution),
          startDate: e.startDate.toDate(),
          endDate: e.endDate?.toDate() ?? undefined,
        })),
        skills: skills.map((skill) => this.translate(skill)),
      },
      languages,
      interests: interests.map((interest) => this.translate(interest)),
    };
  }
}
