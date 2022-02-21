import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dynamic-alert',
  templateUrl: './dynamic-alert.component.html',
  styleUrls: ['./dynamic-alert.component.scss'],
})
export class DynamicAlertComponent {
  constructor(private readonly toastr: ToastrService) {}
  boxes = Array.from(Array(18).keys());

  onScroll() {
    const moreBoxes = Array.from(Array(18).keys());
    this.boxes = [...this.boxes, ...moreBoxes];
  }

  showSuccess(number: any) {
    this.toastr.success(`Button ${number} is clicked.`, 'Alert');
  }
}
