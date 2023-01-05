import { useCallback, useRef, useState } from 'react';

const useSearchBar = list => {
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  const handleKeyword = useCallback(
    keyword => {
      if (!keyword.length) {
        setIsActive(!isActive);

        setFilteredList(list);
      }

      const filteredList = list.filter(item => {
        if (item.owner) {
          return item.owner.toLowerCase().includes(keyword.toLowerCase());
        } else {
          return item.toLowerCase().includes(keyword.toLowerCase());
        }
      });

      setFilteredList(filteredList);
      setIsActive(true);
    },

    [keyword],
  );

  const handleOnFocus = () => {
    setFilteredList(list);
    setIsActive(true);
  };

  const handleAutoComplete = () => {
    setIsActive(false);
    setKeyword('');
    inputRef.current.value = '';
  };

  return {
    handleKeyword,
    handleAutoComplete,
    handleOnFocus,
    setIsActive,
    inputRef,
    filteredList,
    isActive,
  };
};

export default useSearchBar;
