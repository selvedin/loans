import React, { ReactElement } from 'react';
import Middle from '../layout/Middle';
import Button from 'react-bootstrap/Button';
type CustomButtonProps = {
  title: string;
  handleClick: () => void;
};
const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handleClick,
}: CustomButtonProps): ReactElement => {
  return (
    <Middle>
      <Button variant="success" onClick={handleClick} className="w-100">
        {title}
      </Button>
    </Middle>
  );
};

export default CustomButton;
