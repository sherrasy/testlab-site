import { Review } from '@frontend-types/review.interface';

type ReviewCardProps = { review: Review };

function ReviewCard({ review }: ReviewCardProps): JSX.Element {
  const { id, name, avatar, city, text } = review;
  return (
    <div className='reviews__card review-card'>
      <div className='review-card__header'>
        <img
          className='review-card__avatar'
          src={avatar}
          alt={`avatar-${id}`}
        />
        <div className='review-card__user-info user-info'>
          <h6 className='user-info__name'>{name}</h6>
          <span className='user-info__city'>{city}</span>
        </div>
      </div>
      <div className='review-card__text'>{text}</div>
    </div>
  );
}

export default ReviewCard;
