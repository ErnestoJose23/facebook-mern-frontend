import React from "react";
import "../../components/pages/Search.css";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import PeopleIcon from "@material-ui/icons/People";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import YouTubeIcon from "@material-ui/icons/YouTube";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import FlagIcon from "@material-ui/icons/Flag";
import PlaceIcon from "@material-ui/icons/Place";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LinkIcon from "@material-ui/icons/Link";

function SearchSide({ search }) {
  return (
    <div className="searchside">
      <h2>Searching results for</h2> <span>{search}</span>
      <div className="separador"></div>
      <div className="searchside_options">
        <h4>Filters</h4>
        <div className="options_search">
          <ArtTrackIcon className="iconSearch"></ArtTrackIcon> Posts
        </div>
        <div className="options_search">
          <PeopleIcon className="iconSearch" /> People
        </div>
        <div className="options_search">
          <PhotoLibraryIcon className="iconSearch" /> Photos
        </div>
        <div className="options_search">
          <YouTubeIcon className="iconSearch" /> Videos
        </div>
        <div className="options_search">
          <StoreMallDirectoryIcon className="iconSearch" /> Marketplace
        </div>
        <div className="options_search">
          <FlagIcon className="iconSearch" /> Pages
        </div>
        <div className="options_search">
          <PlaceIcon className="iconSearch" /> Places
        </div>
        <div className="options_search">
          <DateRangeIcon className="iconSearch" /> Events
        </div>
        <div className="options_search">
          <LinkIcon className="iconSearch" /> Links
        </div>
      </div>
    </div>
  );
}

export default SearchSide;
