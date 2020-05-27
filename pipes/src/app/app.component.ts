import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  payeeName: string = '';
  paymentDate: string = '';
  amountPaid: string = '';
  height:string = '';
  miles:string = '';

  onMilesChange(miles:string){
    this.miles = miles;
  }

  onNameChange(name: string) {
    this.payeeName = name;
  }

  onDateChange(date: string) {
    this.paymentDate = date;
  }

  onPaymentChange(amount: string) {
    this.amountPaid = amount;
  }

  onHeightChange(height: string) {
    this.height = height;
  }
}
