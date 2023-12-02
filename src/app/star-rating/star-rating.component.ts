import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
    <div class="star-rating">
      <span *ngFor="let star of stars" [class.filled]="star <= rating">&#9733;</span>
      <span *ngIf="hasHalfStar">&#9734;</span>
    </div>
  `,
  styles: [`
    .star-rating {
      font-size: 24px;
      color: #FFD700; /* Set the star color */
    }

    .filled {
      color: #FFD700; /* Set the filled star color */
    }
  `]
})
export class StarRatingComponent {
  @Input() rating: number = 0;

  get stars(): number[] {
    return Array.from({ length: Math.floor(this.rating) }, (_, index) => index + 1);
  }

  get hasHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }
}