
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
    const sortType = useSelector(state => state.sort)


    // const sortItems = (sortType) => {
    //     switch (sortType) {
    //         case 'noSort':
    //             return items;

    //         case 'sortToEnd':
    //             return items.sort(function (a, b) {
    //                 if (a.name > b.name) {
    //                     return 1;
    //                 }
    //                 if (a.name < b.name) {
    //                     return -1;
    //                 }
    //                 return 0;
    //             });

    //         case 'sortToStart':
    //             return items.sort(function (a, b) {
    //                 if (a.name < b.name) {
    //                     return 1;
    //                 }
    //                 if (a.name > b.name) {
    //                     return -1;
    //                 }
    //                 return 0;
    //             });

    //         default:
    //             return;
    //     }
    // }


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

const arr = [{ "name": "Nelson Kertzmann", "number": "569-607-6626", "id": "1" }, { "name": "Miss Jeffrey Shields", "number": "719-992-5500", "id": "2" }, { "name": "Santiago Quigley PhD", "number": "284-409-0510", "id": "3" }, { "name": "Essie Jast", "number": "378-481-3927", "id": "4" }, { "name": "Miss Margaret Weissnat", "number": "735-583-3100", "id": "5" }, { "name": "Ms. Jessie Ward", "number": "555-330-7981", "id": "6" }, { "name": "Cassandra Reilly", "number": "680-534-7798", "id": "7" }, { "name": "Karen Stanton", "number": "655-653-3384", "id": "8" }, { "name": "Elsa Koelpin", "number": "232-708-5900", "id": "9" }, { "name": "Dominic Crist", "number": "752-477-9954", "id": "10" }, { "name": "Ramon Schaefer", "number": "603-764-8768", "id": "11" }, { "name": "Stuart Flatley", "number": "217-500-5554", "id": "12" }, { "name": "Willie Swaniawski MD", "number": "490-334-7685", "id": "13" }, { "name": "Roger Stehr", "number": "247-484-8944", "id": "14" }, { "name": "Woodrow Lueilwitz", "number": "373-948-8032", "id": "15" }, { "name": "Joey Gaylord", "number": "356-663-3552", "id": "16" }, { "name": "Judith Torp", "number": "335-548-0353", "id": "17" }, { "name": "Carolyn Bosco PhD", "number": "728-607-5288", "id": "18" }, { "name": "Darnell Gutkowski", "number": "339-336-5790", "id": "19" }, { "name": "Muriel Bartoletti IV", "number": "869-923-9444", "id": "20" }, { "name": "Bobby Swaniawski", "number": "919-844-5001", "id": "21" }, { "name": "Sylvester Cruickshank", "number": "571-494-3625", "id": "22" }, { "name": "Winston Funk", "number": "718-643-7241", "id": "23" }]
console.log(arr)

const sortItems = (sortType) => {
    switch (sortType) {
        case 'noSort':
            return arr;

        case 'sortToEnd':
            return arr.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });

        case 'sortToStart':
            return arr.sort(function (a, b) {
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

console.log(sortItems("sortToEnd"))