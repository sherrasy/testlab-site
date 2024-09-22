import Logo from '@assets/logo.svg?react';
function Header(): JSX.Element {
  return (
    <div className='header'>
      <div className='header__logo'>
        <Logo />
        <h5>testLab</h5>
      </div>
      <nav className='header__navigation navigation'>
        <ul className='navigation__list'>
          <li className='navigation__option'>
            <a href='#how-to'>Как это работает</a>
          </li>
          <li className='navigation__option'>
            <a href='#third-block'>3-й блок</a>
          </li>
          <li className='navigation__option'>
            <a href='#faq'>Вопросы и ответы</a>
          </li>
          <li className='navigation__option'>
            <a href='#form'>Форма</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
