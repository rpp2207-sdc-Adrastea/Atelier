import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ReviewTile } from './ReviewTile.jsx';


export const ReviewsList = (props) => {
  var reviews = props.reviews;
  var setReviews = props.setReviews;
  var reviewsShowing = props.reviewsShowing;
  var setReviewsShowing = props.setReviewsShowing;
  var reviewsSortBy = props.reviewsSortBy;
  var setSort = props.setSort;

  return (
    <div>
      <p>
      {reviews.length} reviews, sorted by&nbsp;
      <select onChange={e => {setSort(e.target.value)}}>
        <option value="relevant">relevance</option>
        <option value="newest">newest</option>
        <option value="helpful">most helpful</option>
      </select>
      </p>
      <br />
      <br />
      { reviews.slice(0,reviewsShowing).map((review, index)=> {
          return (<div key={index + 1} ><ReviewTile review={review} /></div>) ;
        }) }
      { reviews.length > 2 && reviewsShowing < reviews.length ? <button onClick={() => setReviewsShowing(reviewsShowing+2)}>More Reviews</button> : null }
      <button>Add a Review</button>
    </div>
  )
};