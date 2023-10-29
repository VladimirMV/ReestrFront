import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// redux
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
  selectFilter,
} from 'redux/selectors';
import { useMediaQuery} from '@mui/material';

import Loader from 'components/Loader/Loader';
import { List, Info } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {StyledButton} from '../ChangeContactModal/ChangeContactModal.styled';
import { IoMdPersonAdd } from 'react-icons/io';
import { ContactModal } from 'components/Modal/Modal';
function ContactList() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
 
  const  fio = '';
  const phone = '' ;
  const number= '' ;
  const membershipfee=  '0';
  const  share='0';
  const  payshare= '0';
  const  email=  '';
  const  edrpu=  '';
  const form= '';
  const adress= '';
  const  birthday= '';
  const  registrationplase= '';
  const passport=  '';
  const  n= '0';
  
  const  avatarUrl= '0';
  

 
  const setModalData = () => {
    const selectContact = { fio, phone,   membershipfee, 
     share,n,form , number, edrpu, passport, birthday, registrationplase, 
     adress, payshare,email, avatarUrl };
     setSelectedContact(selectContact );
   };
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const result = useSelector(selectFilteredContacts);
  const closeModal = () => {
    setSelectedContact(null);
  };
 
  const getFilteredContacts = data => {
    if (filter.toLowerCase() && !data.length) {
      // alert(`No contacts matching your request`);
    }
    return data;
  };
  
  // Function to calculate sums
function calculateSums(data) {
  let totalMembershipfee = 0;
  let totalShare = 0;
  let totalPayshare = 0;

  for (const record of data) {
    totalMembershipfee += record.membershipfee;
    totalShare += record.share;
    totalPayshare += record.payshare;
  }

  return { totalMembershipfee, totalShare, totalPayshare };
}

// Call the function and get the sums
const sums = calculateSums(contacts);
const listTitle = ( <pre>{`ФИО             Телефон          Чл/взнос     Паи`}</pre>
);

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
        <Info>  Всего членских взносов : <span style={{ fontWeight: 'bold', color: 'red' }}>{sums.totalMembershipfee} </span>грн. </Info>
        <Info>  Паев: <span style={{ fontWeight: 'bold', color: 'red' }}> {sums.totalShare} </span>грн.  
        Выплат по паям:<span style={{ fontWeight: 'bold', color: 'red' }}> {sums.totalPayshare}</span> грн. </Info>
        {!isSmallScreen ( 
        <Info><span style={{ fontWeight: 'bold',  margin:'0',padding: '0' }}>{listTitle}</span></Info>)}
          <ul>
            {filteredContacts.map(({ fio, phone, _id, membershipfee, 
            share,n,form , number, edrpu, passport, birthday, registrationplase, 
            adress, payshare, email, avatarUrl}) => {
              return (
                <Fragment key={_id}>
                  <ContactItem fio={fio} 
                  phone={phone} 
                  _id={_id} 
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
          <StyledButton onClick={() => setModalData()} width="500px">
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <IoMdPersonAdd size="18" color="#3f47cc" />
    <span style={{ fontWeight: 'bold', color: '#3f47cc', marginLeft: '4px' }}>ADD MEMBER</span>
  </div>
</StyledButton>
</div>
        </List>
        
      )}
       <ContactModal
        isOpen={selectedContact !== null}
        onClose={closeModal}
        data={selectedContact}
      />
    </>
  );
}

export default ContactList;
