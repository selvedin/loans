import React from 'react';
import { useFormikContext, useField } from 'formik';
import { LoanFormValues } from '../../utils/interfaces';
import { ErrorMessage } from '../common/ErrorMessage';
import Form from 'react-bootstrap/Form';

type MyFieldProps = {
  name: string;
};

export const TotalAmountField: React.FC<MyFieldProps> = (
  props: MyFieldProps
) => {
  const {
    values: { loanAmount, interest, otherCosts },
    touched,
    setFieldValue,
  } = useFormikContext<LoanFormValues>();
  const [field, meta] = useField(props);

  const calculateTotalAmount = (
    amount: number,
    interest: number,
    otherCosts?: number
  ): number => {
    let restCost: number = 0;
    const totalAmount: number = amount * (1 + interest / 100);
    const totalInterest: number = totalAmount - amount;
    if (otherCosts) restCost = otherCosts - totalInterest;
    return amount + totalInterest + restCost;
  };

  React.useEffect(() => {
    if (loanAmount && interest && touched.loanAmount && touched.interest) {
      setFieldValue(
        props.name,
        calculateTotalAmount(loanAmount, interest, otherCosts)
      );
    }
  }, [
    loanAmount,
    interest,
    otherCosts,
    touched.loanAmount,
    touched.interest,
    setFieldValue,
    props.name,
  ]);

  return (
    <Form.Group className="mb-3" controlId="formInterest">
      <Form.Label>Total Amount</Form.Label>
      <Form.Control {...props} {...field} />
      <ErrorMessage error={meta.error} touch={meta.touched} />
    </Form.Group>
  );
};
