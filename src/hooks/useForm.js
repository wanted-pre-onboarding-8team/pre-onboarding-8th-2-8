import { useState } from 'react';

const useForm = ({ title = '', content = '' }) => {
  const [formData, setFormData] = useState({
    title,
    content,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
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
