import { IServerUserValue } from "./IServerUserValue";

export interface IMentorValue {
  name: string;
  price: string;
  carrer: string;
  introduce: string;
  email: string;
  phoneNumber: string;
  imgUrl: string;
}

export interface IServerMentorListValue {
  mentoringId: number;
  annualSales: string;
  price: string;
  job: string;
  user: IServerUserValue;
  introduction: string;
}
