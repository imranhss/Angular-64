import { Component } from '@angular/core';
import { District } from '../../model/district ';
import { PoliceStation } from '../../model/policeStation';
import { DistrictService } from '../../service/district-service';
import { PoliceStationService } from '../../service/police-station.service';

@Component({
  selector: 'app-view-all-districts',
  standalone: false,
  templateUrl: './view-all-districts.html',
  styleUrl: './view-all-districts.css'
})
export class ViewAllDistricts {

  districts: District[] = [];
  policeStations!: PoliceStation[];

  constructor(
    private districtService: DistrictService,
    private policeStationService: PoliceStationService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.policeStationService.getAll().subscribe(ps => {
      this.policeStations = ps;
      this.districtService.getAll().subscribe(districts => {
        this.districts = districts;
      });
    });
  }

  getPoliceStationNames(ids: string[]): string {
    const names = this.policeStations
      .filter(ps => ids.includes(ps.id!))
      .map(ps => ps.name);
    return names.join(', ');
  }


  deleteDistrict(id: string) {
    if (confirm('Are you sure?')) {
      this.districtService.delete(id).subscribe(() => {
        alert('District deleted!');
        this.loadData();
      });
    }
  }


}
