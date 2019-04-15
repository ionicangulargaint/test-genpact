import { Component, Input } from '@angular/core';

@Component({
  selector: 'paginitation',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginitationComponent {

  @Input() completeData: any = [];
  @Input() itemPerPage: Number = 0;
  @Input() loadArray: any = [];
  itemCount: any = 0;
  showButton: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.itemCount = this.itemPerPage;
    this.setPagination(true);
  }

 
  
    /**
     * function to set the pagination
     * @setPagination
     */

  setPagination(calledFirst) {
    Object.assign(this.loadArray, this.completeData.slice(0, calledFirst ? this.itemCount : this.itemCount += this.itemCount));
    this.validateList();
  }
  
    /**
     * get called when clicked on load more function and initilize the paginitaion again
     * @loadMore
     */

  loadMore() {
    this.setPagination(false);
    this.validateList();
  }

    /**
     * purpose of the funtion to validate when to show and hide the load more button depending upon perpage count 
     * @validateList
     */

  validateList() {
    this.showButton = this.loadArray.length != this.completeData.length ? true : false;
  }

}
