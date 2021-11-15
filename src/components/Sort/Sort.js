
import React from "react";
import styles from './Sort.module.css';
import { useSelector, useDispatch } from "react-redux";
import { sortContact } from "../../redux/actions";

import bg from '../../pictures/icons/clear-filter.png'
import { operations, selectors } from '../../redux';

// let bg = '../../pictures/icons/clear-filter.png'
const Sort = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectors.visibleContacts);
    const sort = useSelector(state => state.sort)

    return (
        <>
            <button className={styles.noSort}
                value="noSort"
                onClick={event => dispatch(sortContact(event.target.value))}
            >

            </button>
            <button className={styles.sortToEnd}
                value="sortToStart"
                onClick={event => dispatch(sortContact(event.target.value))}
            >


            </button>
            <button className={styles.sortToStart}
                value="sortToEnd"
                onClick={event => dispatch(sortContact(event.target.value))}>

            </button>
        </>
    )
};

export default Sort;

// {/* <select name="" id="">
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//             </select> */}
// style={{ backgroundImage: `url(${bg})` }}

