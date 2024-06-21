import makeStyles from "@mui/styles/makeStyles";
import { InputBase, IconButton, Typography } from "@mui/material";
import classNames from "classnames";
import LoggedInNavbar from "./loggedInNavbar";
import { useSelector } from "react-redux";
import Popover from "@mui/material/Popover";
// icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LoginIcon from "@mui/icons-material/Login";
import { useEffect, useRef, useState } from "react";

const useStyles = makeStyles(() => ({
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "32px",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    textAlign: "left",
  },
  width30: {
    width: "30%",
  },
  searchProduct: {
    width: "100%",
    border: "solid 1px #ebebeb",
  },
  searchProductInputFeild: {
    width: "92%",
  },
  homeIcons: {
    "& svg": { marginRight: "20px" },
  },
}));

function Header() {
  const classes = useStyles();
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  useEffect(() => {
    setAnchorEl(buttonRef.current);
  });
  const isUserLoggedIn = useSelector((state: any) => {
    return state.auth.isLoggedIn;
  });

  return (
    <>
      <div className={classes.flex}>
        <div className={classNames(classes.logo, classes.width30)}>Anon</div>
        <div className={classes.searchProduct}>
          <InputBase
            className={classes.searchProductInputFeild}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchOutlinedIcon />
          </IconButton>
        </div>
        {isUserLoggedIn ? (
          <LoggedInNavbar />
        ) : (
          <LoginIcon aria-describedby="popover" ref={buttonRef} />
        )}
        <Popover
          id="popover"
          open={true}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>Signin</Typography>
        </Popover>
      </div>
    </>
  );
}

export default Header;
