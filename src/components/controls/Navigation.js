import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {Home, Info, ShoppingBag, Campaign, ContactPage } from "@mui/icons-material";

export default function Navigation({ toggleMenu, toggleDrawer, menuButtons }) {
  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuButtons.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {
                {
                    0: <Home />,
                    1: <Info />,
                    2: <ShoppingBag />,
                    3: <Campaign />,
                    4: <ContactPage />,
                  }[index]
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={"right"}
        open={toggleMenu}
        onClose={toggleDrawer("right", false)}
        style={{height:"fit-contentf"}}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
