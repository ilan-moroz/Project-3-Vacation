import { Vacation } from "../Model/Vacation";

//initial state
export class VacationsState {
  public vacations: Vacation[] = [];
}

//what action i will use
export enum VacationActionType {
  addVacation = "addVacation",
  allVacations = "allVacations",
}

//action data structure
export interface VacationAction {
  type: VacationActionType;
  payload?: any;
}

//which function will run when i will dispatch an action
export const newVacationAction = (newVacation: Vacation): VacationAction => {
  return { type: VacationActionType.addVacation, payload: newVacation };
};

export const allVacationsAction = (vacations: Vacation[]): VacationAction => {
  return { type: VacationActionType.allVacations, payload: vacations };
};

//this is the reducer function
export function VacationReducer(
  currentState: VacationsState = new VacationsState(),
  action: VacationAction
): VacationsState {
  const newState = { ...currentState };
  switch (action.type) {
    case VacationActionType.addVacation:
      newState.vacations = [...currentState.vacations, action.payload];
      break;
    case VacationActionType.allVacations:
      newState.vacations = action.payload;
      break;
  }
  return newState;
}
