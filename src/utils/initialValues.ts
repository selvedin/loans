import { LoanFormValues, LoanValues } from './interfaces';

export const loanInitialValues: LoanFormValues = {
  loanAmount: 0.0,
  totalAmount: 0.0,
  otherCosts: 0.0,
  period: 0,
  interest: 0.0,
  eks: 0.0,
  anuitet: 0.0,
};

export const loanValues: LoanValues = {
  title: '',
  totalAmount: 0,
  eks: 0,
  rate: 0,
  period: 0,
  startDate: new Date().toISOString(),
};
