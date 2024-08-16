import iconSettings from './images/settings.svg';

const HeaderTasks = () => {
    return (
        <div className="table-subtasks__left">
        <div className="table-subtasks__header">
            <div className="table-subtasks__header-left">
                <div className="table-subtasks__header__search"><img src={iconSettings} alt="" /></div>
                <form method="post" action="/vendor/task/search.php">
                    <input className="table-subtasks__header__search-input" type="search" name="input_search" placeholder="Поиск по проекту" />
                </form>
                
                
            </div>
            <div className="table-subtasks__header-right">
                <button className="table-subtasks__header-right__btn active">Только задачи</button>
                <button className="table-subtasks__header-right__btn">Только подзадачи</button>
            </div>
        </div>
    </div>
    )
}

export default HeaderTasks;