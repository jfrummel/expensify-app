import { getExpensesTotal } from '../../selectors/expenses-amount-total';
import expenses from '../fixtures/expenses';



test("returns total with multiple expenses", () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(2200);
});

test("returns 0 with no expenses", () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test("returns total of  one expense", () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(200);
});

