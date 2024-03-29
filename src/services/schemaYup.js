import * as yup from 'yup';
import 'yup-phone';

export const schema = yup.object().shape({
  avatar: yup.string(),
  fio: yup.string().required(),
  phone: yup
    .string()
    .trim()
    // .matches(
    //   /^((\+)?(3)?(8)?[- ]?)?(\(?\d{3}\)?[- ]?)?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
    //   'Phone number must be a valid phone number for region UA, digits and can contain spaces, dashes, parentheses and can start with +'
    // )
    .phone(
      'UA',
      true,
      'Номер телефона должен быть действительным номером для региона UA и может содержать цифры, пробелы, тире, скобки и может начинаться с +'
    )
    .required(),
});
 
