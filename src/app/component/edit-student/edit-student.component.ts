import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  Student: any = [];

  constructor(private fb: FormBuilder, private data: StudentService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.Student = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      details: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      addmissionDate: ['', Validators.required],
      monthlyFees: ['', Validators.required]
    });

    this.data.getIndividualStudent(this.router.snapshot.params['id']).subscribe((res: any) => {
      console.log(res)
      this.Student = this.fb.group({
        name: [res['name']],
        email: [res['email']],
        details: [res['details']],
        contact: [res['contact']],
        address: [res['address']],
        addmissionDate: [res['addmissionDate']],
        monthlyFees: [res['monthlyFees']]
      })
    })
  }

  updateSuccess = false;

  update() {
    this.data.update(this.router.snapshot.params['id'], this.Student.value).subscribe((res) => {
      console.log(res);
      this.updateSuccess = true;
    })
    setTimeout(() => {
      this.updateSuccess = false;
    }, 3000);

    // console.log(this.Student.value);
    this.Student.reset({})
  }

}
