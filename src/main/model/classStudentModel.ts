export class GetClassStudent {
  id: number | undefined;
  class_id: number | undefined;
  student_id: number | undefined;
  status: number | undefined;
  created_by: string | undefined;
  updated_by: string | undefined;
  className: string | undefined;
  userFirstName: string | undefined;
  userLastName: string | undefined;
}


export class AddNewClassStudent {
  class_id: number | undefined;
  student_id: number | undefined;
  status: number | undefined;
  created_by: string | undefined;
}

export class UpdateClassStudent {
  id: number | undefined;
  class_id: number | undefined;
  student_id: number | undefined;
  status: number | undefined;
  updated_by: string | undefined;
}