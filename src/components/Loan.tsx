import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../store/db";
import { LoanRates } from "./LoanRates";
import { LoansTable } from "../utils/interfaces";
import Middle from "./layout/Middle";
import { useCurrency } from "../utils/hooks";
import { confirmDialog } from "../utils/helperFunctions";

export const Loan = () => {
  const [currentRate] = useState<number>(0);
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const loan = useLiveQuery(async () => {
    const loan = id ? await db.loans.get(+id) : null;
    return loan as LoansTable;
  }, []);

  const deleteLoan = (): void => {
    if (loan)
      db.rates
        .where({ loanId: loan.id })
        .delete()
        .then(() => {
          if (loan.id)
            db.loans.delete(loan.id).then(() => {
              navigate("/");
            });
        });
  };

  return (
    <>
      <Middle>
        <Link to="/">
          <Button variant="warning" className="w-100">
            Loans
          </Button>
        </Link>
      </Middle>
      <Middle align="start">
        <Row>
          <Col>
            <span className="fw-bold text-warning">{loan?.title}</span>
            <span>
              <Button
                variant="danger"
                className="rounded-pill btn-sm p-0 px-2 ms-4"
                onClick={() => confirmDialog("Are you sure", deleteLoan)}
              >
                <small>DELETE</small>
              </Button>
            </span>
            <br />
            <small> {useCurrency(loan?.totalAmount!)}</small>
          </Col>
          <Col className="text-end">
            <small>
              <strong>Period:</strong> {loan?.period}
            </small>
            <br />
            <small>
              <strong>Current rate:</strong> {currentRate}
            </small>
          </Col>
        </Row>
      </Middle>
      {loan && <LoanRates loan={loan as LoansTable} />}
    </>
  );
};
