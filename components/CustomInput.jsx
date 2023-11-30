import React from 'react';

const CustomInput = (props) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className={`custom-input ${props.extraClass ? props.extraClass : ''}`}>
      {props.withCheckbox && (
        <div className="custom-input-checkbox-container">
          <div
            className={`custom-input-checkbox ${props.condition === props.name && 'checked'}`}
            onClick={() => {
              props.onClick(props.name);
              setChecked(!checked);
            }}></div>
        </div>
      )}
      {props.labelPosition === undefined && (
        <div className="custom-input-title">
          {props.label}
          {props.sub ? <sub>{props.sub}</sub> : null}
        </div>
      )}
      {props.withSelect ? (
        <select
          className="custom-select-input"
          onChange={(e) => {
            props.onChange(e.target.value);
          }}>
          {props.options.map((option) => {
            return <option value={option.value}>{option.label}</option>;
          })}
        </select>
      ) : null}
      <input
        className={`custom-input-field ${props.isBlock ? 'block' : ''}`}
        type={props.type}
        placeholder={props.placeholder ? props.placeholder : null}
        value={props.value}
        onChange={
          props.onChange
            ? (e) => {
                props.onChange(e.target.value);
                if (props.type === 'number') {
                  props.onChange(+e.target.value);
                }
              }
            : null
        }
      />
      {props.labelPosition === 'right' ? (
        <div className="custom-input-title">
          {props.label}
          {props.sub ? <sub>{props.sub}</sub> : null}
        </div>
      ) : null}
    </div>
  );
};

export default CustomInput;
