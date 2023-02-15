import React, { ReactElement } from 'react';
import { Col, Row } from 'react-bootstrap';

type MiddleProps = {
  align?: string;
  children: JSX.Element;
};

const Middle: React.FC<MiddleProps> = ({
  align,
  children,
}: MiddleProps): ReactElement => {
  if (!align) align = 'center';
  return (
    <Row className="mt-2">
      <Col xs={12} md={3} xl={4}></Col>
      <Col xs={12} md={6} xl={4} className={'text-' + align}>
        {children}
      </Col>
      <Col xs={12} md={3} xl={4}></Col>
    </Row>
  );
};

export default Middle;
