import React from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import img from "../assets/b2brain_logo.png";
import "../styles/Sidebar.css";

const drawerWidth = 220;

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

function Sidebar() {
  const classes = useStyles();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <HomeOutlinedIcon style={{ color: "silver" }} />,
    },
    {
      text: "Intels",
      icon: <StarBorderPurple500OutlinedIcon style={{ color: "silver" }} />,
    },
    {
      text: "Leads",
      icon: <PersonOutlineOutlinedIcon style={{ color: "silver" }} />,
    },
    {
      text: "Accounts",
      icon: <ApartmentOutlinedIcon style={{ color: "silver" }} />,
    },
    {
      text: "Preferences",
      icon: <SettingsOutlinedIcon style={{ color: "silver" }} />,
    },
    {
      text: "Integrations",
      icon: <LinkOutlinedIcon style={{ color: "silver" }} />,
    },
    {
      text: "Team",
      icon: <GroupsOutlinedIcon style={{ color: "silver" }} />,
    },
    {
      text: "Help/Support",
      icon: <QuestionAnswerOutlinedIcon style={{ color: "silver" }} />,
    },
  ];

  return (
    <div className={classes.root}>
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
        PaperProps={{
          elevation: 5,
        }}
      >
        <div>
          <img src={img} alt="B2Brain" />
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar;
