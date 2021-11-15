export const getContacts = state => state.items;



export const visibleContacts = ({ sort, filter }) => {
    return sort.filter(contact =>
        contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
};










