import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoliceStationService } from '../../service/police-station.service';
import { PoliceStation } from '../../model/policeStation';

@Component({
  selector: 'app-addpolicestation',
  standalone: false,
  templateUrl: './addpolicestation.html',
  styleUrls: ['./addpolicestation.css']
})
export class Addpolicestation implements OnInit {
  policeStations: PoliceStation[] = [];
  psForm: FormGroup;
  editing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private psService: PoliceStationService
  ) {
    this.psForm = this.fb.group({
      id: [''], // JSON Server uses number
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadPoliceStations();
  }

  loadPoliceStations() {
    this.psService.getAll().subscribe(data => {
      this.policeStations = data;
    });
  }

  onSubmit() {
  if (this.psForm.invalid) return;

  if (this.editing) {
    this.psService.update(this.psForm.value).subscribe(() => {
      alert('Updated successfully!');
      this.loadPoliceStations();
      this.cancelEdit();
    });
  } else {
    const { name } = this.psForm.value; // ⬅️ Only send the name
    this.psService.add({ name }).subscribe(() => {
      alert('Added successfully!');
      this.loadPoliceStations();
      this.psForm.reset();
      this.editing = false;
    });
  }
}

  editPoliceStation(ps: PoliceStation) {
    this.editing = true;
    this.psForm.patchValue({
      id: ps.id,
      name: ps.name
    });
  }

  deletePoliceStation(id: string ) {
    if (confirm('Are you sure?')) {
      this.psService.delete(id).subscribe(() => {
        alert('Deleted!');
        this.loadPoliceStations();
      });
    }
  }

  cancelEdit() {
    this.editing = false;
    this.psForm.reset();
  }
}
