export class GetAssignment {
  id: number | undefined;
  name: string | undefined;
  subject_id: number | undefined;
  description: string | undefined;
  created_by: string | undefined;
  updated_by: string | undefined;
  subjectCode: string | undefined;
  subjectName: string | undefined;
}

export class AddNewAssignment {
  name: string | undefined;
  subject_id: number | undefined;
  description: string | undefined;
  created_by: string | undefined;
}

export class UpdateAssignment {
  id: number | undefined;
  name: string | undefined;
  subject_id: number | undefined;
  description: string | undefined;
  updated_by: string | undefined;
}

