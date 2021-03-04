// export default ContactForm;
import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import LangContext from '../contexts/LangContext';
import { TextInput, Checkbox } from './FormFields';
import Button from './Button';
import Preloader from './Preloader';
import Notification from './Notification';

const ContactForm = ({ form, messages }) => {
  const [formResponse, setFormResponse] = useState({
    preloader: false,
    msg: null,
    msgType: null,
  });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const { preloader, msg, msgType } = formResponse;
  const initialValues = {};
  const currentLang = useContext(LangContext);

  const handleSubmit = async (values, actions) => {
    setFormResponse({ preloader: true });
    const functionURL = 'https://emerald-markhor-6035.twil.io/send-email';
    const { nameSurname, email, subject, message, accept } = values;
    const msgContent = {
      error: messages.filter((v) => v.title === 'FormFailed'),
      success: messages.filter((v) => v.title === 'FormSuccess'),
    };
    const errorSchema = {
      preloader: false,
      msg: msgContent.error[0].description.description,
      msgType: 'error',
    };
    const successSchema = {
      preloader: false,
      msg: msgContent.success[0].description.description,
      msgType: 'success',
    };

    if (!executeRecaptcha) {
      setFormResponse(errorSchema);
      actions.setSubmitting(false);
      return false;
    }

    const token = await executeRecaptcha('homepageee');

    if (!token) {
      setFormResponse(errorSchema);
      actions.setSubmitting(false);
      return false;
    }

    const res = await fetch(functionURL, {
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
    if (res.status !== 200) {
      setFormResponse(errorSchema);
    } else {
      setFormResponse(successSchema);
      actions.resetForm();
    }
    actions.setSubmitting(false);
    return false;
  };

  const formFieldList = form.map(
    ({
      contentful_id,
      title,
      placeholder,
      type,
      nameAttribute,
      minLength,
      error1,
      maxLength,
      error2,
      additionalData,
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
            validateProps={{
              minLength,
              error1,
              maxLength,
              error2,
            }}
          />
        );
      }
      if (type === 'checkbox') {
        initialValues[nameAttribute] = false;
        return (
          <Checkbox
            key={contentful_id}
            name={nameAttribute}
            placeholder={placeholder}
            errorMsg={error1}
            additionalData={additionalData}
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
      {preloader && <Preloader top="300px" />}
      {msg && (
        <Notification type={msgType} lifetime="5s">
          {msg}
        </Notification>
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        <Form>{formFieldList}</Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
