import { useDispatch } from 'react-redux';
import { deleteContact, toggleFavorite } from 'redux/operations';
import { MdClose } from 'react-icons/md';
import {
  ButtonStyled,
  Data,
  DataWrapper,
  IconWrapper,
  InputStyled,
  LabelContainer,
  ListItem,
  SvgStyled,
} from './ContactListItem.styled';
import { ReactComponent as ContactIcon } from '../../images/user.svg';
import { ReactComponent as PhoneIcon } from '../../images/phone.svg';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  const handleToggle = () => dispatch(toggleFavorite(contact));
  return (
    <ListItem>
      <DataWrapper>
        <Data>
          <ContactIcon />
          {contact.name}
        </Data>
        <Data>
          <PhoneIcon /> {contact.number}
        </Data>
      </DataWrapper>
      <IconWrapper>
        <LabelContainer>
          <InputStyled
            type="checkbox"
            checked={contact.favorite}
            onChange={handleToggle}
          />
          <SvgStyled
            id="Layer_1"
            version="1.0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
          </SvgStyled>
        </LabelContainer>
        <ButtonStyled onClick={handleDelete}>
          <MdClose size={24} />
        </ButtonStyled>
      </IconWrapper>
    </ListItem>
  );
};

export default ContactListItem;
