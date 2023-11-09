export class GetIssue {
    id: number | undefined;
    project_id: number | undefined;
    project_name: string | undefined;
    description: string | undefined;
    status: number | undefined;
    type_id: string | undefined;
    user_id: number | undefined;
    assigner_id : number | undefined;
    assigner_name: string | undefined;
    assignee_id : number | undefined;
    assignee_name: string | undefined;
    milestone_id: number | undefined;
    status_id: number | undefined;
    work_process: string | undefined;
    created_by: string | undefined;
    updated_by: string | undefined;
   
  }
  export class CreateIssue {
    project_id: number | undefined;
    description: string | undefined;
    status: number | undefined;
    type_id: string | undefined;
    assigner_id : number | undefined;
    assignee_id : number | undefined;
    milestone_id: number | undefined;
    status_id: number | undefined;
    work_process: string | undefined;
    created_by: string | undefined;
    created_date: Date | undefined;
   
  }
  export class UpdateIssue {
    id: number | undefined;
    project_id: number | undefined;
    description: string | undefined;
    status: number | undefined;
    type_id: string | undefined;
    assigner_id : number | undefined;
    assignee_id : number | undefined;
    milestone_id: number | undefined;
    status_id: number | undefined;
    work_process: string | undefined;
    updated_by: string | undefined;
    updated_date: Date | undefined;
   
  }