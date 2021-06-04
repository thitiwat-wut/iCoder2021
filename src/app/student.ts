export interface Student {
  createBy?: any;
  createDate: string;
  email: string;
  id: number;
  name: string;
  tel: string;
  updateBy?: any;
  updateDate: string;
  version: number;
}

export interface StudentCondition {
  name?: string;
  email?: string;
  tel?: string;
}