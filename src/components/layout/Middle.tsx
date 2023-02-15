import React, { ReactElement } from 'react';
import { Col, Row } from 'react-bootstrap';

type MiddleProps = {
  children: JSX.Element;
};

const Middle: React.FC<MiddleProps> = ({
  children,
}: MiddleProps): ReactElement => {
  return (
    <Row className="mt-2">
      <Col xs={12} md={3} xl={4}></Col>
      <Col xs={12} md={6} xl={4} className="text-center">
        {children}
      </Col>
      <Col xs={12} md={3} xl={4}></Col>
    </Row>
  );
};

export default Middle;
