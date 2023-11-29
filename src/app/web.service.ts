import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {

    private businessID: any;


    constructor(private http: HttpClient) { }

    getBusinesses(page: number) {
        return this.http.get('http://localhost:5000/api/v1.0/businesses?pn=' + page);

    }

    getBusiness(id: any) {
        this.businessID = id;
        return this.http.get('http://localhost:5000/api/v1.0/businesses' + id);
    }

    getReviews(id: any) {
        return this.http.get('http://localhost:5000/api/v1.0/businesses' + id + '/reviews');
    }

    postReview(review: any) {
        let postData = new FormData();
        postData.append("name", review.name);
        postData.append("text", review.review);
        postData.append("stars", review.stars);

        let today = new Date();
        let todayDate = today.getFullYear() + "-" +
            today.getMonth() + "-" +
            today.getDate();
        postData.append("date", todayDate);

        return this.http.post('http://localhost:5000/api/v1.0/businesses/' + this.businessID + '/reviews', postData);

    }

}