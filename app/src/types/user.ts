export type ContactInfo = {
  email: string;
  phoneNumber: string;
};

export type SocialLink = {
  linkedin: string;
  github: string;
};

export type Address = {
  city: string;
  province: string;
  country: string;
};

export type JobPosition = {
  title: string;
  startDate: Date;
  endDate?: Date;
  achievements: string[];
  skills: string[];
};

export type ExperienceMode = 'remote' | 'hybrid' | 'on_site';

export type ContractType = 'full_time' | 'freelance';

export type Experience = {
  company: string;
  mode: ExperienceMode;
  contractType: ContractType;
  positions: JobPosition;
};

export type Education = {
  degree: string;
  major: string;
  institution: string;
  startDate: Date;
  endDate?: Date;
};

export type LanguageProficiency = 'native' | 'high';

export type Language = {
  name: string;
  proficiency: LanguageProficiency;
};

export type User = {
  firstName: string;
  lastName: string;
  contactInfo: ContactInfo;
  jobTitles: string[];
  summary: string;
  address: Address;
  socialLinks: SocialLink;
  experience: Experience[];
  education: Education[];
  skills: string[];
  languages: Language[];
  interests: string[];
};
