// export default ContactForm;
import React, { useContext } from 'react';
import { Formik, Form } from 'formik';

import LangContext from '../contexts/LangContext';
import { TextInput, Checkbox } from './FormFields';
import Button from './Button';

const ContactForm = ({ form }) => {
  const initialValues = {};
  const currentLang = useContext(LangContext);
  const handleSubmit = async (values, setSubmitting) => {
    const functionURL = 'https://emerald-markhor-6035.twil.io/send-email';
    const { nameSurname, email, subject, message, accept } = values;

    await fetch(functionURL, {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: new URLSearchParams({
        nameSurname,
        email,
        subject,
        message,
        accept,
        currentLang,
      }).toString(),
    });
    setSubmitting(false);
  };

  const formFieldList = form.map(
    ({
      contentful_id,
      isMandatory,
      title,
      placeholder,
      type,
      nameAttribute,
    }) => {
      if (type === 'text' || type === 'textarea' || type === 'email') {
        initialValues[nameAttribute] = '';

        return (
          <TextInput
            key={contentful_id}
            label={title}
            name={nameAttribute}
            type={type}
            placeholder={placeholder}
            isMandatory={isMandatory}
          />
        );
      }
      if (type === 'checkbox') {
        initialValues[nameAttribute] = false;
        return (
          <Checkbox
            key={contentful_id}
            name={nameAttribute}
            isMandatory={isMandatory}
            placeholder={placeholder}
          />
        );
      }
      if (type === 'send') {
        return (
          <Button
            key={contentful_id}
            type="submit"
            elType="inverted"
            elWidth="100%"
            isLink={false}
          >
            {title}
          </Button>
        );
      }
      return null;
    }
  );
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) =>
          handleSubmit(values, setSubmitting)
        }
      >
        <Form>{formFieldList}</Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
