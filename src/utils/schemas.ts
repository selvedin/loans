import * as Yup from 'yup';

const yupValidation = Yup.number()
  .min(0, 'Has to be positive')
  .required('Required');

export const LoanFormSchema = Yup.object().shape({
  loanAmount: yupValidation,
  interest: yupValidation,
  eks: yupValidation,
  period: yupValidation,
  totalAmount: yupValidation,
});

export const LoanSchema = Yup.object().shape({
  title: Yup.string().min(5, '5 charachters minimum').required('Required'),
  totalAmount: yupValidation,
  eks: yupValidation,
  rate: yupValidation,
  startDate: Yup.string().required('Required'),
});
