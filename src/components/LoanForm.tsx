import React, { ReactElement } from "react";
import Middle from "./layout/Middle";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ErrorMessage } from "./common/ErrorMessage";
import { LoanSchema } from "../utils/schemas";
import { loanValues } from "../utils/initialValues";
import { addLoan } from "../store/db";
import { useNavigate } from "react-router-dom";

const LoanForm: React.FC = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <Middle align="start">
      <Formik
        initialValues={loanValues}
        validationSchema={LoanSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addLoan(values).then(result => {
            resetForm();
            setSubmitting(false);
            navigate("/loan/" + result);
          });
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
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage error={errors.title} touch={touched.title} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTotalAmount">
              <Form.Label>Total Amount</Form.Label>
              <Form.Control
                type="number"
                name="totalAmount"
                placeholder="0.0"
                value={values.totalAmount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                error={errors.totalAmount}
                touch={touched.totalAmount}
              />
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

            <Form.Group className="mb-3" controlId="formRate">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                name="rate"
                placeholder="0.0"
                value={values.rate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage error={errors.rate} touch={touched.rate} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPeriod">
              <Form.Label>Period</Form.Label>
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

            <Form.Group className="mb-3" controlId="formStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={values.startDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                error={errors.startDate}
                touch={touched.startDate}
              />
            </Form.Group>

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

export default LoanForm;
