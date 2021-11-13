export const getContacts = state => state.items;



export const visibleContacts = ({ items, filter }) => {
    return items.filter(contact =>
        contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())

    );

};








