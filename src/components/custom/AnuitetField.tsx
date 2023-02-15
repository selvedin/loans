import React from 'react';
import { useFormikContext, useField } from 'formik';
import { LoanFormValues } from '../../utils/interfaces';
import { ErrorMessage } from '../common/ErrorMessage';
import Form from 'react-bootstrap/Form';

type MyFieldProps = {
  name: string;
};

export const AnuitetField: React.FC<MyFieldProps> = (props: MyFieldProps) => {
  const {
    values: { loanAmount, interest, totalAmount, period },
    touched,
    setFieldValue,
  } = useFormikContext<LoanFormValues>();
  const [field, meta] = useField(props);

  const calculateAnuitet = (amount: number, period: number): number => {
    return +(amount / period).toFixed(2);
  };

  React.useEffect(() => {
    if (totalAmount && period && touched.totalAmount && touched.period) {
      setFieldValue(props.name, calculateAnuitet(totalAmount, period));
    }
  }, [
    totalAmount,
    period,
    loanAmount,
    interest,
    touched.totalAmount,
    touched.period,
    touched.loanAmount,
    touched.interest,
    setFieldValue,
    props.name,
  ]);

  return (
    <Form.Group className="mb-3" controlId="formInterest">
      <Form.Label>Anuitet</Form.Label>
      <Form.Control {...props} {...field} />
      <ErrorMessage error={meta.error} touch={meta.touched} />
    </Form.Group>
  );
};
