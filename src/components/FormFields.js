import React from 'react';
import { useField } from 'formik';

import {
  FormInputWrapperS,
  LabelS,
  InputS,
  TextareaS,
  CheckboxS,
  ErrorS,
} from '../styles/FormFieldsStyles';

export const TextInput = ({
  label,
  name,
  placeholder,
  type,
  validateProps: { minLength, error1, maxLength, error2 },
}) => {
  const validate = (value) => {
    if (type === 'email') {
      if (!value) return error1;
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email))
        return error2;
    } else {
      if (value.length < minLength) return error1;
      if (value.length > maxLength) return error2;
    }
    return null;
  };
  const [field, meta] = useField({ name, validate });
  return (
    <FormInputWrapperS>
      <LabelS htmlFor={name}>{label}</LabelS>
      {type !== 'textarea' ? (
        <InputS {...field} type={type} placeholder={placeholder} />
      ) : (
        <TextareaS {...field} type={type} placeholder={placeholder} rows={10} />
      )}
      {meta.touched && meta.error ? (
        <ErrorS className="error">{meta.error}</ErrorS>
      ) : null}
    </FormInputWrapperS>
  );
};

export const Checkbox = ({ name, placeholder, errorMsg }) => {
  const validate = (value) => {
    if (!value) return errorMsg;
    return null;
  };
  const [field, meta] = useField({ name, type: 'checkbox', validate });

  return (
    <FormInputWrapperS>
      <LabelS>
        <CheckboxS {...field} type="checkbox" name={name} />
        <span dangerouslySetInnerHTML={{ __html: placeholder }} />
      </LabelS>
      {meta.touched && meta.error ? <ErrorS>{meta.error}</ErrorS> : null}
    </FormInputWrapperS>
  );
};
