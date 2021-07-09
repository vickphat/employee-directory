import React from "react";

const SearchBar = (props) => {
  // Setting the component's initial state

  return (
    <nav className=" container navbar navbar-light bg-dark  justify-content-center">
      <form className="form-inline m-1" onSubmit={props.handleFormSubmit}>
        <input
          className="form-control"
          value={props.value}
          name="search"
          onChange={props.handleInputChange}
          type="search"
          placeholder="Search"
        />
      </form>
    </nav>
  );
};

export default SearchBar;