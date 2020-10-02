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
          <div className="iconSearch">
            <ArtTrackIcon></ArtTrackIcon>
          </div>
          Posts
        </div>
        <div className="options_search">
          <div className="iconSearch">
            <PeopleIcon />
          </div>
          People
        </div>
        <div className="options_search">
          <div className="iconSearch">
            <PhotoLibraryIcon />
          </div>
          Photos
        </div>
        <div className="options_search">
          <div className="iconSearch">
            <YouTubeIcon />
          </div>
          Videos
        </div>
        <div className="options_search">
          <div className="iconSearch">
            <StoreMallDirectoryIcon />
          </div>
          Marketplace
        </div>
        <div className="options_search">
          <div className="iconSearch">
            <FlagIcon />
          </div>
          Pages
        </div>
        <div className="options_search">
          <div className="iconSearch">
            <PlaceIcon />
          </div>
          Places
        </div>
        <div className="options_search">
          <div className="iconSearch">
            <DateRangeIcon />
          </div>
          Events
        </div>
        <div className="options_search">
          <div className="iconSearch">
            <LinkIcon />
          </div>
          Links
        </div>
      </div>
    </div>
  );
}

export default SearchSide;
