export class ListClass {
  id: number |undefined;
  name: string |undefined;
  description:string |undefined;
  teacher_id:number |undefined;
  subject_id: number |undefined;
  start_date:Date |undefined;
  end_date:Date |undefined;
  status:boolean |undefined;
  created_by:string |undefined;
  updated_by:string |undefined;
  settingCode:string |undefined;
  userFirstName:string |undefined;
  userLastName:string |undefined;
  subjectCode:string |undefined;
  subjectName:string |undefined;
}

export class ListSubject{
  id : number | undefined
  manager_id:number | undefined
  subject_code: string | undefined
  subject_name:string | undefined
  description:string | undefined
  start_date:Date | undefined
  created_by:string | undefined
  updated_by:string | undefined
}
