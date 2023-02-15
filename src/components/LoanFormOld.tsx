import React, { ReactElement } from 'react';
import Middle from './layout/Middle';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { TotalAmountField } from './custom/TotalAmountField';
import { ErrorMessage } from './common/ErrorMessage';
import { LoanFormSchema } from '../utils/schemas';
import { loanInitialValues } from '../utils/initialValues';
import { AnuitetField } from './custom/AnuitetField';

const LoanFormOld: React.FC<{}> = (): ReactElement => {
  return (
    <Middle align="start">
      <Formik
        initialValues={loanInitialValues}
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
              <ErrorMessage
                error={errors.loanAmount}
                touch={touched.loanAmount}
              />
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
              <ErrorMessage error={errors.interest} touch={touched.interest} />
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
              <ErrorMessage error={errors.eks} touch={touched.eks} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPeriod">
              <Form.Label>Period (months)</Form.Label>
              <Form.Control
                type="number"
                name="period"
                placeholder="0.0"
                value={values.period}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage error={errors.period} touch={touched.period} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPeriod">
              <Form.Label>Other costs</Form.Label>
              <Form.Control
                type="number"
                name="otherCosts"
                placeholder="0.0"
                value={values.otherCosts}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                error={errors.otherCosts}
                touch={touched.otherCosts}
              />
            </Form.Group>

            <TotalAmountField name="totalAmount" />
            <AnuitetField name="anuitet" />

            <Button
              variant="primary"
              className="w-100 mt-4"
              type="submit"
              disabled={isSubmitting}
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </Middle>
  );
};

export default LoanFormOld;
