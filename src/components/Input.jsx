import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import classnames from 'classnames';

const Input = forwardRef(function (
  {
    className,
    disabled = false,
    defaultValue,
    error = false,
    errorMessage,
    label,
    name,
    onBlur = () => {},
    onChange = () => {},
    onFocus = () => {},
    onInput = () => {},
    pattern,
    placeholder,
    required = false,
    testID = 'xInput',
    type = 'text',
  },
  ref
) {
  return (
    <fieldset
      className={classnames('component classes here', className)}
      data-testid={testID}
    >
      <label
        htmlFor={name}
        className={classnames('label classes here', error)}
        data-testid={`${testID}-label`}
      >
        {label}
      </label>
      <input
        ref={ref}
        data-testid={`${testID}-input`}
        className={classnames('input classes here', error)}
        defaultValue={defaultValue}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onInput={onInput}
        placeholder={label || placeholder}
        type={type}
        pattern={pattern}
        required={required}
        disabled={disabled}
        name={name}
      />
      {error && (
        <p data-testid={`${testID}-error`} className="error classes here">
          {errorMessage}
        </p>
      )}
    </fieldset>
  );
});

Input.propTypes = {
  className: PropTypes.string, // accept className for placement
  defaultValue: PropTypes.any,
  design: PropTypes.oneOf(['primary', 'secondary', 'link']), // built-in styles
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  pattern: PropTypes.any,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  testID: PropTypes.string,
  type: PropTypes.oneOf([
    'date',
    'datetime',
    'email',
    'number',
    'password',
    'tel',
    'text',
  ]), // only allowable types, button to ignore form submission
};

export default Input;

