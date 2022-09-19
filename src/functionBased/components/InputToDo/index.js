/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputToDo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    const { addTodoProps } = props;

    event.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      setTitle('');
    } else {
      // eslint-disable-next-line no-alert
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }} />
      </button>
    </form>
  );
};

export default InputToDo;
