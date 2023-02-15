import React from 'react';
import Form from 'react-bootstrap/Form';

type ErrorMessageProps = {
  error: string | undefined;
  touch: boolean | undefined;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, touch }) => {
  return (
    <Form.Text className="text-danger">{error && touch && error}</Form.Text>
  );
};
