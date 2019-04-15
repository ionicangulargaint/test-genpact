import { Component } from '@angular/core';
import { AccountModel } from './model/data.model';
import { GetFinanceData } from './services/data.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageItem: any = [];
  dataItems: AccountModel[];
  sortCashFlag: any;
  sortAccountFlag: any; 
  constructor(private service: GetFinanceData) { }

  ngOnInit(): void {
    this.getMockData();
  }

  getMockData(): void {
    this.dataItems = this.service.getAccountsMock();    
  }


  shortList(selectedProperty) {
    let validFlag = isNaN(this.pageItem[0][selectedProperty]);
    if (!validFlag) {
      this.pageItem.sort((currentItem, nextItem) => {
        return this.sortCashFlag ? (currentItem[selectedProperty] - nextItem[selectedProperty]) : (nextItem[selectedProperty] - currentItem[selectedProperty]);
      })
      this.sortCashFlag = !this.sortCashFlag;      
    } else {
      this.pageItem.sort((currentItem, nextItem) => {
        return this.sortAccountFlag ? (currentItem[selectedProperty].match(/\d+/g).map(Number) - nextItem[selectedProperty].match(/\d+/g).map(Number)) : (nextItem[selectedProperty].match(/\d+/g).map(Number) - currentItem[selectedProperty].match(/\d+/g).map(Number));
      })
      this.sortAccountFlag = !this.sortAccountFlag;
    }

  }

  sortAccount() {
    this.pageItem.sort((obj1, obj2) => {
      if (this.sortAccountFlag) {
        return (obj1.account.split(" ")[2] - obj2.account.split(" ")[2]);
      } else {
        return (obj2.account.split(" ")[2] - obj1.account.split(" ")[2]);
      }
    });

  }
}
