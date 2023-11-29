import { Component } from '@angular/core';
import { WebService } from './web.service';


@Component({
  selector: 'businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent {

    business_list: any = [];
    page: number = 1;

    constructor(public webService: WebService) {}

    ngOnInit() {
      if (sessionStorage['page']) {
        this.page = Number(sessionStorage['page']);
      }

      this.business_list = this.webService.getBusinesses(this.page);
    }

    previousPage() {
      if (this.page > 1) {
        this.page = this.page - 1;
        sessionStorage['page'] = this.page;
         this.business_list =
         this.webService.getBusinesses(this.page);
        
        }
     }

    nextPage() {
      this.page = this.page + 1;
      sessionStorage['page'] = this.page;
      this.business_list =
      this.webService.getBusinesses(this.page);
     }


}
