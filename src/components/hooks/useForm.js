import React, { useState } from "react";

const useForm = (initialData) => {
  const [values, setValues] = useState(initialData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [values, handleChanges, handleSubmit, showSuccessMessage];
};

export default useForm;
