function Reviews(): JSX.Element {
  const mock = [{ id: 1, name: 'Иван Иванов', avatar: 'avatar', city: 'Санкт-Петербург', text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.' }]

  //https://swiperjs.com/react
  return (
    <div className='reviews'>
      {mock.map(({ id,name, avatar, city, text }) =>( 
        <div className="reviews__card review-card" key={id}>
          <div className="review-card__header">
            <img src={avatar} alt={`avatar-${id}`} />
            <div>
              <h6>{name}</h6>
              <span>{city}</span>
            </div>
          </div>
          <div className="review-card__text">{text}</div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
