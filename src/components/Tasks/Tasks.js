import './Tasks.css';

import iconCheckSquare from './images/check-square.svg';
import iconName from './images/name.svg';
import iconVoice from './images/voice.svg';
import iconUserEdit from './images/user-edit.svg';
import iconUserCheck from './images/user-check.svg';
import iconTimeAlarm from './images/time-alarm.svg';
import iconHierarchyTo from './images/hierarchy-2.svg';
import iconTags from './images/tags.svg';
import Task from './Task';
import HeaderTasks from '../Header/HeaderTasks';

const Tasks = (props) => {

    const listTasks = [
        {
          id: 1,
          name: "Купить Колу",
          status: "В работе",
          term: "2024.08.17",
          tags: "Газировка"
        },
        {
          id: 2,
          name: "Помыть посуду",
          status: "Отложено",
          term: "2024.08.16",
          tags: "Посуда"
        },
        {
          id: 3,
          name: "Отметить Новый год Отметить Новый  Отметить  год Отметить Новый год Отметить Новый  Отметить  год Отметить Новый год Отметить Новый  Отметить  год Отметить Новый год Отметить Новый  Отметить  год",
          status: "Запланировано",
          term: "2024.12.31",
          tags: "Новый год, Праздник, Новый год, Праздник, "
        }
      ];

    return (

        <section class="table-subtasks">
            <HeaderTasks></HeaderTasks>

            

        <div class="table-subtasks__content">
          <table class="table-subtasks__table">
            <thead>
              <tr class="table-subtasks__column">
                <th class="table-subtasks__column-name table-subtasks__check"><img src={iconCheckSquare} alt="" /></th>
                <th class="table-subtasks__column-name table-subtasks__id">ID задачи</th>
                <th class="table-subtasks__column-name table-subtasks__name"><img src={iconName} alt="" />Название</th>
                <th class="table-subtasks__column-name table-subtasks__status"><img src={iconVoice} alt="" />Статус</th>
                <th class="table-subtasks__column-name table-subtasks__executor"><img src={iconUserEdit} alt="" />Исполнитель</th>
                <th class="table-subtasks__column-name table-subtasks__controlling"><img src={iconUserCheck} alt="" />Контролирующий</th>
                <th class="table-subtasks__column-name table-subtasks__term"><img src={iconTimeAlarm} alt="" />Сроки</th>
                <th class="table-subtasks__column-name table-subtasks__projects"><img src={iconHierarchyTo} alt="" />Проекты</th>
                <th class="table-subtasks__column-name table-subtasks__tags"><img src={iconTags} alt="" />Метки</th>
              </tr>
            </thead>

            <tbody>
                      <Task 
                          id={listTasks[0].id}
                          name={listTasks[0].name}
                          status={listTasks[0].status}
                          term={listTasks[0].term}
                          tags={listTasks[0].tags}
                      ></Task>
                      <Task 
                          id={listTasks[1].id}
                          name={listTasks[1].name}
                          status={listTasks[1].status}
                          term={listTasks[1].term}
                          tags={listTasks[1].tags}
                      ></Task>
                      <Task 
                          id={listTasks[2].id}
                          name={listTasks[2].name}
                          status={listTasks[2].status}
                          term={listTasks[2].term}
                          tags={listTasks[2].tags}
                      ></Task>



                    
                  
            </tbody>
          </table>
			</div>
            
        </section>
    )
}

export default Tasks;