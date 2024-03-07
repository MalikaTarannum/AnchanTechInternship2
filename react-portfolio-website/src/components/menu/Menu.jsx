import './Menu.scss';

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul className="menu-links">
        <li className="menu-items" onClick={() => (setMenuOpen(false))}>
            <a href="#intro" className="items">home</a>
        </li>
        <li className="menu-items" onClick={() => (setMenuOpen(false))}>
            <a href="#portfolio" className="items">portfolio</a>
        </li>
        <li className="menu-items" onClick={() => (setMenuOpen(false))}>
            <a href="#works" className="items">works</a>
        </li>
        <li className="menu-items" onClick={() => (setMenuOpen(false))}>
            <a href="#testimonial" className="items">testimonial</a>
        </li>
        <li className="menu-items" onClick={() => (setMenuOpen(false))}>
            <a href="#contact" className="items">contacts</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu;
