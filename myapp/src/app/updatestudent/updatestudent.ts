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

  id: string = '';
  student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadStudentById();
    // this.route.paramMap.subscribe(params => {
    //   this.id = params.get('id') || '';
      
    //   if (this.id) {
    //     this.loadStudentById();
    //   }
    // });
  }

  loadStudentById() {
    this.id = this.route.snapshot.params['id'];
  
    this.studentService.getStudentById(this.id).subscribe({
      next: (res) => {
        this.student = res;
        this.cdr.markForCheck(); // Uncomment if using OnPush
      },
      error: (err) => {
        console.error('Error fetching student:', err);
      }
    });
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.id, this.student)
      .subscribe({
        next: () => this.router.navigate(['/allstu']),
        error: err => console.error('Update failed', err)
      });
  }


}
