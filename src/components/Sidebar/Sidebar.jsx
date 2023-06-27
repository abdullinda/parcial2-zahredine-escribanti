import css from './Sidebar.module.css';
import { AiFillCalendar } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className={css.container}>

            <div className={css.menu}>
                <NavLink
                    to="calendar"
                    className={css.item}
                    title="Calendar"
                >
                    <AiFillCalendar size={30} />
                </NavLink>

                <NavLink
                    to="board"
                    className={css.item}
                    title="Trello Board"
                >
                    <FaTasks size={30} />
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar