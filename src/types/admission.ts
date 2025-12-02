export interface PersonalDetails {
  admissionNo: string;
  academicYear: string;
  studentName: string;
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  age: string;
  gender: 'male' | 'female' | 'transgender' | '';
}

export interface AddressDetails {
  postalAddress: string;
  district: string;
  mandal: string;
  sachivalayamName: string;
  pinCode: string;
  nationality: string;
  religion: string;
  caste: string;
  subCaste: string;
}

export interface SchoolDetails {
  hallTicketNo: string;
  totalMarks: string;
  yearOfPass: string;
  studyCertificate: boolean;
}

export interface QualifiedExamDetails {
  hallTicketNo: string;
  totalMarks: string;
  yearOfPass: string;
  studyCertificate: boolean;
  transferCertificate: boolean;
}

export interface ScholarshipDetails {
  studentAadhar: string;
  motherAadhar: string;
  fatherAadhar: string;
  motherBankAccount: string;
  bankIfscCode: string;
  studentMobile: string;
  parentMobile: string;
  riceCardNo: string;
  casteCertificateNo: string;
  mole1: string;
  mole2: string;
}

export interface StudyDetail {
  class: string;
  schoolName: string;
  villageDistrict: string;
}

export interface ExamMark {
  subject: string;
  maxMarks: string;
  obtainedMarks: string;
}

export interface AdmissionFormData {
  personalDetails: PersonalDetails;
  addressDetails: AddressDetails;
  schoolDetails: SchoolDetails;
  qualifiedExamDetails: QualifiedExamDetails;
  scholarshipDetails: ScholarshipDetails;
  studyDetails: StudyDetail[];
  examMarks: ExamMark[];
  declarationAccepted: boolean;
}

export const initialFormData: AdmissionFormData = {
  personalDetails: {
    admissionNo: '',
    academicYear: '',
    studentName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
  },
  addressDetails: {
    postalAddress: '',
    district: '',
    mandal: '',
    sachivalayamName: '',
    pinCode: '',
    nationality: 'Indian',
    religion: '',
    caste: '',
    subCaste: '',
  },
  schoolDetails: {
    hallTicketNo: '',
    totalMarks: '',
    yearOfPass: '',
    studyCertificate: false,
  },
  qualifiedExamDetails: {
    hallTicketNo: '',
    totalMarks: '',
    yearOfPass: '',
    studyCertificate: false,
    transferCertificate: false,
  },
  scholarshipDetails: {
    studentAadhar: '',
    motherAadhar: '',
    fatherAadhar: '',
    motherBankAccount: '',
    bankIfscCode: '',
    studentMobile: '',
    parentMobile: '',
    riceCardNo: '',
    casteCertificateNo: '',
    mole1: '',
    mole2: '',
  },
  studyDetails: [
    { class: '6th', schoolName: '', villageDistrict: '' },
    { class: '7th', schoolName: '', villageDistrict: '' },
    { class: '8th', schoolName: '', villageDistrict: '' },
    { class: '9th', schoolName: '', villageDistrict: '' },
    { class: '10th', schoolName: '', villageDistrict: '' },
    { class: 'Inter 1st Year', schoolName: '', villageDistrict: '' },
    { class: 'Inter 2nd Year', schoolName: '', villageDistrict: '' },
  ],
  examMarks: Array.from({ length: 10 }, () => ({
    subject: '',
    maxMarks: '',
    obtainedMarks: '',
  })),
  declarationAccepted: false,
};
