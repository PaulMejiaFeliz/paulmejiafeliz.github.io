import { Timestamp } from 'firebase-admin/firestore';
import {
  ContractType,
  ExperienceMode,
  LanguageProficiency,
  Translation,
} from '../../types';

export type ContactInfoDB = {
  email: string;
  phoneNumber: string;
};

export type SocialLinkDB = {
  linkedin: string;
  github: string;
};

export type AddressDB = {
  city: Translation;
  province: Translation;
  country: Translation;
};

export type JobPositionDB = {
  title: Translation;
  startDate: Timestamp;
  endDate: Timestamp | null;
  achievements: Translation[];
  skills: Translation[];
};

export type ExperienceDB = {
  company: Translation;
  mode: ExperienceMode;
  contractType: ContractType;
  positions: JobPositionDB[];
};

export type EducationDB = {
  degree: Translation;
  major: Translation;
  institution: Translation;
  startDate: Timestamp;
  endDate: Timestamp | null;
};

export type LanguageDB = {
  name: string;
  proficiency: LanguageProficiency;
};

export type PortfolioDB = {
  summary: Translation;
  jobTitles: Translation[];
  experience: ExperienceDB[];
  education: EducationDB[];
  skills: Translation[];
};

export type PortfolioUserDB = {
  firstName: string;
  lastName: string;
  contactInfo: ContactInfoDB;
  address: AddressDB;
  socialLinks: SocialLinkDB;
  portfolio: PortfolioDB;
  languages: LanguageDB[];
  interests: Translation[];
};
