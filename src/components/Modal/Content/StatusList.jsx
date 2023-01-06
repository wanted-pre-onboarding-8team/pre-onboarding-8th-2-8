import { AutoCompleteList } from 'components/@commons/AutoComplete/AutoComplete.style';

const StatusList = ({ handleAutoComplete }) => {
  // console.log(item);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '0 2px' }}>
      <AutoCompleteList onClick={() => handleAutoComplete()}></AutoCompleteList>
    </div>
  );
};

export default StatusList;
