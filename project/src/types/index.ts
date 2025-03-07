export interface FlashCard {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  subject: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Course {
  id: string;
  name: string;
  credits: number;
  grade: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
  education: {
    school: string;
    degree: string;
    graduationDate: string;
    gpa: string;
  }[];
  experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string[];
  }[];
  skills: string[];
}