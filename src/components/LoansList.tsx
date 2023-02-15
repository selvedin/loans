import React from 'react';
import { db } from '../store/db';
import { useLiveQuery } from 'dexie-react-hooks';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Middle from './layout/Middle';

const LoansList = () => {
  const loans = useLiveQuery(() => db.loans.toArray());

  return (
    <Middle>
      <>
        {loans?.map((loan) => (
          <Row key={loan.id} className="p-1">
            <Col className="mx-4">
              <Link to={'/loan/' + loan.id}>
                <Button variant="info" className="w-100 btn-sm">
                  {loan.title}
                </Button>
              </Link>
            </Col>
          </Row>
        ))}
      </>
    </Middle>
  );
};

export default LoansList;
