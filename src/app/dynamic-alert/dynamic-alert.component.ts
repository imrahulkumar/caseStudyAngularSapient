import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dynamic-alert',
  templateUrl: './dynamic-alert.component.html',
  styleUrls: ['./dynamic-alert.component.scss']
})
export class DynamicAlertComponent  {

  constructor(private readonly toastr: ToastrService) { }
  boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  onScroll() {
    const moreBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.boxes = [...this.boxes, ...moreBoxes];
  }


  showSuccess(number:any){
    this.toastr.success(`Button ${number} is clicked.`, 'Alert')
}
}
