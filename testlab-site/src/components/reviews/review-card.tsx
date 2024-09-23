import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function ReviewCard(): JSX.Element {
  const mock = [
    {
      id: 1,
      name: 'Иван Иванов',
      avatar: 'avatar',
      city: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
  ];

  return (
    <div className='reviews'>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className='mySwiper'
      >
        {mock.map(({ id, name, avatar, city, text }) => (
          <SwiperSlide className='reviews__card review-card' key={id}>
            <div className='review-card__header'>
              <img src={avatar} alt={`avatar-${id}`} />
              <div>
                <h6>{name}</h6>
                <span>{city}</span>
              </div>
            </div>
            <div className='review-card__text'>{text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ReviewCard;
