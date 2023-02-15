import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
import { Badge, Button, Col, ListGroup, Row } from 'react-bootstrap';
import { formatCurrency } from '../utils/helperFunctions';
import { LoansTable } from '../utils/interfaces';
import Middle from './layout/Middle';

interface LoanRate {
  date: string;
  amount: number;
  handleClick: () => void;
}

type LoadRatesProps = {
  loan: LoansTable;
};

export const LoanRates: React.FC<LoadRatesProps> = ({ loan }) => {
  const [rates, setRates] = useState<LoanRate[]>([]);

  const calculateRates = useCallback(() => {
    const temp: LoanRate[] = [];
    let newDate = moment(loan.startDate);
    for (let i = 1; i <= loan.period; i++) {
      temp.push({
        date: newDate.format('yyyy-MM-DD'),
        amount: loan.rate,
        handleClick: () => alert(loan.title),
      });
      newDate.add(1, 'months');
    }
    setRates(temp);
  }, [loan]);

  useEffect(() => {
    calculateRates();
  }, [calculateRates]);

  const handlePayment = (date: string) => {
    console.log('Rate paid for date: ', date, ' for laon: ', loan.id);
  };

  return (
    <Middle align="start">
      <ListGroup>
        {rates.map((rate, index) => (
          <ListGroup.Item key={'rate' + index} className="border-bottom">
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
                  variant="success"
                  className="btn-sm m-0"
                  onClick={() => handlePayment(rate.date)}
                >
                  Pay
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Middle>
  );
};
