import ThirdBlockImage from '@assets/third-block-image.png'

function ThirdBlock(): JSX.Element {
  return (
    <div className='third-block' id='third-block'>
      <div className='third-block__text-info'>
        <h3 className='third-block__title'>Круто, ты дошел до третьего блока</h3>
        <p className='third-block__text'>
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть
          непредвиденные расходы свыше 15 000 ₽.
        </p>
        <p className='third-block__text'>
          Доступ к заработанным деньгам помогает отказаться от кредитов и
          экономить деньги на процентах и штрафах.
        </p>
      </div>
      <div className='third-block__image'>
        <img src={ThirdBlockImage} alt="block-image"/>
      </div>
    </div>
  );
}

export default ThirdBlock;
