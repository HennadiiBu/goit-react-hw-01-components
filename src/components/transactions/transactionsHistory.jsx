const TransactionHistory = props => {
    const {items}=props;
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(elem => {
          return (
            <tr key={elem.id}>
              <td>{elem.type}</td>
              <td>{elem.amount}</td>
              <td>{elem.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
