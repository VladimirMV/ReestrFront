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
} from './Modal.styled';
import { customStyles } from 'styles/modalStyles';
import { useState } from 'react';

import { Tooltip } from '@chakra-ui/react';

import { TfiPencil } from 'react-icons/tfi';
import { ChangeContactModal } from 'components/ChangeContactModal/ChangeContactModal';

Modal.setAppElement('#root');

export const ContactModal = ({ isOpen, data, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const fontSize = { fontSize: '20px',color : '#3f47cc'};
  const openChangeModal = () => {
    setModalIsOpen(true);
  };

  const closeChangeModal = () => {
    setModalIsOpen(false);
    onClose();
  };
  function formatDate(dateString) {
    if (dateString) {
      const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU', options);
    }
    return ''; // Возвращать пустую строку, если дата отсутствует или неверна
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
             
              <ModalPicture src={data?.avatarUrl} alt="photo" />
              
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
      <Button onClick={openChangeModal}
      style={{ position: 'absolute', bottom: '20px', right: '20px' }} >
        <TfiPencil size="18" />
      </Button>
      <ChangeContactModal
        isOpen={modalIsOpen}
        onClose={closeChangeModal}
        data={data}
        setModalIsOpen={setModalIsOpen}
      />
    </Modal>
  );
};
