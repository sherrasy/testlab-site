function HowToInfo(): JSX.Element {
  const howToData = [
    {
      id: 1,
      icon: 'icon1',
      title: 'Прочитай задание внимательно',
      text: 'Думаю у тебя не займет это больше двух-трех минут',
    },
    {
        id: 2,
        icon: 'icon2',
        title: 'Изучи весь макет заранее',
        text: 'Подумай как это будет работать на разных разрешениях и при скролле',
      },
    {
        id: 3,
        icon: 'icon3',
        title: 'Сделай хорошо',
        text: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
      },
    {
        id: 4,
        icon: 'icon4',
        title: 'Получи предложение',
        text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
      },
  ];
  return (
    <div className='how-to' id='how-to'>
      {howToData.map(({ id, icon, title, text }) => (
        <p key={id}>
            {icon}
            <h6> {title}</h6>
            <span> {text}</span>
        </p>
      ))}
    </div>
  );
}

export default HowToInfo;
