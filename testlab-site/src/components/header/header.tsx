
function Header(): JSX.Element {

  return (
    <div className="header">
        <div className="header__logo"><span>testLab</span></div>
        <div className="header__navigation">
            <ul>
                <li> <a href="#how-to">Как это работает</a></li>
                <li> <a href="#third-block">3-й блок</a></li>
                <li> <a href="#faq">Вопросы и ответы</a></li>
                <li> <a href="#form">Форма</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header

