import './Topbar.scss';
import { Person, Mail } from '@mui/icons-material';

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper flex">
            <div className="left flex">
                <a href="#intro" className="logo">CodingLover.</a>
                <div className="itemContainer margin-right flex">
                  <Person className="icon" />
                  <span className="icon-text">+92 3456765456</span>
                </div>
                <div className="itemContainer flex">
                  <Mail className="icon" />
                  <span className="icon-text">codinglover@gmail.com</span>
                </div>
            </div>
            <div className="right">
              <div className="hamburger flex" onClick={() => setMenuOpen(!menuOpen)}>
                <div className="line1 ham-line"></div>
                <div className="line2 ham-line"></div>
                <div className="line3 ham-line"></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar
