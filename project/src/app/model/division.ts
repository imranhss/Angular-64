import { District } from "./district ";

export class Division {
  id: number;
  name: string;
  districts: District[];

  constructor(id: number, name: string, districts: District[] = []) {
    this.id = id;
    this.name = name;
    this.districts = districts;
  }
}