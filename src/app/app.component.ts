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
  showAccount: boolean = false;

  constructor(
    private service: GetFinanceData
  ) { }


  ngOnInit(): void {
    this.getMockData();
  }

  /**
   * get mock data from service 
   * @getMockData
   */

  getMockData(): void {
    const accountsDataObservable = this.service.getAccountsMock();
    accountsDataObservable.subscribe((response: AccountModel[]) => {
      this.dataItems = response;
    });
  }


  /**
   * sort the list as per property avaibale in mock data 
   * @shortList
   */

  shortList(selectedProperty) {
    let validFlag = isNaN(this.pageItem[0][selectedProperty]);
    if (!validFlag) {
      this.pageItem.sort((currentItem, nextItem) => {
        return this.sortCashFlag ? (currentItem[selectedProperty] - nextItem[selectedProperty]) : (nextItem[selectedProperty] - currentItem[selectedProperty]);
      })
      this.sortCashFlag = !this.sortCashFlag;
      this.showAccount = false;
    } else {
      this.pageItem.sort((currentItem, nextItem) => {
        return this.sortAccountFlag ? (currentItem[selectedProperty].match(/\d+/g).map(Number) - nextItem[selectedProperty].match(/\d+/g).map(Number)) : (nextItem[selectedProperty].match(/\d+/g).map(Number) - currentItem[selectedProperty].match(/\d+/g).map(Number));
      })
      this.sortAccountFlag = !this.sortAccountFlag;
      this.showAccount = true;
    }
  }

}
