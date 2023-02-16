// db.js
import Dexie, { Table } from 'dexie';
import { LoansTable, LoanValues, RatesTable } from '../utils/interfaces';

export class LoanDexie extends Dexie {
  loans!: Table<LoansTable>;
  rates!: Table<RatesTable>;

  constructor() {
    super('loansDb');
    this.version(1).stores({
      loans: '++id, title, totalAmount, eks, rate, period, startDate',
    });
    this.version(2).stores({
      rates: '++id,loanId,rateDate',
    });
  }
}

export const db = new LoanDexie();

export async function addLoan(values: LoanValues) {
  const { title, totalAmount, eks, period, rate, startDate } = values;
  try {
    // Add the new loan!
    const id = await db.loans.add({
      title,
      totalAmount,
      eks,
      period,
      rate,
      startDate,
    });
    return id;
  } catch (error) {
    alert(error);
  }
}

export async function addRate(loanId: number, rateDate: string) {
  try {
    const exists = await db.rates.where({ loanId, rateDate }).first();
    if (exists) return;
    await db.rates.add({
      loanId,
      rateDate,
    });
  } catch (error) {
    alert(error);
  }
}

export async function getRatesByLoan(loanId: number) {
  try {
    return await db.rates.where('loanId').equals(loanId).toArray();
  } catch (error) {
    alert(error);
  }
}
