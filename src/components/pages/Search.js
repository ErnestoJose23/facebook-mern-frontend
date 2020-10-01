import React from "react";
import Header from "../../components/layouts/header";

function Search(props) {
  console.log(props);
  return (
    <div className="search">
      <Header />
      {props.match.params.searchField}
    </div>
  );
}

export default Search;
