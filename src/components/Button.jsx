import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Button({
  className,
  design = 'primary',
  disabled = false,
  onClick,
  testID = 'xButton',
  text,
  type = 'button',
}) {
  return (
    <button
      className={classnames(
        'button classes here',
        { disabled: 'disabled' },
        design,
        className
      )}
      onClick={onClick}
      type={type}
      data-testid={testID}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string, // accept className for placement
  design: PropTypes.oneOf(['primary', 'secondary', 'link']), // built-in styles
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  testID: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']), // only allowable types, button to ignore form submission
};
