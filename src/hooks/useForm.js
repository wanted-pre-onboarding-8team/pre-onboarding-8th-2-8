import { useState } from 'react';

import useIssueForm from './useIssueForm';

const useForm = ({ title = '', content = '', owner = '' }) => {
  const { issueState, handleSetIssueDetail } = useIssueForm();
  const [formData, setFormData] = useState({
    title,
    content,
    owner,
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));

    handleSetIssueDetail({ ...issueState, [name]: value });
  };

  const handleSubmit = (e, callback) => {
    e.preventDefault();

    callback();
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
