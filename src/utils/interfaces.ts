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
