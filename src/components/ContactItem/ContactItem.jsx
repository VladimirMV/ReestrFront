import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import { Tooltip } from '@chakra-ui/react';
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  useMediaQuery,
} from '@mui/material';
import {
  ContactDescr,
  ModalPictureWrapper,
  WrapperBtns,
} from './ContactItem.styled';

// functions
import { getRandomHexColor } from 'utils/getRandomHexColor';
import { abbrevName } from 'utils/abbrevName';

import { ContactModal } from 'components/Modal/Modal';

// redux
// import { deleteContact } from 'redux/contacts/contacts-operations';
 

// style
// import { IoPersonRemove } from 'react-icons/io5';

export const ContactItem = ({  fio, phone, _id, membershipfee, 
            share,n,form , number, edrpu, passport, birthday, registrationplase, 
            adress, payshare,email, avatarUrl

}) => {
 
  const [selectedContact, setSelectedContact] = useState(null);
;
  // const dispatch = useDispatch();

  // const onDeleteContact = contactId => {
  //   dispatch(deleteContact(contactId));
  // };

  const closeModal = () => {
    setSelectedContact(null);
  };
 
  
  const setModalData = () => {
   const selectContact = { fio, phone, _id, membershipfee, 
    share,n,form , number, edrpu, passport, birthday, registrationplase, 
    adress, payshare,email, avatarUrl };
    setSelectedContact(selectContact );
  };
  console.log("avatarUrl", avatarUrl);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  function stringAvatar( fio) {
     
    return {
      sx: {
        bgcolor: getRandomHexColor(),
      },
      children: abbrevName( fio),
    };
  }
 
 
 
  return (
    <Container maxWidth="md"  >
     
      <List sx={{  width: "100%", marginLeft: 0, paddingLeft: 2 }}>
        { <ListItem key={_id}> 
         <Tooltip label="Click" color="#000" fontSize="xs">      
              <ListItemAvatar>
            <ModalPictureWrapper> 
                              <Avatar
                               src={avatarUrl}
              sx={{fontSize:"12px"}}
              onClick={() => setModalData()}
                  {...stringAvatar(Object.values( fio).join(''))}
                  
            />
            
              </ModalPictureWrapper>                        
                      </ListItemAvatar>
          </Tooltip> 
          <ContactDescr>
           {isSmallScreen ? (
              <>
                <ListItemText sx={{ pr: 4, fontSize: '2sx', width: '200px' }} primary={fio} />
                {/* <ListItemText sx={{ pr: 2, fontSize: '2sx', width: '150px' }} primary={phone} /> */}
              </>
            ) : (
              <>
                <ListItemText sx={{ pr: 2, fontSize: '2sx', width: '150px' }} primary={fio} />
                <ListItemText sx={{ pr: 2, fontSize: '2sx' }} primary={share} />
                <ListItemText sx={{ pr: 2, fontSize: '2sx' }} primary={membershipfee} />
                <ListItemText sx={{ pr: 2, fontSize: '2sx' }} primary={payshare} />
                <ListItemText sx={{ pr: 2, fontSize: '2sx' }} primary={phone} />
                {/* <ListItemText sx={{ pr: 2, fontSize: '2sx' }} primary={email} /> */}
              </>
            )}
            <WrapperBtns>
            <ListItemSecondaryAction>
           
         
              </ListItemSecondaryAction>
              </WrapperBtns>
            </ContactDescr>
          </ListItem>
        }
          </List>
          <ContactModal
        isOpen={selectedContact !== null}
        onClose={closeModal}
        data={selectedContact}
      />
    </Container>
  );
};

 

ContactItem.propTypes = {
   fio: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

