import React from 'react';

// import { deleteContact, getContacts } from 'redux/sliceContacts';
// import { useDispatch, useSelector } from 'react-redux';
// import { getFilter } from 'redux/sliseFilter';

import { StyledList } from './ContactList.styled';
import { StyledButton } from 'components/App.styled';

export const ContactList = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // const onDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  // if (!filteredContacts.length) {
  //   return <p>No contacts found.</p>;
  // }

  return (
    <StyledList>
      {/* {filteredContacts.map(({ id, name, number }) => ( */}
      <li
      // key={id}
      >
        1111111
        {/* {name}: {number} */}
        <StyledButton
        // onClick={() => onDeleteContact(id)}
        >
          More
        </StyledButton>
        <StyledButton
        // onClick={() => onDeleteContact(id)}
        >
          Delete
        </StyledButton>
      </li>
      {/* ))} */}
    </StyledList>
  );
};
