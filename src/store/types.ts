export interface State {
  id: number;
  name: string;
  role: string;
}

export interface Payload {
  id?: number;
  name: string;
  role: string;
  disable: boolean;
}

export interface Action {
  type: string;
  payload: Payload;
}
export interface dataType {
  testData: State[];
}
