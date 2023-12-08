import { Component } from '@angular/core';
import { WebService } from './web.service';
import { Router } from '@angular/router';


@Component({
  selector: 'businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent {



  photoPaths: string[] = [
    '/assets/imgs/rest-1.jpg',
    '/assets/imgs/rest-2.jpg',
    '/assets/imgs/rest-3.jpg',
    '/assets/imgs/rest-4.jpg',
    '/assets/imgs/rest-5.jpg',
    '/assets/imgs/rest-6.jpg',
    '/assets/imgs/rest-7.jpg',
    '/assets/imgs/rest-8.jpg',
    '/assets/imgs/rest-9.jpg',
    '/assets/imgs/rest-10.jpg',
    '/assets/imgs/rest-11.jpg',
    '/assets/imgs/rest-12.jpg',
    '/assets/imgs/rest-13.jpg',
    '/assets/imgs/rest-14.jpg',
    '/assets/imgs/rest-15.jpg',
    '/assets/imgs/rest-16.jpg',
    '/assets/imgs/rest-17.jpg',
    '/assets/imgs/rest-18.jpg',
    '/assets/imgs/rest-19.jpg',
    '/assets/imgs/rest-20.jpg',
    '/assets/imgs/rest-21.jpg',
    '/assets/imgs/rest-22.jpg',
    '/assets/imgs/rest-23.jpg',
    '/assets/imgs/rest-24.jpg',
    '/assets/imgs/rest-25.jpg',
    '/assets/imgs/rest-26.jpg',
    '/assets/imgs/rest-27.jpg',
    '/assets/imgs/rest-28.jpg',
    '/assets/imgs/rest-29.jpg',
    '/assets/imgs/rest-30.jpg',
    '/assets/imgs/rest-31.jpg',
    '/assets/imgs/rest-32.jpg',
    '/assets/imgs/rest-33.jpg',
    '/assets/imgs/rest-34.jpg',
    '/assets/imgs/rest-35.jpg',
    '/assets/imgs/rest-36.jpg',
    '/assets/imgs/rest-37.jpg',
    '/assets/imgs/rest-37.jpg',
    '/assets/imgs/rest-38.jpg',
    '/assets/imgs/rest-39.jpg',
    '/assets/imgs/rest-40.jpg',
    '/assets/imgs/rest-41.jpg',
    '/assets/imgs/rest-42.jpg',
    '/assets/imgs/rest-43.jpg',
    '/assets/imgs/rest-44.jpg',
    '/assets/imgs/rest-45.jpg',
    '/assets/imgs/rest-46.jpg',
    '/assets/imgs/rest-47.jpg',
    '/assets/imgs/rest-48.jpg',
    '/assets/imgs/rest-49.jpg',
    '/assets/imgs/rest-50.jpg',
    '/assets/imgs/rest-51.jpg',
    '/assets/imgs/rest-52.jpg',
    '/assets/imgs/rest-53.jpg',
    '/assets/imgs/rest-54.jpg',
    '/assets/imgs/rest-55.jpg',
    '/assets/imgs/rest-56.jpg',
    '/assets/imgs/rest-57.jpg',
    '/assets/imgs/rest-58.jpg',
    '/assets/imgs/rest-59.jpg',
    '/assets/imgs/rest-60.jpg',
    '/assets/imgs/rest-61.jpg',
    '/assets/imgs/rest-62.jpg',
    '/assets/imgs/rest-63.jpg',
    '/assets/imgs/rest-64.jpg',
    '/assets/imgs/rest-65.jpg',
    '/assets/imgs/rest-66.jpg',
    '/assets/imgs/rest-67.jpg',
    '/assets/imgs/rest-68.jpg',
    '/assets/imgs/rest-69.jpg',
    '/assets/imgs/rest-70.jpg',
    '/assets/imgs/rest-72.jpg',
    '/assets/imgs/rest-73.jpg',
    '/assets/imgs/rest-74.jpg',
    '/assets/imgs/rest-75.jpg',
    '/assets/imgs/rest-76.jpg',
    '/assets/imgs/rest-77.jpg',
    '/assets/imgs/rest-78.jpg',
    '/assets/imgs/rest-79.jpg',
    '/assets/imgs/rest-80.jpg',
    '/assets/imgs/rest-81.jpg',
    '/assets/imgs/rest-82.jpg',
    '/assets/imgs/rest-83.jpg',
    '/assets/imgs/rest-84.jpg',
    '/assets/imgs/rest-85.jpg',
    '/assets/imgs/rest-86.jpg',
    '/assets/imgs/rest-87.jpg',
    '/assets/imgs/rest-88.jpg',
    '/assets/imgs/rest-89.jpg',
    '/assets/imgs/rest-90.jpg',
    '/assets/imgs/rest-91.jpg',
    '/assets/imgs/rest-92.jpg',
    '/assets/imgs/rest-93.jpg',
    '/assets/imgs/rest-94.jpg',
    '/assets/imgs/rest-95.jpg',
    '/assets/imgs/rest-96.jpg',
    '/assets/imgs/rest-97.jpg',
    '/assets/imgs/rest-98.jpg',
    '/assets/imgs/rest-99.jpg',
    '/assets/imgs/rest-100.jpg',
    '/assets/imgs/rest-101.jpg',
    '/assets/imgs/rest-102.jpg',
    '/assets/imgs/rest-103.jpg',
    '/assets/imgs/rest-104.jpg',
    '/assets/imgs/rest-105.jpg',
    '/assets/imgs/rest-106.jpg',
    '/assets/imgs/rest-107.jpg',
    '/assets/imgs/rest-108.jpg',
    '/assets/imgs/rest-109.jpg',
  ];

    business_list: any = [];
    page: number = 1;

    constructor(public webService: WebService, private router: Router) {}

    ngOnInit() {
      if (sessionStorage['page']) {
        this.page = Number(sessionStorage['page']);
      }

      this.business_list = this.webService.getBusinesses(this.page);

      this.business_list = this.business_list.map((business: any, index: any) => {
        // business.image = this.photoPaths[index];
        return business;
      });

      console.log(this.business_list);
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

     navigateToBusiness() {
      this.router.navigate(['/business']);
    }


}
