import Logo from '@assets/logo.svg?react';
import MenuIcon from '@assets/menu.svg?react';
import ExitIcon from '@assets/menu-exit.svg?react';
import { useState } from 'react';
function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleOptionClick = (hash: string) => {
    handleOnClick();
    window.location.href = hash;
  }

  return (
    <div className={isOpen ? 'header menu--dropped' : 'header'} >
      <div className='header__logo'>
        <Logo />
        <h5>testLab</h5>
      </div>
      <nav className='header__navigation navigation'>
        <button className='navigation__button' onClick={handleOnClick}>{isOpen ? <ExitIcon /> : <MenuIcon />}</button>
        <ul className={isOpen ? 'navigation__list--dropped' : 'navigation__list'}>
          <li className='navigation__option' onClick={isOpen ? () => handleOptionClick('#how-to') : undefined}>
            <a href='#how-to' >Как это работает</a>
          </li>
          <li className='navigation__option' onClick={isOpen ? () => handleOptionClick('#third-block') : undefined}>
            <a href='#third-block'>3-й блок</a>
          </li>
          <li className='navigation__option' onClick={isOpen ? () => handleOptionClick('#faq') : undefined}>
            <a href='#faq' >Вопросы и ответы</a>
          </li>
          <li className='navigation__option' onClick={isOpen ? () => handleOptionClick('#form') : undefined}>
            <a href='#form' >Форма</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
