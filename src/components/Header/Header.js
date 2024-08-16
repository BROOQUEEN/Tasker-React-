import './Header.css';
import iconTasks from './images/tasks.svg';
import iconGitHub from './images/Github.svg';
import iconPlus from './images/plus.svg';

const Header = (props) => {
    return (
        <header className="header">
            <div className="header-left">
                <ul className="header__caps">
                    <li className="header__cap">
                        <div className="header__cap-img">
                            <img src={iconTasks} alt="" />
                        </div>
                        <div className="header__cap-text">Задачи</div>
                    </li>
                    <li className="header__cap">
                        <div className="header__cap-img">
                            <img src={iconGitHub} alt="" />
                        </div>
                        <div className="header__cap-text">Энергосфера</div>
                    </li>
                    <li className="header__cap">
                        <div className="header__cap-img">
                            <img src={iconGitHub} alt="" />
                        </div>
                        <div className="header__cap-text">ДИТ</div>
                    </li>
                </ul>
            </div>

            <div className="header-right">
                <button className="header-right__create-task" id="btn__create-task">
                    <img src={iconPlus} alt="" />Создать задачу
                </button>
            </div>
        </header>
    )
}

export default Header;