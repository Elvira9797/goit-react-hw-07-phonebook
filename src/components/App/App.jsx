import { ContactTitle, Message, Phonebook } from './App.styled';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';
import { StatusFilter } from 'components/StatusFilter/StatusFilter';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm />
      <StatusFilter />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      {isLoading && !error && <Loader />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Message>You don't have any contacts</Message>
      )}
    </Phonebook>
  );
};

export default App;
