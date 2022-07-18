export interface TeamsPerformance {
  status: number;
  message: string;
  data?: (TeamDataEntity)[] | null;
}
export interface TeamDataEntity {
  id: string;
  team: string;
  firstName: string;
  lastName: string;
  totalSelected: number;
  hours: string;
  totalOrder: number;
}
