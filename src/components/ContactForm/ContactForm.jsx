import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import * as Yup from 'yup';
import {
  Label,
  Button,
  Input,
  Div,
  FormBox,
  ContactBox,
  Span,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Form } from 'formik';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Z'-\s]+$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      )
      .required('Name is required'),
    number: Yup.string()
      .matches(
        /^[0-9\s+()-]+$/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Number is required'),
  });

  const checkExistContact = name => {
    return contacts.find(contacts => contacts.name === name);
  };

  const handleSubmit = (values, { resetForm }) => {
    const isExist = checkExistContact(values.name);
    if (isExist) {
      Notiflix.Notify.failure(`${values.name} is already in contacts`);
      resetForm();
      return;
    }

    dispatch(addContact({ name: values.name, number: values.number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormBox>
        <Form autoComplete="off">
          <ContactBox>
            <Field type="text" name="name" as={Input} required />
            <ErrorMessage name="name" component={Div} />
            <Label>Name</Label>
          </ContactBox>
          <ContactBox>
            <Field type="text" name="number" as={Input} required />
            <ErrorMessage name="number" component={Div} />
            <Label>Number</Label>
          </ContactBox>

          <Button type="submit">
            Add contact <Span></Span>
          </Button>
        </Form>
      </FormBox>
    </Formik>
  );
};

export default ContactForm;
