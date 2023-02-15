import { ReactElement, useState } from 'react';
import CustomButton from '../common/CustomButton';
import LoanForm from '../LoanForm';

const Header: React.FC = (): ReactElement => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const showForm = (): void => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <CustomButton handleClick={showForm} title="Loan" />
      {isFormVisible && <LoanForm />}
    </>
  );
};

export default Header;
