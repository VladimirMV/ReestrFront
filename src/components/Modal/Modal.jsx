import Modal from 'react-modal';

import { MdOutlineClose } from 'react-icons/md';
import {
  BorderInside,
  BorderOutside,
  Button,
  CloseBtn,
  ModalPicture,
  PhotoThumb,
  PhotoWrap,
  PictureDescr,
  ButtoneDescr,
} from './Modal.styled';
import { customStyles } from 'styles/modalStyles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Tooltip } from '@chakra-ui/react';
// import DeleteIcon from '@mui/icons-material/Delete';
import { IoPersonRemove } from 'react-icons/io5';
import { TfiPencil } from 'react-icons/tfi';
import { ChangeContactModal } from 'components/ChangeContactModal/ChangeContactModal';
import defaultImageUrl from '../../img/nofotobl.png';
import { deleteContact } from 'redux/contacts/contacts-operations';
Modal.setAppElement('#root');

export const ContactModal = ({ isOpen, data, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user } = useAuth();
  const fontSize = { fontSize: '20px',color : '#3f47cc'};
  const openChangeModal = () => {
    setModalIsOpen(true);
  };
  
  const closeChangeModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    const fio = data?.fio || '';
  const confirmationMessage = `Вы уверены, что хотите удалить "${fio}"?`;
    if (window.confirm(confirmationMessage)) {
     
    dispatch(deleteContact(contactId));
    window.location.reload();}
  };

  function formatDate(dateString) {
    if (dateString) {
      const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU', options);
    }
    return '';  
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Inline Styles Modal Example"
      style={customStyles}
     
    >
      <CloseBtn onClick={onClose}>
        <MdOutlineClose />
      </CloseBtn>
      <PhotoWrap >
        <BorderOutside >
          <BorderInside >
            <PhotoThumb   >
             
              <ModalPicture src={data?.avatarUrl|| defaultImageUrl} alt="----photo " />
              
            </PhotoThumb>
          </BorderInside>
        </BorderOutside>
      </PhotoWrap>
      <PictureDescr>
      <p>{'N: ' + data?.number}</p>
     
        <p style={fontSize}>{data?.fio}</p>
      
        <p> {'Членський внесок: '}
       <span style={{ fontWeight: 'bold', color: 'red' }}>{data?.membershipfee + ' грн'}</span></p>
       <p> {'ПАЇ: '}
       <span style={{ fontWeight: 'bold', color: 'red' }}>{data?.share + ' грн'}</span></p>
       <p> {'Виплати на паї : '}
       <span style={{ fontWeight: 'bold', color: 'red' }}>{data?.payshare + ' грн'}</span></p>
     
        <Tooltip label="Call" hasArrow bg="gray.300" color="#000" fontSize="xs">
          <p>
            <a href={'tel:' + data?.phohe}>{data?.phone}</a>
          </p>
        </Tooltip>
        <p>{'e-mail: ' + data?.email}</p>
        <p>{'код ЄДРПОУ: ' + data?.edrpu}</p>
        {/* <p>{'Форма: ' + data?.form}</p> */}
        <p>{'Адрес: ' + data?.adress}</p>
        <p>{'Дата рождения: ' + formatDate(data?.birthday)}</p>
        <p>{'Регистрация: ' + data?.registrationplase}</p>
        <p>{'Паспорт: ' + data?.passport}</p>
      </PictureDescr>

      {user.status === 'admin' && (
      <ButtoneDescr>
      <Tooltip label="Delete" color="#000" fontSize="xs">  
              <Button 
                aria-label="delete"
                onClick={() => onDeleteContact(data?._id)}
                // style={{ position: 'absolute', bottom: '50px', left: '40px' }}
              >
              <IoPersonRemove size="18" />
              
              </Button>
               </Tooltip> 
      <Button onClick={openChangeModal}
      // style={{ position: 'absolute', bottom: '50px', right: '40px' }} 
      >
        <TfiPencil size="18" />
      </Button>

      
      </ButtoneDescr>
      )}
      <ChangeContactModal
        isOpen={modalIsOpen}
        onClose={closeChangeModal}
        data={data}
        setModalIsOpen={setModalIsOpen}
      />
           

    </Modal>
  );
};
