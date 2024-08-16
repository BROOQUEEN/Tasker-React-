import iconCheckSquare from './images/check-square.svg';

const Task = (props) => {
    return (
        <tr className="table-subtasks__column">
            <td className="table-subtasks__column-name table-subtasks__check"><img src={iconCheckSquare} alt="" /></td>
            <td className="table-subtasks__column-name table-subtasks__id" name="task_id">{props.id}</td>
            <td className="table-subtasks__column-name table-subtasks__name"><a href="/task<?php echo $table['id'];?>">{props.name}</a></td>
            <td className="table-subtasks__column-name table-subtasks__status"><p>{props.status}</p></td>
            <td className="table-subtasks__column-name table-subtasks__executor">
                <div className="table-subtasks__column-name__avatar">
                    <img src="/images/brukvin.jpg" alt="" />
                </div>
                </td>
            <td className="table-subtasks__column-name table-subtasks__controlling">
                <div className="table-subtasks__column-name__avatar">
                    <img src="/images/brukvin.jpg" alt="" />
                </div>
                </td>
            <td className="table-subtasks__column-name table-subtasks__term">{props.term}</td>
            <td className="table-subtasks__column-name table-subtasks__projects">-</td>
            <td className="table-subtasks__column-name table-subtasks__projects">{props.tags}</td>
        </tr>
    )
};

export default Task;