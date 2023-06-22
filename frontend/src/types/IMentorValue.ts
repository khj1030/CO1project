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
  user: {
    createDate: string;
    modifiedDate: string;
    userId: number;
    id: string;
    password: string;
    nickname: string;
    email: string;
    tel_number: string;
    type: string;
  };
  introduction: string;
}
