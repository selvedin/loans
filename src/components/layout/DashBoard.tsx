import { ReactElement, useState } from 'react';
import CustomButton from '../common/CustomButton';
import LoanForm from '../LoanForm';
import LoansList from '../LoansList';

const DashBoard: React.FC = (): ReactElement => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const showForm = (): void => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <CustomButton
        handleClick={showForm}
        title={isFormVisible ? 'Loans' : 'Loan'}
        variant={isFormVisible ? 'warning' : 'success'}
      />
      {isFormVisible ? <LoanForm /> : <LoansList />}
    </>
  );
};

export default DashBoard;
