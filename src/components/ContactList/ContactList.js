import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
  selectFilter,
} from 'redux/selectors';

import Loader from 'components/Loader/Loader';
import { List, Info } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {StyledButton} from '../ChangeContactModal/ChangeContactModal.styled';
import { IoMdPersonAdd } from 'react-icons/io';
function ContactList() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const result = useSelector(selectFilteredContacts);

  const getFilteredContacts = data => {
    if (filter.toLowerCase() && !data.length) {
      // alert(`No contacts matching your request`);
    }
    return data;
  };

  const filteredContacts = getFilteredContacts(result);
  return (
    <>
      {isLoading && contacts?.length === 0 && <Loader />}
      {error && !isLoading && <div>Ooops, error...</div>}
      {!filteredContacts?.length && !error && !isLoading && (
        <Info>Contacts not found</Info>
      )}
      {!error && !isLoading && filteredContacts?.length > 0 && (
        <List>
          <ul>
            {filteredContacts.map(({ fio, phone, id, membershipfee, 
            share,n,form , number, edrpu, passport, birthday, registrationplase, 
            adress, payshare, email, avatarUrl}) => {
              return (
                <Fragment key={id}>
                  <ContactItem fio={fio} 
                  phone={phone} 
                  id={id} 
                  membershipfee ={membershipfee} 
                  share ={share}                 
                  n ={n}
                  form = {form}
                  number = {number}
                  edrpu = {edrpu}
                  passport = {passport}
                  birthday  = {birthday}
                  registrationplase = {registrationplase}
                  adress  = {adress}
                  payshare  = {payshare} 
                  email= {email} 
                  avatarUrl = {avatarUrl}             
                  />
                </Fragment>
              );
            })}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <StyledButton type="submit" width="500px">
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <IoMdPersonAdd size="18" color="#3f47cc" />
    <span style={{ fontWeight: 'bold', color: '#3f47cc', marginLeft: '4px' }}>ADD MEMBER</span>
  </div>
</StyledButton>
</div>
        </List>
      )}
    </>
  );
}

export default ContactList;
