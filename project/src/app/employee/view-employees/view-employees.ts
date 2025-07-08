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
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-view-employees',
  standalone: false,
  templateUrl: './view-employees.html',
  styleUrl: './view-employees.css'
})
export class ViewEmployees implements OnInit {

  emp!: Employee;

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
    private policeStationService: PoliceStationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAllData();
  }

  loadAllData() {
  forkJoin({
    employees: this.employeeService.getAll(),
    countries: this.countryService.getAll(),
    divisions: this.divisionService.getAll(),
    districts: this.districtService.getAll(),
    policeStations: this.policeStationService.getAll()
  }).subscribe({
    next: ({ employees, countries, divisions, districts, policeStations }) => {
      this.employees = employees;
      this.countries = countries;
      this.divisions = divisions;
      this.districts = districts;
      this.policeStations = policeStations;
    },
    error: (err) => {
      console.error('Error loading data:', err);
      alert('Failed to load employees or lookup data.');
    }
  });
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

  getEmpByid(id: string) {
    this.employeeService.getById(id).subscribe({
      next: (data) => {
        this.emp = data;
        this.router.navigate(['/sinemp', id]);

      },
      error: (err) => {
        console.log(err);
      }
    });

  }


  deleteEmployee(id: string) {
  if (confirm('Are you sure you want to delete this employee?')) {
    this.employeeService.delete(id).subscribe(() => {
      alert('Deleted!');
      this.loadAllData();
    });
  }
}

}
