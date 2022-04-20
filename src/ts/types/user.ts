export type User = {
      user_id:                string;
      user_first_name:        string;
      user_last_name:         string;
      user_email:             string;
      user_job_title?:        string;
      user_created_datetime:  Date;
      user_updated_datetime:  Date;
      // company?:               Company;
      // role:                   Role;
  }