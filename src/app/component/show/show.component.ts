import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
    
  Student: any;

  constructor(private data: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const studentId = this.route.snapshot.params['id'];

    // Fetch the student data using the studentId
    this.data.getIndividualStudent(studentId).subscribe((res: any) => {
      console.log(res);
      this.Student = res;
    });
  }
}
