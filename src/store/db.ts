// db.js
import Dexie, { Table } from 'dexie';
import { LoanValues } from '../utils/interfaces';

interface LoansTable extends LoanValues {
  id?: number;
}

export class LoanDexie extends Dexie {
  loans!: Table<LoansTable>;

  constructor() {
    super('loansDb');
    this.version(1).stores({
      loans: '++id, title, totalAmount, eks, rate, period, startDate',
    });
  }
}

export const db = new LoanDexie();

export async function addLoan(values: LoanValues) {
  const { title, totalAmount, eks, period, rate, startDate } = values;
  try {
    // Add the new loan!
    await db.loans.add({
      title,
      totalAmount,
      eks,
      period,
      rate,
      startDate,
    });
  } catch (error) {
    alert(error);
  }
}
