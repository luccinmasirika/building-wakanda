import { State, Action } from '../types';
let ID: number = 2;

const initialState = [
  { id: 0, name: 'Luccin Masirika', role: 'Admin', disable: false },
  { id: 1, name: 'Nicolas Teslas', role: 'User', disable: false },
  { id: 2, name: 'Von Neumann', role: 'Client', disable: false },
];

export const TESTING_ACTION: string = 'TESTING_ACTION';
export const TESTING_UPDATE: string = 'TESTING_UPDATE';

export function testReducer(
  state: State[] = initialState,
  action: Action
): State[] {
  switch (action.type) {
    case TESTING_ACTION:
      return [...state, { id: ++ID, ...action.payload }];
    case TESTING_UPDATE:
      return state.flatMap((el: State): State[] => {
        if (el.id === action.payload.id) {
          return [{ ...el, ...action.payload }];
        } else {
          return state;
        }
      });
    default:
      return state;
  }
}
