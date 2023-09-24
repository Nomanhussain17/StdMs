import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  Student:any = [];

  constructor(private fb: FormBuilder, private data:StudentService) { }

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
  }

  addSuccess = false;

  save() {
    this.data.saveStudentData(this.Student.value).subscribe((res) => { console.log(res)})
    console.log(this.Student.value)
    this.Student.reset({})
    this.addSuccess = true;
    setTimeout(() => {
      this.addSuccess = false;
    }, 3000);
  }

}
