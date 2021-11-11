import axios from 'axios';


axios.defaults.baseURL = 'https://618bb148ded7fb0017bb915f.mockapi.io';

export const fetchContacts = () => {
    return axios.get('/contacts').then(response => response.data);
};

export const addContact = value => {
    return axios.post('/contacts', value).then(({ data }) => data);
};

export const deleteContact = contactId => {
    return axios.delete(`/contacts/${contactId}`);
};

export const updateContact = (contactId, update) => {
    return axios.patch(`/todos/${contactId}`, update).then(({ data }) => data);
};


