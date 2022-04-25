import "./search-box.styles.css";

const SearchBox = (props) => {
  const { className, placeholder, onChangeHandler } = props;

  const onSearchChange = (event) => {
    onChangeHandler(event.target.value.toLowerCase());
  };

  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
