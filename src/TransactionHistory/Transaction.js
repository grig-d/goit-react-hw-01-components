import styles from './TransactionHistory.module.scss';
import PropTypes from 'prop-types';

const Transaction = ({ type, amount, currency }) => (
  <tr className={styles.row}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
