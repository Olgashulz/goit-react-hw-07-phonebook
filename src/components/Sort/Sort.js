
// import React from "react";
import React, { useEffect } from 'react';

import styles from './Sort.module.css';
import { useSelector, useDispatch } from "react-redux";
import { sortContact } from "../../redux/actions";

import bg from '../../pictures/icons/clear-filter.png'
import { operations, selectors } from '../../redux';

// let bg = '../../pictures/icons/clear-filter.png'
const Sort = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectors.visibleContacts);
    // const sort = useSelector(state => state.sort)

    const sortItems = (sort) => {
        console.log(sort)
        switch (sort) {
            case 'noSort':
                return items;

            case 'sortToEnd':
                return items.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });

            case 'sortToStart':
                return items.sort(function (a, b) {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                });

            default:
                return;
        }

    }


    return (
        <>
            <button className={styles.noSort}
                value="noSort"
                // onClick={event => dispatch(sortContact(event.target.value))}
                // onClick={event => sortItems(event.target.value)}
                onClick={event => dispatch(sortContact(sortItems(event.target.value)))}

            >

            </button>
            <button className={styles.sortToEnd}
                value="sortToStart"
                // onClick={event => dispatch(sortContact(event.target.value))}
                // onClick={event => sortItems(event.target.value)}
                onClick={event => dispatch(sortContact(sortItems(event.target.value)))}
            >


            </button>
            <button className={styles.sortToStart}
                value="sortToEnd"
                // onClick={event => dispatch(sortContact(event.target.value))}>
                // onClick={event => sortItems(event.target.value)}
                onClick={event => dispatch(sortContact(sortItems(event.target.value)))}

            >
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

