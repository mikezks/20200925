export interface Flight {
  id: number;
  from: string;
  to: string;
  date: string; // ISO String of Date
  delayed: boolean;
}
