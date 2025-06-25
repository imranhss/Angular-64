import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { StudentService } from '../service/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { R } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-updatestudent',
  standalone: false,
  templateUrl: './updatestudent.html',
  styleUrl: './updatestudent.css'
})
export class Updatestudent implements OnInit {

  ngOnInit(): void {
    this.loadStudentById();
  }


  id: string = '';
  student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }




  loadStudentById() {
    this.student = new Student();
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe({
      next: (res) => {

        this.student = res;


      },

      error: (err) => {

        console.log(err);

      }



    });

  }






}
