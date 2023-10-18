import Modal from 'react-modal';

import { MdOutlineClose } from 'react-icons/md';
import Av from 'assets/avatar.png';
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
  // console.log("datas edit=======",data);
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
      
        <p>{'Членський внесок: ' + data?.membershipfee + ' грн'}</p>
        <p>{'ПАЇ: ' + data?.share + ' грн'}</p>
        <p>{'Виплати на паї : ' + data?.payshare + ' грн'}</p>
        <Tooltip label="Call" hasArrow bg="gray.300" color="#000" fontSize="xs">
          <p>
            <a href={'tel:' + data?.phohe}>{data?.phone}</a>
          </p>
        </Tooltip>
        <p>{'e-mail: ' + data?.email}</p>
        <p>{'код ЄДРПОУ: ' + data?.edrpu}</p>
        {/* <p>{'Форма: ' + data?.form}</p> */}
        <p>{'Адрес: ' + data?.adress}</p>
        <p>{'Дата рождения: ' + data?.birthday}</p>
        <p>{'Регистрация: ' + data?.registrationplase}</p>
        <p>{'Паспорт: ' + data?.passport}</p>
      </PictureDescr>
      <Button onClick={openChangeModal}>
        <TfiPencil size="16" />
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
