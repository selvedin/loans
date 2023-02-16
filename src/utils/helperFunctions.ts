import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CustomSwal = withReactContent(Swal);

export const confirmDialog = (message: string, callback: () => void) => {
  CustomSwal.fire({
    title: message,
    showCancelButton: true,
    confirmButtonText: 'Save',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      callback();
    }
  });
};

export const formatCurrency = (amount: number): string => {
  return Intl.NumberFormat('bs-BA', {
    style: 'currency',
    currency: 'BAM',
  }).format(amount);
};
