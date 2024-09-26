import { howToData } from '@utils/mockData/how-to-data';

function HowToInfo(): JSX.Element {
  return (
    <div className='how-to-info' id='how-to'>
      <h2 className='how-to-info__title'> Как это работает</h2>
      <div className='how-to-info__container'>
        {howToData.map(({ id, icon, title, text }) => (
          <div className='how-to-info__item how-to-item' key={id}>
            <div className='how-to-item__icon'>{icon}</div>
            <div className='how-to-item__title-container'>
              <h6 className='how-to-item__title'> {title}</h6>
              <span className='how-to-item__text'> {text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowToInfo;
