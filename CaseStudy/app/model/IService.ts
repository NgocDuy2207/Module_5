export interface IService {
  id: number;
  name: string;
  area: number;
  numberFloor: number;
  maxPeoPle: number;
  cost: number;
  rent_Type?: string;
  status?: boolean;
}
