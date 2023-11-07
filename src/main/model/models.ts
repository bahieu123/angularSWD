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

export class ListProject{
  id: number | undefined
  name: string | undefined
  class_id:number | undefined
  team_leader_id:number | undefined
  english_name: string | undefined
  vietnamese_name: string | undefined
  status: number | undefined
  created_by:string | undefined
  updated_by:string | undefined
  tlFirstName: string |undefined  
  tlLastName: string |undefined
  class_name: string |undefined
}

export class ListProjectMember{
  projectName: string |undefined
  userFirstName: string |undefined
  userLastName: string |undefined
  created_by:string | undefined
  updated_by:string | undefined
  status: boolean | undefined
}
