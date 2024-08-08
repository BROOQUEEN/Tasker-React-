import './SideBarNavigation.css';
import iconTasks from './images/tasks.svg';
import iconHierarchy from './images/hierarchy.svg';
import iconFinance from './images/finance.svg';
import iconDocumentation from './images/documentation.svg';

const SideBarNavigation = (props) => {
    return (
        <div className="left-bar__content">
            <ul className="left-bar__nav">
                <li className="left-bar__item">
                    <a href="" className="left-bar__item-link active">
                        <img src={iconTasks} alt="Задачи" />
                    </a>
                </li>
                <li className="left-bar__item">
                    <a href="" className="left-bar__item-link">
                        <img src={iconHierarchy} alt="Иерархия" />
                    </a>
                </li>
                <li className="left-bar__item">
                    <a href="" className="left-bar__item-link">
                        <img src={iconFinance} alt="Финансы" />
                    </a>
                </li>
                <li className="left-bar__item">
                    <a href="" className="left-bar__item-link">
                        <img src={iconDocumentation} alt="Документы" />
                    </a>
                </li>
            </ul>
        </div>	
    )
}

export default SideBarNavigation;