export interface TeamsPerformance {
  status: number;
  message: string;
  data?: (DataEntity)[] | null;
}
export interface DataEntity {
  id: string;
  team: string;
  firstName: string;
  lastName: string;
  totalSelected: number;
  hours: string;
  totalOrder: number;
}
