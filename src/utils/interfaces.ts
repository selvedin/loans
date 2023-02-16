export interface LoanFormValues {
  loanAmount: number;
  totalAmount: number;
  interest: number;
  otherCosts?: number;
  eks: number;
  period: number;
  anuitet: number;
}

export interface LoanValues {
  title: string;
  totalAmount: number;
  eks: number;
  rate: number;
  period: number;
  startDate: string;
}

export interface LoansTable extends LoanValues {
  id?: number;
}

export interface RatesTable {
  id?: number;
  loanId: number;
  rateDate: string;
}

export interface LoanRate {
  date: string;
  amount: number;
}
