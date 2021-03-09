import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularEmployeeManagement';
  constructor(private service:SharedService) { }

  DepartmentList:any=[];

  ngOnInit(): void {
    this.DepList();
  }

  DepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
    });
}
}
