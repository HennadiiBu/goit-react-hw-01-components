import style from './TransactionsHistory.module.css'
import PropTypes from "prop-types";

const TransactionHistory = props => {
    const {items}=props;
  return (
    <table className={style.transaction_history}>
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

TransactionHistory.propTypes={
id:PropTypes.number.isRequired,
type:PropTypes.string,
amount:PropTypes.number,
currency:PropTypes.number
}

export default TransactionHistory;
