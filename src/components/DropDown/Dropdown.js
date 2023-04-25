import Select from 'react-select';
import { filterValues } from 'utils/filterValues';
import PropTypes from 'prop-types';
const options = [
  filterValues.all,
  filterValues.follow,
  filterValues.followings,
];

export const SelectFilterUsers = ({ selectedOption, setSelectedOption }) => {
  return (
    <Select
      name="selected-option"
      value={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
  );
};

SelectFilterUsers.propTypes = {
  selectedOption: PropTypes.object,
  setSelectedOption: PropTypes.func,
};
