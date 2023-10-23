import { authInstance } from './authApi';

export const getAllContacts = () => authInstance.get('/contacts');

export const addContact = contact =>
  authInstance.post('/contacts', { ...contact });

export const deleteContact = id => authInstance.delete(`/contacts/${id}`);

// export const editContact = contact => {
//   const editData = {
//     fio: contact.fio, 
//     phone: contact.phone,
//     number: contact. number,
//     membershipfee:  contact.membershipfee,
//     share:contact.share,
//     payshare: contact.payshare,
//     email:  contact.email,
//     edrpu:  contact.edrpu,
//     form:   contact.form,
//     adress:  contact.adress,
//     birthday: contact. birthday,
//     registrationplase:  contact.registrationplase,
//     passport:  contact.passport,
//     n: contact.n,
//     avatarUrl: contact.avatarUrl,
//   };
//   return authInstance.put(`/contacts/${contact._id}`,editData );
// };

export const editContact = contact => {
  const editData = {
    fio: contact.fio, 
    phone: contact.phone,
    number: contact.number,
    membershipfee: contact.membershipfee,
    share: contact.share,
    payshare: contact.payshare,
    email: contact.email,
    edrpu: contact.edrpu,
    form: contact.form,
    adress: contact.adress,
    birthday: contact.birthday,
    registrationplase: contact.registrationplase,
    passport: contact.passport,
    n: contact.n,
    avatarUrl: contact.avatarUrl,
  };
  if (contact._id) {
    // Если _id определен, выполняем обновление существующей записи
    
    return authInstance.put(`/contacts/${contact._id}`, editData);
  } else {
    // Если _id не определен, создаем новую запись
     
    return authInstance.post('/contacts', editData);
  }
};

