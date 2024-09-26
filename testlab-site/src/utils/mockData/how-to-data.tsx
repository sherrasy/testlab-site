import WaitingIcon from '@assets/waiting.svg?react'
import SecureIcon from '@assets/secure.svg?react'
import DeliveryIcon from '@assets/delivery-truck.svg?react'
import BagsIcon from '@assets/money-bags.svg?react'

export const howToData = [
    {
      id: 1,
      icon: <WaitingIcon/>,
      title: 'Прочитай задание внимательно',
      text: 'Думаю у тебя не займет это больше двух-трех минут',
    },
    {
        id: 2,
        icon: <DeliveryIcon/>,
        title: 'Изучи весь макет заранее',
        text: 'Подумай как это будет работать на разных разрешениях и при скролле',
      },
    {
        id: 3,
        icon: <SecureIcon/>,
        title: 'Сделай хорошо',
        text: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
      },
    {
        id: 4,
        icon: <BagsIcon/>,
        title: 'Получи предложение',
        text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
      },
  ];