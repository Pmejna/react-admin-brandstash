import type { ProjectPriority, ProjectStatus } from "../enums/project";


export interface ICreateProject {
    user_id?: string | null;
    project_name: string;
    project_description: string;
    project_status?: ProjectStatus | "";
    project_type: string;
    project_priority?: ProjectPriority | string;
    project_budget?: number | null,
    project_budget_estimated: string | null,
    project_objective: string,
    project_progress: number,
    project_start_date?: Date | string | null,
    project_end_date?: Date | string | null,
    project_company_uuid: string
    project_client_company_uuid?: string
}

export interface IUpdateProject {
    user_id?: string | null;
    project_name?: string;
    project_description?: string;
    project_status?: ProjectStatus | "";
    project_type?: string;
    project_priority?: ProjectPriority | "";
    project_budget?: number | null,
    project_objective?: string,
    project_progress?: number,
    project_start_date?: Date | null,
    project_end_date?: Date | null,
    project_company_uuid?: string
    project_client_company_uuid?: string
}