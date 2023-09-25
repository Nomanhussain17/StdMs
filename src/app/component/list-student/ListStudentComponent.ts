import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';



@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
  providers: [StudentService]
})
export class ListStudentComponent implements OnInit, AfterViewInit {


  constructor(private stdData: StudentService) { }

  ngOnInit(): void { }

  @ViewChild(DataTableDirective, { static: false }) dtElement!: DataTableDirective;


  Student: any;
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  table(){
    this.dtoptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      search: {
        caseInsensitive: true, // Make the search case-insensitive
        regex: true, // Enable regular expression search
        smart: true, // Enable smart search (search for whole words)
      },
      responsive: true,

    };
    this.getdata()
  }

  ngAfterViewInit(): void {
    this.table();
  }

  getdata() {
    this.stdData.GetAllStudent().subscribe((res) => {
      console.log(res);

      this.Student = res
      console.log(this.Student)
      this.dtTrigger.next(null);

    })
  }

  refreshDataTable() {
    // Destroy the DataTable instance
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();

      // Reinitialize the DataTable with updated data
      this.table();
    });
  }


  hideModal: Boolean = true

  rowId: any;

  hide(id: any) {
    this.hideModal = false;
    this.rowId = id;
  }

  cancel() {
    this.hideModal = true;
  }
  deleteSuccess = false

  DeleteStudent(id: any) {
    this.stdData.deleteStudent(id).subscribe((res: any) => {
      console.log(res);
      this.refreshDataTable();
    })
    this.hideModal = true;
    this.deleteSuccess = true;
    setTimeout(() => {
      this.deleteSuccess = false;
    }, 3000);
  }

  }

