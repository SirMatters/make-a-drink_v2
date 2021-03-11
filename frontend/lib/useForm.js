import { useEffect, useState } from 'react';


export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    const {value, name, type} = e.target;
    if (type === 'number') {
      value = +value;
    }
    if (type === 'file') {
      [value] = e.target.files
    }
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.entries(inputs).reduce((a,b) => {
      const [key, value] = b;
      a[key] = '';
      return a;
    }, {});
    setInputs(blankState);
  }

  return { inputs, handleChange, resetForm, clearForm }
}