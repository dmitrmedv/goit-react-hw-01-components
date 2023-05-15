import PropTypes from 'prop-types';

import { TableBody } from './TableBody';
import { TransactionHistoryTable, TBody } from './TransactionHistory.styles';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <TBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableBody
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </TBody>
    </TransactionHistoryTable>
  );
};
