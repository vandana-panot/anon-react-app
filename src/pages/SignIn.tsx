import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  input: {
    height: "30px",
    margin: "20px",
    display: "block",
    width: "100%",
  },
  button: {
    backgroundColor: "#449ac9",
    color: "#fff",
    fontWeight: "bold",
  },
}));

interface props {
  showSignin: boolean;
  // loadLogin: (u: number) => void;
  loadLogin: () => void;
}

function SignIn({ showSignin, loadLogin }: props) {
  const classes = useStyles();
  const params = useParams();
  console.log(params, "sss");
  return (
    <div>
      <h2>Sign In</h2>
      <input className={classes.input} placeholder="User name" />
      <input className={classes.input} placeholder="Email" />
      <input className={classes.input} placeholder="Password" />
      <input className={classes.input} placeholder="Confirm Password" />
      <button className={classes.button} onClick={loadLogin}>
        Sign In
      </button>
    </div>
  );
}

export default SignIn;
