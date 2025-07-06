import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { Country } from '../../model/country';
import { Division } from '../../model/division';
import { District } from '../../model/district ';
import { PoliceStation } from '../../model/policeStation';
import { Employeeservice } from '../../service/employeeservice';
import { Countryservice } from '../../service/countryservice';
import { DivisionService } from '../../service/division-service';
import { DistrictService } from '../../service/district-service';
import { PoliceStationService } from '../../service/police-station.service';

@Component({
  selector: 'app-view-employees',
  standalone: false,
  templateUrl: './view-employees.html',
  styleUrl: './view-employees.css'
})
export class ViewEmployees implements OnInit{

  employees: Employee[] = [];
  countries: Country[] = [];
  divisions: Division[] = [];
  districts: District[] = [];
  policeStations: PoliceStation[] = [];

  constructor(
    private employeeService: Employeeservice,
    private countryService: Countryservice,
    private divisionService: DivisionService,
    private districtService: DistrictService,
    private policeStationService: PoliceStationService
  ) {}

  ngOnInit(): void {
    this.loadAllData();
  }

  loadAllData() {
    this.employeeService.getAll().subscribe(data => this.employees = data);
    this.countryService.getAll().subscribe(data => this.countries = data);
    this.divisionService.getAll().subscribe(data => this.divisions = data);
    this.districtService.getAll().subscribe(data => this.districts = data);
    this.policeStationService.getAll().subscribe(data => this.policeStations = data);
  }

  getCountryName(id: string): string {
    return this.countries.find(c => c.id == id)?.name || '';
  }

  getDivisionName(id: string): string {
    return this.divisions.find(d => d.id == id)?.name || '';
  }

  getDistrictName(id: string): string {
    return this.districts.find(dist => dist.id == id)?.name || '';
  }

  getPoliceStationName(id: string): string {
    return this.policeStations.find(ps => ps.id == id)?.name || '';
  }

}
