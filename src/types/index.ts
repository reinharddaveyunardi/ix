export interface HomeroomTeacher {
  homeroom_id: string;
  name: string;
  img?: string;
  role: string;
  subject?: string;
  icon?: string;
}

export interface Student {
  student_id: string;
  student_class: string;
  img: string;
  name: string;
  quotes: string;
  subject: string;
  ig?: string;
}

export interface ClassData {
  homeroom: HomeroomTeacher[];
  students: Student[];
}

export interface StudentsData {
  class: {
    [key: string]: ClassData;
  };
}

export interface GalleryImage {
  id: number;
  url: string;
}
