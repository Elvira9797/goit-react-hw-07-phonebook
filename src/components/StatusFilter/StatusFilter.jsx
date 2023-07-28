import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { selectStatusFilter } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/favoriteSlice';
import { StyledWrapper } from './StatusFilter.styled';

export const StatusFilter = () => {
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <StyledWrapper>
      <Button
        onClick={() => handleFilterChange(statusFilters.all)}
        selected={filter === statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.favourites)}
        selected={filter === statusFilters.favourites}
      >
        Favourites
      </Button>
    </StyledWrapper>
  );
};
