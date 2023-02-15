import React, { ReactElement } from 'react';
import Middle from './layout/Middle';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';

interface LoanFormValues {
  loanAmount: number;
  interest: number;
  eks: number;
  totalAmount: number;
}

const LoanForm: React.FC<{}> = (): ReactElement => {
  const initialValues: LoanFormValues = {
    loanAmount: 0.0,
    totalAmount: 0.0,
    interest: 0.0,
    eks: 0.0,
  };

  const LoanFormSchema = Yup.object().shape({
    loanAmount: Yup.number()
      .min(0, 'Has to be positive')
      .max(5000, 'Too large amount')
      .required('Required'),
    interest: Yup.number()
      .min(0, 'Has to be positive')
      .max(10, 'Too large amount')
      .required('Required'),
    eks: Yup.number()
      .min(0, 'Has to be positive')
      .max(20, 'Too large amount')
      .required('Required'),
    totalAmount: Yup.number()
      .min(0, 'Has to be positive')
      .max(5000, 'Too large amount')
      .required('Required'),
  });

  return (
    <Middle align="start">
      <Formik
        initialValues={initialValues}
        validationSchema={LoanFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formLoanAmount">
              <Form.Label>Loan amount</Form.Label>
              <Form.Control
                name="loanAmount"
                type="number"
                placeholder="0.0"
                value={values.loanAmount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Form.Text className="text-muted">
                {errors.loanAmount && touched.loanAmount && errors.loanAmount}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formInterest">
              <Form.Label>Interest rate (%)</Form.Label>
              <Form.Control
                type="number"
                name="interest"
                placeholder="0.0"
                value={values.interest}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Form.Text className="text-muted">
                {errors.interest && touched.interest && errors.interest}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEks">
              <Form.Label>EKS (%)</Form.Label>
              <Form.Control
                type="number"
                name="eks"
                placeholder="0.0"
                value={values.eks}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Form.Text className="text-muted">
                {errors.eks && touched.eks && errors.eks}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTotalAmount">
              <Form.Label>Total amount</Form.Label>
              <Form.Control
                type="number"
                name="totalAmount"
                placeholder="0.0"
                value={values.totalAmount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Form.Text className="text-muted">
                {errors.totalAmount &&
                  touched.totalAmount &&
                  errors.totalAmount}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </Middle>
  );
};

export default LoanForm;
