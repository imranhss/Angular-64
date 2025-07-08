import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employeeservice } from '../../service/employeeservice';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../model/employee';
import { Country } from '../../model/country';
import { Division } from '../../model/division';
import { District } from '../../model/district ';
import { PoliceStation } from '../../model/policeStation';
import { Countryservice } from '../../service/countryservice';
import { DivisionService } from '../../service/division-service';
import { DistrictService } from '../../service/district-service';
import { PoliceStationService } from '../../service/police-station.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-viewemp',
  standalone: false,
  templateUrl: './viewemp.html',
  styleUrl: './viewemp.css'
})
export class Viewemp implements OnInit {

  id: string = '';
  emp: Employee = new Employee();

  countries: Country[] = [];
  divisions: Division[] = [];
  districts: District[] = [];
  policeStations: PoliceStation[] = [];


  constructor(
    private empService: Employeeservice,
    private countryService: Countryservice,
    private divisionService: DivisionService,
    private districtService: DistrictService,
    private policeStationService: PoliceStationService,
    private route: ActivatedRoute,
    private crd: ChangeDetectorRef



  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    forkJoin({
      employee: this.empService.getById(this.id),
      countries: this.countryService.getAll(),
      divisions: this.divisionService.getAll(),
      districts: this.districtService.getAll(),
      policeStations: this.policeStationService.getAll()
    }).subscribe({
      next: ({ employee, countries, divisions, districts, policeStations }) => {
        this.emp = employee;
        this.countries = countries;
        this.divisions = divisions;
        this.districts = districts;
        this.policeStations = policeStations;

        // Optional: If view not updating automatically
        this.crd.detectChanges();
      },
      error: (err) => {
        console.error(err);
        alert('Error loading data.');
      }
    });
  }

  loaddata() {
    this.empService.getById(this.id).subscribe({
      next: (res) => {
        this.emp = res;

      },
      error: () => {

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



}
