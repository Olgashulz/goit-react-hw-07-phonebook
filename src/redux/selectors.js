// import { sortContact } from "./actions";

export const getContacts = state => state.items;



export const visibleContacts = ({ items, filter, sort }) => {
    const sortedContact = sortItems(sort, items)
    console.log(sortedContact)
    return sortedContact.filter(contact =>
        contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())

    );

};

export const sortItems = (sort, items) => {
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








