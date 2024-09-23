import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

function Reviews(): JSX.Element {
  const mock = [
    {
      id: 1,
      name: 'Иван Иванов',
      avatar: 'src/assets/avatar_1.jpg',
      city: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
      id: 2,
      name: 'Петр',
      avatar: 'src/assets/avatar_empty.jpg',
      city: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
      id: 3,
      name: 'Олег',
      avatar: 'src/assets/avatar_empty.jpg',
      city: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
      id: 4,
      name: 'Игорь',
      avatar: 'src/assets/avatar_empty.jpg',
      city: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
      id: 5,
      name: 'Владимир',
      avatar: 'src/assets/avatar_empty.jpg',
      city: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
      id: 6,
      name: 'Иван Иванов',
      avatar: 'src/assets/avatar_empty.jpg',
      city: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
  ];

  const settings: SwiperProps = {
    spaceBetween: 10,
    slidesPerView: 1,
    slidesOffsetBefore:0,
    slidesOffsetAfter:0,
    modules:[Navigation, Pagination],
    pagination: { enabled: true, clickable: true, el:'.swiper-pagination' },
    navigation: { enabled: true,
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
        },
    centeredSlides: true,
    loop:true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  };
  return (
    <div className='reviews'>
      <h1 className='reviews__title'>Отзывы</h1>
      <div className='reviews__swiper-container'>
        <Swiper
          {...settings}
          className='reviews__swiper'
        >
          {mock.map(({ id, name, avatar, city, text }) => (
            <SwiperSlide key={id}>
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
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default Reviews;
