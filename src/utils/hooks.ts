import { useState, useEffect } from 'react';

export const useCurrency = (amount: number) => {
  const [currency, setCurrency] = useState<string | null>(null);

  useEffect(() => {
    const formatedCurrency = Intl.NumberFormat('bs-BA', {
      style: 'currency',
      currency: 'BAM',
    }).format(amount);
    setCurrency(formatedCurrency);
  }, [amount]);

  return currency;
};
