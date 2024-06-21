import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  navbar: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    margin: "30px auto 0",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "14px",
    width: "80%",
    "& a": {
      textDecoration: "none",
      color: "#000",
      fontWeight: "bold",
    },
    "& li": {
      alignItems: "flex-start",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <ul className={classes.navbar}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Categories</Link>
      </li>
      <li>men</li>
      <li>women</li>
      <li>jewelry</li>
      <li>perfume</li>
      <li>blog</li>
      <li>hot offers</li>
    </ul>
  );
}

export default Navbar;
