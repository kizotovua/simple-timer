import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const Button = ({ clickHandler, text, modifier, disabled }) => {
  return (
    <button
      className={modifier? `button button--${modifier}` : 'button'}
      onClick={clickHandler}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  clickHandler: PropTypes.func,
  text: PropTypes.string,
  modifier: PropTypes.string,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  text: '',
  modifier: '',
  disabled: false
}