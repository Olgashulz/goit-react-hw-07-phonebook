import React, { useEffect } from 'react';
import styles from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { operations, selectors } from '../../redux';

function Contacts() {
    const contacts = useSelector(selectors.visibleContacts);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(operations.fetchContacts())
    }, [dispatch]);

    return (
        <ul className={styles.contactsList}>
            {contacts.map(({ name, number, id }) => (
                <li key={id}
                    className={styles.contactItem}>
                    {name}:
                    <span className={styles.contactTel}>{number}</span>
                    <button onClick={() => dispatch(operations.deleteContact(id))} className={styles.button}>Delete</button>
                </li>
            ))}
        </ul>

    );
}

export default Contacts;

