export const formatCurrency = (amount: number): string => {
  return Intl.NumberFormat('bs-BA', {
    style: 'currency',
    currency: 'BAM',
  }).format(amount);
};
