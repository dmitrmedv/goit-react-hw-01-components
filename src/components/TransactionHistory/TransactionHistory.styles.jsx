import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border-collapse: collapse;
  background-color: #fff;
  margin: 0 auto;
  width: 700px;
  box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.4);
  thead {
    background-color: #55bad2;
    color: #fff;
    text-transform: uppercase;
  }

  th,
  td {
    padding: 10px 0 10px 0;
    border: 1px solid #d6d7d7;
    text-align: center;
  }

  td {
    color: #222323;
  }
`;

export const TBody = styled.tbody`
  tr {
    :nth-child(2n) {
      background-color: #edf1f3;
    }
  }
`;
