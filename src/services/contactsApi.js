import { authInstance } from './authApi';

export const getAllContacts = () => authInstance.get('/contacts');

export const addContact = contact =>
  authInstance.post('/contacts', { ...contact });

export const deleteContact = id => authInstance.delete(`/contacts/${id}`);

export const editContact = contact => {
  return authInstance.put(`/contacts/${contact._id}`, {
    fio: contact.fio, 
    phone: contact.phone,
    number: contact. number,
    membershipfee:  contact.membershipfee,
    share:contact.share,
    payshare: contact.payshare,
    email:  contact.email,
    edrpu:  contact.edrpu,
    form:   contact.form,
    adress:  contact.adress,
    birthday: contact. birthday,
    registrationplase:  contact.registrationplase,
    passport:  contact.passport,
    n: contact.n,
    avatarUrl: contact.avatarUrl,
  });
};
// Этот код экспортирует функции, которые выполняют операции CRUD(создание, чтение, обновление, удаление)
// на API - сервере, используя authInstance(экземпляр axios с предварительно настроенным токеном).

// Функция getAllContacts() отправляет GET-запрос на эндпоинт '/contacts' и получает список контактов.

// Функция addContact(contact) отправляет POST - запрос на эндпоинт '/contacts' с объектом контакта в теле
// запроса и создает новый контакт.

// Функция deleteContact(id) отправляет DELETE-запрос на эндпоинт '/contacts/:id' и удаляет контакт с указанным id.

// Функция editContact(contact) отправляет PATCH - запрос на эндпоинт '/contacts/:id' с обновленными данными
// контакта в теле запроса и обновляет информацию о контакте с указанным id.
