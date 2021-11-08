import { useState } from "react";
import styles from './Form.module.css';
import { addContact } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { visibleContacts } from '../../redux/selectors'

import shortid from 'shortid';




export default function Form(props) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [disabled, setDisabled] = useState(false);

    const contacts = useSelector(visibleContacts)
    const dispatch = useDispatch();

    const handleInputChange = event => {
        // console.log(event.currentTarget.value);
        const { name, value } = event.currentTarget;
        setDisabled(false);

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const addNewContact = {
            id: shortid.generate(),
            name: name,
            number: number
        }

        dispatch(addContact(addNewContact));
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setNumber('');
    }

    const findNameInContact = (event) => {
        if (contacts.find((contact) =>
            contact.name.toLowerCase() === event.currentTarget.value.toLowerCase()
        )) {
            setDisabled(true)
            alert(`${event.currentTarget.value} is already in contacts.`)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form} >
            <label className={styles.labelForm}>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    onBlur={findNameInContact}
                    className={styles.inputForm}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            <label className={styles.labelForm}>
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleInputChange}
                    disabled={disabled}
                    className={styles.inputForm}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />

            </label>
            <button
                type="submit"
                disabled={disabled}
                className={styles.formBtn}
            >Add contact</button>
        </form>
    )
}


