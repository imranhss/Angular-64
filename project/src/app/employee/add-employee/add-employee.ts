import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from '../../model/country';
import { Division } from '../../model/division';
import { District } from '../../model/district ';
import { PoliceStation } from '../../model/policeStation';
import { Employeeservice } from '../../service/employeeservice';
import { Countryservice } from '../../service/countryservice';
import { DivisionService } from '../../service/division-service';
import { DistrictService } from '../../service/district-service';
import { PoliceStationService } from '../../service/police-station.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee {

  employeeForm: FormGroup;
  editing: boolean = false;
  employeeId: string | null = null;

  countries: Country[] = [];
  allDivisions: Division[] = [];
  allDistricts: District[] = [];
  allPoliceStations: PoliceStation[] = [];

  filteredDivisions: Division[] = [];
  filteredDistricts: District[] = [];
  filteredPoliceStations: PoliceStation[] = [];

  constructor(
    private fb: FormBuilder,
    private employeeService: Employeeservice,
    private countryService: Countryservice,
    private divisionService: DivisionService,
    private districtService: DistrictService,
    private policeStationService: PoliceStationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      salary: [0, [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      division: ['', Validators.required],
      district: ['', Validators.required],
      policeStation: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.countryService.getAll().subscribe(data => this.countries = data);
    this.divisionService.getAll().subscribe(data => this.allDivisions = data);
    this.districtService.getAll().subscribe(data => this.allDistricts = data);
    this.policeStationService.getAll().subscribe(data => this.allPoliceStations = data);

    // ✅ Check if editing
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.editing = true;
        this.employeeId = id;
        this.loadEmployee(this.employeeId);
      }
    });


  }

  onCountryChange() {
    const selectedCountryId = this.employeeForm.value.country;
    const selectedCountry = this.countries.find(c => c.id == selectedCountryId);
    if (selectedCountry) {
      this.filteredDivisions = this.allDivisions.filter(d => selectedCountry.divisions.includes(d.id!));
      this.filteredDistricts = [];
      this.filteredPoliceStations = [];
      this.employeeForm.patchValue({ division: '', district: '', policeStation: '' });
    }
  }

  onDivisionChange() {
    const selectedDivisionId = this.employeeForm.value.division;
    const selectedDivision = this.allDivisions.find(d => d.id == selectedDivisionId);
    if (selectedDivision) {
      this.filteredDistricts = this.allDistricts.filter(dist => selectedDivision.districts.includes(dist.id!));
      this.filteredPoliceStations = [];
      this.employeeForm.patchValue({ district: '', policeStation: '' });
    }
  }

  onDistrictChange() {
    const selectedDistrictId = this.employeeForm.value.district;
    const selectedDistrict = this.allDistricts.find(dist => dist.id == selectedDistrictId);
    if (selectedDistrict) {
      this.filteredPoliceStations = this.allPoliceStations.filter(ps => selectedDistrict.policeStations.includes(ps.id!));
      this.employeeForm.patchValue({ policeStation: '' });
    }
  }

  onSubmit() {
    if (this.employeeForm.invalid) return;

    const employee: any = { ...this.employeeForm.value };

    if (this.editing) {
      employee.id = this.employeeId;
      this.employeeService.update(employee).subscribe(() => {
        alert('Employee updated successfully!');
        this.router.navigate(['/view-employees']);
      });
    } else {
      this.employeeService.add(employee).subscribe(() => {
        alert('Employee added successfully!');
        this.employeeForm.reset();
        this.filteredDivisions = [];
        this.filteredDistricts = [];
        this.filteredPoliceStations = [];
      });
    }
  }


  loadEmployee(id: string) {
    this.employeeService.getById(id).subscribe(emp => {
      this.employeeForm.patchValue(emp);

      // ✅ Pre-filter dependent dropdowns
      this.onCountryChange();
      this.onDivisionChange();
      this.onDistrictChange();
    });
  }

}
