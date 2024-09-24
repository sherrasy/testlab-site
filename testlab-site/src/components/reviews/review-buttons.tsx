import { CustomArrowProps } from 'react-slick';
import RightArrow from '@assets/pagination-right-arrow.svg?react';
import LeftArrow from '@assets/pagination-left-arrow.svg?react';

export function ReviewNextArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  const isDisabled = className ? className.includes('slick-disabled') : false;
  return (
    <div
      className={`slick-slider__arrow-next ${
        isDisabled ? 'disabled-navigation' : ''
      }`}
      onClick={onClick}
    >
      <RightArrow />
    </div>
  );
}

export function ReviewPrevArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  const isDisabled = className ? className.includes('slick-disabled') : false;
  return (
    <div
      className={`slick-slider__arrow-prev ${
        isDisabled ? 'disabled-navigation' : ''
      }`}
      onClick={onClick}
    >
      <LeftArrow />
    </div>
  );
}

export default { ReviewNextArrow, ReviewPrevArrow };
