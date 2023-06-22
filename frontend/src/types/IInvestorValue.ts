import { IServerUserValue } from "./IServerUserValue";

export interface IInvestorValue {
  createDate: string;
  introduction: string;
  investorId: number;
  modifiedDate: string;
  title: string;
  totalPrice: string;
  user: IServerUserValue;
}
