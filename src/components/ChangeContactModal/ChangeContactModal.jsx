import { useState } from 'react';
import { Formik } from 'formik';
import 'yup-phone';
// import moment from 'moment';
// redux
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { TbPigMoney } from 'react-icons/tb';
import { AiOutlineMail } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';


import { FaBirthdayCake } from 'react-icons/fa';
import { IoMdPersonAdd } from 'react-icons/io';
import { schema } from '../../services/schemaYup';
import {
  Form,
  FormField,
  FieldFormik,
  ErrorMessage,
  StyledButton,
  LabelWrapper,
  LabelSpan,
} from './ChangeContactModal.styled';

import Modal from 'react-modal';

import { MdOutlineClose } from 'react-icons/md';
import { CloseBtn } from 'components/Modal/Modal.styled';
import { useDispatch } from 'react-redux';
import { changeContact } from 'redux/contacts/contacts-operations';
import defaultImageUrl from '../../img/nofotobl.png';
import { customStylesInsideModal } from 'styles/modalStyles';

Modal.setAppElement('#root');

export const ChangeContactModal = ({
  isOpen,
  data,
  onClose,
  setModalIsOpen,
}) => {
  const [formValues, setFormValues] = useState(data || {});

 
  const initialValues = { fio: '', 
  phone: '' ,
  number: '1234567890' ,
  membershipfee:  '0',
    share:'0',
    payshare: '0',
    email:  '',
    edrpu:  '',
    form:   '',
    adress:  '',
    birthday: '01-01-2000',
    registrationplase:  '',
    passport:  '',
    n: '0',
    avatarUrl:  defaultImageUrl,
};
  
  const savedValues = {
    fio: data?.fio || '',
    phone: data?.phone || '',
    number: data?.number || '',
    membershipfee: data?.membershipfee || '0',
    share: data?.share || '0',
    payshare: data?.payshare || '0',
    email: data?.email || '',
    edrpu: data?.edrpu || '',
    form: data?.form || '',
    adress: data?.adress || '',
    birthday: data?.birthday || '',
    registrationplase: data?.registrationplase || '',
    passport: data?.passport || '',
    n: data?.n |0| '',
    avatarUrl: data?.avatarUrl|| defaultImageUrl,

  };

  const dispatch = useDispatch();

  const closeModal = () => {
    onClose();
    setModalIsOpen(false);
     window.location.reload();
  };

  const onSubmitHandler = (values, { resetForm }) => {
    const fio = data?.fio || '';
    const confirmationMessage = `Данные "${fio}" будут изменены. Продолжать?`;
    if (window.confirm(confirmationMessage)) {
    const newFormValues = { ...formValues, ...values };
    setFormValues(newFormValues);
    dispatch(changeContact(newFormValues));
    resetForm();
    closeModal();
  };
  };
  // function handleDateChange(e) {
  //   const inputDate = e.target.value;
  //   const formattedDate = moment(inputDate, 'DD/MM/YYYY').format('DD/MM/YYYY');
  //   e.target.value = formattedDate;
  // }
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Inline Styles Modal Example"
        style={customStylesInsideModal}
      >
        <CloseBtn onClick={onClose}>
          <MdOutlineClose />
        </CloseBtn>
        <Formik
          initialValues={savedValues || initialValues}
          onSubmit={onSubmitHandler}
          enableReinitialize
          validationSchema={schema}
        >
          {formik => {
            //  console.log('Formik props', formik);
            return (
              <Form autoComplete="off">
                <FormField>
                  <LabelWrapper>
                    <BsPersonFill />
                    <LabelSpan>ФИО</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik type="text" 
                  name="fio" 
                  placeholder="fio"
                  required />
                  <ErrorMessage name="fio" component="span" />
                </FormField>
                
                <FormField>
                  <LabelWrapper>
                    <BsFillTelephoneFill />
                    <LabelSpan>Номер телефона</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik
                    type="tel"
                    name="phone"
                    placeholder="+38-050-123-45-67"
                    required
                  />
                  <ErrorMessage name="phone" component="span" />
                </FormField>
 
                <FormField>
                  <LabelWrapper>
                    <AiOutlineMail />
                    <LabelSpan>e-mail</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik type="email" name="email" 
                  placeholder="email"
                  required />
                  <ErrorMessage name="email" component="span" />
                </FormField>

                <FormField>
                  <LabelWrapper>
                    <BsPersonFill />
                    <LabelSpan>Номер членского билета</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik type="text" name="number" 
                  placeholder="number"
                  required />
                  <ErrorMessage name="number" component="span" />
                </FormField>
                <FormField>
                  <LabelWrapper>
                    <TbPigMoney />
                    <LabelSpan>Членський внесок (грн)</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik type="number" name="membershipfee" 
                  placeholder="membershipfee"
                  required />
                  <ErrorMessage name="membershipfee" component="span" />
                </FormField>
                <FormField>
                  <LabelWrapper>
                    <TbPigMoney />
                    <LabelSpan>ПАЇ (грн)</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik type="number" name="share" 
                  placeholder="share"
                  required />
                  <ErrorMessage name="share" component="span" />
                </FormField>
                <FormField>
                  <LabelWrapper>
                    <TbPigMoney />
                    <LabelSpan>Виплати на паї (грн)</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik type="number" name="payshare" 
                  placeholder="payshare"
                  required />
                  <ErrorMessage name="payshare" component="span" />
                </FormField>
                <FormField>
                  <LabelWrapper>
                    <BsPersonFill />
                    <LabelSpan>код ЄДРПОУ</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik type="number" name="edrpu" 
                  placeholder="edrpu"
                  required />
                  <ErrorMessage name="edrpu" component="span" />
                </FormField>
                <FormField>
                  <LabelWrapper>
                    <BsPersonFill />
                    <LabelSpan>Форма членства Ч/АЧ</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik type="text" name="form" 
                  placeholder="Ч/АЧ"
                  pattern="^(Ч|АЧ)$"
                  required />
                  <ErrorMessage name="form" component="span" />
                </FormField>
                <FormField>
                  <LabelWrapper>
                    <MdLocationPin />
                    <LabelSpan>Адрес</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik type="text" name="adress" 
                  placeholder="adress"
                  required />
                  <ErrorMessage name="adress" component="span" />
                </FormField>
                <FormField>
                  <LabelWrapper>
                    <FaBirthdayCake />
                    <LabelSpan>Дата рождения</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik 
                  type="date" 
                  name="birthday" 
                  value={formik.values.birthday}
                  placeholder="birthday"
                  min="1950-04-01"
                  max="2010-04-20"
                // required
                  />
           
                  <ErrorMessage name="birthday" component="span" />
                </FormField>
                <FormField>
                  <LabelWrapper>
                    <MdLocationPin />
                    <LabelSpan>Регистрация</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik type="text" name="registrationplase" 
                  placeholder="registrationplase" 
                  required
                  />
                  <ErrorMessage name="registrationplase" component="span" />
                </FormField>
                <FormField>
                  <LabelWrapper>
                    <BsPersonFill />
                    <LabelSpan>Паспорт</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik type="text" name="passport" 
                  placeholder="passport" 
                  required/>
                  <ErrorMessage name="passport" component="span" />
                </FormField>
                
                <StyledButton
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  {/* <IoMdPersonAdd size="16" /> */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IoMdPersonAdd size="18" color="#3f47cc" />
                         <span style={{ fontWeight: 'bold', color: '#3f47cc', marginLeft: '4px' }}>EDIT MEMBER</span>
                         </div> 
                </StyledButton>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};
