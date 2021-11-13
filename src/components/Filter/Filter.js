import React from "react";
import styles from './Filter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { filterContact, resetFilter } from "../../redux/actions";
import Sort from '../Sort/Sort';


const Filter = () => {
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();

    return (
        <label className={styles.findLabel}>
            Find contact by name
            <div className={styles.box}>
                <input
                    type="text"
                    name="name"
                    value={filter}
                    onChange={event => dispatch(filterContact(event.target.value))}
                    className={styles.inputForm}
                    onBlur={() => dispatch(resetFilter())}
                />

            </div>
            <Sort />
        </label>
    )
}

export default Filter;

//////////////////////////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import styles from './Filter.module.css';
// import { useSelector, useDispatch } from "react-redux";
// import { filterContact, resetFilter } from "../../redux/actions";

// const Filter = () => {
//     const value = useSelector(state => state.filter)
//     // const contacts = useSelector(state => state.contacts)
//     const dispatch = useDispatch();

//     const resetFiler = () => {
//         console.log(value)
//     }

//     return (
//         <label className={styles.findLabel}>
//             Find contact by name
//             <input
//                 type="text"
//                 name="name"
//                 value={value}
//                 onChange={event => dispatch(filterContact(event.target.value))}
//                 className={styles.inputForm}
//                 onBlur={resetFiler()}
//             />
//         </label>
//     )
// }

// export default Filter;



