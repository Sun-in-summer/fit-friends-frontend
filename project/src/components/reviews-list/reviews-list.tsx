import { useAppSelector } from '../../hooks';
import { getReviewsData } from '../../store/review-data/selector';
import ReviewCard from '../review-card/review-card';

const DEFAULT_REVIEWS_QTY = 5;


type ReviewsListProps = {
  id: string | undefined;
}

function ReviewsList({ id }: ReviewsListProps) {

  const reviews = useAppSelector(getReviewsData);
  const slicedReviews = reviews.slice(0, DEFAULT_REVIEWS_QTY);

  return (
    <ul className="reviews-side-bar__list">
      {slicedReviews.map((review) => <ReviewCard review={review} key={review.id} />)}
    </ul>
  );
}

export default ReviewsList;
