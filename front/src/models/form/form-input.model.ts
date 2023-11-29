import { secureCopy } from "src/app/app.helpers";

export class FormInput {
  constructor(
    public type: string,
    public name: string,
    public description: string,
    public required: boolean,
    public columns?: any,
    public options?: any,
    public artigoMasculino?: boolean,
    public disabled?: boolean,
    public placeholder?: any
  ) {}
}

export function changeInputProperties(array: any, inputName: any, property: any, newValue: any) {
  let index = array.map((i: any) => i.name).indexOf(inputName);

  if (index < 0) return false;
  array[index][property] = newValue;
  return true;
}

export function removeInputProperty(array: any, inputName: any) {
  let newArray = secureCopy(array);
  let index = newArray.map((i: any) => i.name).indexOf(inputName);

  if (index < 0) return newArray;
  newArray.splice(index, 1);
  return newArray;
}
