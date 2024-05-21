const Input = ({ text, setText }) => {
  const handleInputChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
