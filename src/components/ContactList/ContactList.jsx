import ContactListItem from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectStatusFilter,
} from 'redux/selectors';
import { statusFilters } from 'redux/constants';

const getVisibleContacts = (contacts, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.favourites:
      return contacts.filter(contact => contact.favorite);
    default:
      return contacts;
  }
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const statusFilter = useSelector(selectStatusFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  const filterValue = useSelector(selectFilter);

  const getFilteredContacts = () => {
    const formatedFiltered = filterValue.toLowerCase();
    return visibleContacts.filter(({ name }) =>
      name.toLowerCase().includes(formatedFiltered)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {filteredContacts.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </List>
  );
};

export default ContactList;
