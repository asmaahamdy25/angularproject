import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';
import { ReviewCommentsListComponent } from './review-comments-list/review-comments-list.component';
import { TotalReviewComponent } from './total-review/total-review.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { ReviewCommentComponent } from './review-comment/review-comment.component';


@NgModule({
    declarations: [
        ReviewsComponent,
        ReviewCommentComponent,
        ReviewCommentsListComponent,
        TotalReviewComponent,
        AddReviewComponent,
        ReviewCommentComponent
],
    imports: [
        CommonModule,
        ReviewsRoutingModule
    ]
  })
  export class ReviewsModule { }
