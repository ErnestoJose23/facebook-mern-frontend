import React, { useContext } from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import UserContext from "../../context/UserContext";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  const { userData, setUserData } = useContext(UserContext);
  return (
    <div className="sidebar">
      <SidebarRow title={userData.user} src={userData.avatar} />
      <SidebarRow
        title="COVID-19 Information Centre"
        src={"https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png"}
      />
      <SidebarRow
        title="Friends"
        src={"https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"}
      />
      <SidebarRow
        title="Groups"
        src={"https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"}
      />
      <SidebarRow
        title="Marketplace"
        src={"https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"}
      />
      <SidebarRow
        title="Videos"
        src={"https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"}
      />
      <SidebarRow
        title="Events"
        src={"https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png"}
      />
      <SidebarRow
        title="Memories"
        src={"https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/GA7Y4WRJMp8.png"}
      />
      <SidebarRow
        title="Saved"
        src={"https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"}
      />
      <SidebarRow title="See more" Icon={ExpandMoreIcon} />
    </div>
  );
}

export default Sidebar;
