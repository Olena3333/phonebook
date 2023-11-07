import React from 'react';
import { StyledForm, StyledInput } from './ContactForm.styled';
import { StyledButton } from 'components/App.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/sliceContacts';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handelOnSubmit = event => {
    event.preventDefault();
    const contact = {
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
      id: nanoid(),
    };

    const repeat = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (repeat) {
      return alert(`${contact.name} is already in contacts.`);
    }
    dispatch(addContact(contact));
    event.currentTarget.reset();
  };
  return (
    <StyledForm onSubmit={handelOnSubmit}>
      <label>
        Name:
        <StyledInput
          type="text"
          placeholder="Enter the name "
          name="name"
          required
        />
      </label>
      <label>
        Number:
        <StyledInput
          placeholder="Enter the number"
          type="tel"
          name="number"
          required
        />
      </label>
      <StyledButton
      // disabled={!contact.name}
      >
        Add contact
      </StyledButton>
    </StyledForm>
  );
};
