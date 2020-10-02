import React from "react";
import Header from "../../components/layouts/header";
import "./Search.css";
import SearchSide from "../../components/layouts/SearchSide";
import SearchBox from "../../components/layouts/SearchBox";

function Search(props) {
  const {
    match: { params },
  } = props;
  console.log(params);

  return (
    <div className="search">
      <Header />
      <SearchSide search={params.searchField} />
      <SearchBox type={params.type} search={params.searchField} />
    </div>
  );
}

export default Search;
