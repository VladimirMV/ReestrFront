import * as yup from 'yup';
import 'yup-phone';

export const schema = yup.object().shape({

  name: yup.string().required(),
   
  phone: yup
    .string()
    .trim()
   
    .phone(
      'UA',
      true,
      'Номер телефона должен быть действительным номером для региона UA и может содержать цифры, пробелы, тире, скобки и может начинаться с +'
    )
    .required(),
});

