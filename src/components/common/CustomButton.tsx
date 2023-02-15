import React, { ReactElement } from 'react';
import Middle from '../layout/Middle';
import Button from 'react-bootstrap/Button';
type CustomButtonProps = {
  title: string;
  variant: string;
  handleClick: () => void;
};
const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant,
  handleClick,
}: CustomButtonProps): ReactElement => {
  return (
    <Middle>
      <Button variant={variant} onClick={handleClick} className="w-100">
        {title}
      </Button>
    </Middle>
  );
};

export default CustomButton;
