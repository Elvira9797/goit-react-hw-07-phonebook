import { selectFilter } from 'redux/selectors';
import { filter } from '../../redux/filterSlice';
import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const onChangeFilter = event => {
    dispatch(filter(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filterValue} onChange={onChangeFilter} />
    </Label>
  );
};

export default Filter;
