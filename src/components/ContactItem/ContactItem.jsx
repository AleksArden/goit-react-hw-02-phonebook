import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <li key={id} className={css.item}>
      <p>
        {name}: {number}
      </p>
      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
