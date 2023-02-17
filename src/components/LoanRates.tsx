import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { addRate, getRatesByLoan } from "../store/db";
import { formatCurrency } from "../utils/helperFunctions";
import { LoanRate, LoansTable, RatesTable } from "../utils/interfaces";
import Middle from "./layout/Middle";

type LoadRatesProps = {
  loan: LoansTable;
};

const MySwal = withReactContent(Swal);

export const LoanRates: React.FC<LoadRatesProps> = ({ loan }) => {
  const [paidRates, setPaidRates] = useState<RatesTable[]>();
  const [rates, setRates] = useState<LoanRate[]>([]);

  const calculateRates = useCallback(() => {
    const temp: LoanRate[] = [];
    let newDate = moment(loan.startDate);

    for (let i = 1; i <= loan.period; i++) {
      const formatedDate = newDate.format("yyyy-MM-DD");

      temp.push({
        date: formatedDate,
        amount: loan.rate,
      });
      newDate.add(1, "months");
    }
    setRates(temp);
  }, [loan]);

  const handlePayment = (date: string): void => {
    MySwal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (loan.id) {
          addRate(loan.id, date).then(() => {
            refreshRateData();
            Swal.fire("Saved!", "", "success");
          });
        }
      }
    });
  };

  const refreshRateData = (): void => {
    if (loan.id)
      getRatesByLoan(loan.id).then(result => {
        setPaidRates(old => result);
      });
  };

  useEffect(() => {
    refreshRateData();
    calculateRates();
  });

  return (
    <Middle align="start">
      <ListGroup>
        {rates.map((rate, index) => {
          const d = moment(rate.date).format("DD");
          const isPaid = paidRates
            ? paidRates?.some(r => {
                if (r.rateDate === rate.date) return true;
                return false;
              })
            : false;
          return (
            <ListGroup.Item
              key={"rate" + index}
              className={
                rate.date === moment().format("yyyy-MM-" + d)
                  ? "bg-warning border-bottom"
                  : "border-bottom"
              }
            >
              <Row>
                <Col sm={2}>{index + 1}.</Col>
                <Col sm={4}>
                  <strong>{rate.date}</strong>
                </Col>
                <Col sm={4}>
                  <small>[{formatCurrency(rate.amount)}]</small>
                </Col>
                <Col sm={2} className="text-end me-0">
                  <Button
                    variant={isPaid ? "danger" : "success"}
                    className="btn-sm m-0"
                    onClick={() => handlePayment(rate.date)}
                    disabled={isPaid}
                  >
                    {isPaid ? "Paid" : "Pay"}
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Middle>
  );
};
