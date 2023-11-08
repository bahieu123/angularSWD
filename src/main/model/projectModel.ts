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

  export class AddProject{
    name: string | undefined
    class_id:number | undefined
    team_leader_id:number | undefined
    english_name: string | undefined
    vietnamese_name: string | undefined
    status: number | undefined
    created_by:string | undefined

  }

  export class UpdateProject{
    id: number|undefined
    name: string | undefined
    class_id:number | undefined
    team_leader_id:number | undefined
    english_name: string | undefined
    vietnamese_name: string | undefined
    status: number | undefined
    updated_by:string | undefined
  }