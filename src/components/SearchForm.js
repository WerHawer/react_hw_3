import React from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";

const SearchForm = ({ value, onChange, onSubmit }) => (
  <form className="SearchForm" onSubmit={onSubmit}>
    <Button type="submit" customClass="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </Button>

    <Input
      customClass="SearchForm-input"
      type="text"
      autoFocus
      placeholder="Search images and photos"
      value={value}
      onChange={onChange}
    />
  </form>
);

export default SearchForm;
