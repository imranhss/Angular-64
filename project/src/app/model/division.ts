import { District } from "./district ";

export class Division {
  id: number;
  name: string;
  districts: string[];

  constructor(id: number, name: string, districts: string[] = []) {
    this.id = id;
    this.name = name;
    this.districts = districts;
  }
}