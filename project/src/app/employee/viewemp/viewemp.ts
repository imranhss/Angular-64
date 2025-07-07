import { Component, OnInit } from '@angular/core';
import { Employeeservice } from '../../service/employeeservice';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-viewemp',
  standalone: false,
  templateUrl: './viewemp.html',
  styleUrl: './viewemp.css'
})
export class Viewemp implements OnInit {

  id: string = '';
  emp : Employee =new Employee();

  constructor(
    private empService: Employeeservice,
    private route: ActivatedRoute,



  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loaddata();

  }

  loaddata() {
    this.empService.getByEmpId(this.id).subscribe({
      next: (res) => {
        this.emp = res;
        

      },
      error: () =>{

      }


    });
  }



}
