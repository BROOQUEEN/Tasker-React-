import './SideBar.css';
import companyLogo from './images/logo.png';
import iconLogout from './images/logout.svg';
import SideBarNavigation from './SideBarNavigation';


const SideBar = (props) => {
    return (
        <section className="left-bar">
            <div className="left-bar__logo">
                <a href="/" className="left-bar__logo-link">
                    <img src={companyLogo} alt="Задачи" />
                </a>
            </div>
            <SideBarNavigation />
            
            <div className="left-bar__bottom">
                <a href="" className="left-bar__item-link">
                    <img src={iconLogout} alt="Выйти из системы" />
                </a>
            </div>
            
        </section>
    )
}

export default SideBar;