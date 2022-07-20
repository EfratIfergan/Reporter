export enum SupportedLanguageTypeCode {
  Hebrew = 'he',
  English = 'en',
}

export const SupportedLanguage = [
 'he','en'
]

export interface ConfirmDialog {
  title: string;
  content: string;
  confirmText: string;
  transferToClose?:  boolean;
}

export interface ReportEntity {
  wayContact: string,
  comments: string,
  fakePlace: string
}
