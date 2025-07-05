import { PoliceStation } from "./policeStation";

export class District {
  id: number;
  name: string;
  policeStations: PoliceStation[];

  constructor(id: number, name: string, policeStations: PoliceStation[] = []) {
    this.id = id;
    this.name = name;
    this.policeStations = policeStations;
  }
}