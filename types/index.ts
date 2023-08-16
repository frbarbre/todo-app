export interface TodoProps {
  id: string;
  _id: string;
  text: string;
  author: string;
  isDone: boolean;
  createdAt: number;
}

export enum Filter {
  all = "all",
  active = "active",
  completed = "completed"
}