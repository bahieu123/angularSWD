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

export class CreateAndUpdateSubject {
  manager_id: number | undefined;
  subject_code: string | undefined;
  subject_name: string | undefined;
  description: string | undefined;
  start_date: string | undefined;
  created_by: string | undefined;
  created_date: Date | undefined;
}

export class UpdateSubject{
  id : number | undefined
  manager_id:number | undefined
  subject_code: string | undefined
  subject_name:string | undefined
  description:string | undefined
  start_date:string | undefined
  created_by:string | undefined
  created_date:Date | undefined
}

export class Singup{
  username:string | undefined
  password:string | undefined
  name:string | undefined
  email:string | undefined
  phone:string | undefined
}
export class ListMilestone{
    id:number | undefined
    name:string | undefined
    description:string | undefined
    projectId:number | undefined
    classId:number | undefined
    status:number | undefined
    createdBy:string | undefined
    createdDate:Date | undefined
    updatedBy:string | undefined
    updatedDate:Date | undefined
    projectName:string | undefined
    className:string | undefined
}

export class createMilestone{
  name:string | undefined
  description:string | undefined
  projectId: number | undefined
  classId: number | undefined
  status: number | undefined
}

export class updateMilestone{
  id: number | undefined
  name:string | undefined
  user_id: number | undefined
  class_id: number | undefined
  team_leader_id:number | undefined
  english_name:string | undefined
  vietnamese_name:string | undefined
  status: number | undefined
  updated_by:number | undefined
  updated_date:Date | undefined
}

export class ListRole{
  id: number | undefined;
  name: string | undefined
}

export class updateUser{
  username: string | undefined
  firstName: string | undefined
  lastName: string | undefined
  email: string | undefined
}
