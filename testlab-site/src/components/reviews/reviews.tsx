import Slider, { Settings } from 'react-slick';
import { ReviewNextArrow, ReviewPrevArrow } from './review-buttons';
import ReviewCard from './review-card';
import { reviewsData } from '@utils/mockData/reviews-data';

function Reviews(): JSX.Element {
  const settings: Settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    draggable: false,
    swipe:false,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 1187,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipe:true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          swipe:true,
        },
      },
    ],
    nextArrow: <ReviewNextArrow />,
    prevArrow: <ReviewPrevArrow />,
    
  };
  return (
    <div className='reviews'>
      <h1 className='reviews__title'>Отзывы</h1>
      <div className='reviews__swiper-container'>
        <div className='reviews__swiper swiper'>
          <Slider {...settings} >
            {reviewsData.map((review) => (
              <div className='swiper__slide' key={review.id}>
                <ReviewCard review={review} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
