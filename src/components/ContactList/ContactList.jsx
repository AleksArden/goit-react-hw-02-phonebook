import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ children }) => {
  return (
    <div>
      <ul className={css.list}>{children}</ul>
    </div>
  );
};
ContactList.propTypes = {
  children: PropTypes.node.isRequired,
};
