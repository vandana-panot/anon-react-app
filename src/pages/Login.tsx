import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, logIn, loggedOut } from "../store/reducers/authSlice";
import { makeStyles } from "@mui/styles";
import SignIn from "./SignIn";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppDispatch } from "../store/store";
const useStyles = makeStyles(() => ({
  formWrapper: {
    padding: "30px",
  },
  flex: {
    display: "flex",
    backgroundColor: "#ebebeb",
    boxShadow: "5px 5px 5px #f7f4f4",
    borderRadius: "20px",
  },
  logo: {
    fontSize: "40px",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    textAlign: "left",
  },
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
  secondaryButton: {
    backgroundColor: "#ebebeb",
    color: "#fff",
    fontWeight: "bold",
  },
  errorText: {
    color: '#ff1744'
  }
}));

function Login() {
  const classes = useStyles();
  const [showSignIn, setShowSignIn] = useState(false);
  const userDetails = useSelector((state: any) => {
    // console.log(state, "ss");
  });
  const dispatch = useDispatch<AppDispatch>();
  const nameRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  });

  const schema = z.object({
    name: z.string(),
    password: z.string().min(1, "This field is required")
  });
  type formFields= z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError
  } = useForm<formFields>({resolver:zodResolver(schema)});

  const formSubmit = (data: FieldValues) => {
    dispatch(fetchData());
    // store.getState();
    // console.log(store.getState(), "ss")
  };

  console.log(errors, "errors")
  return (
    <>
      <h2 className={classes.logo}>Anon</h2>

      <div className={classes.flex}>
        <img
          src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png"
          alt=""
          height="500"
        />
        <div className={classes.formWrapper}>
          {!showSignIn && (
            <div>
              <h2>Login</h2>
              <form onSubmit={handleSubmit(formSubmit)}>
                <input
                  className={classes.input}
                  placeholder="User name / Email id"
                  {...register("name")}
                  name="user name"
                />
                {<span className="errorText">{errors.name?.message?.toString()}</span>}
                <input
                  className={classes.input}
                  placeholder="Password"
                  {...register("password")}
                />
                {<div>{errors.password?.message?.toString()}</div>}
                <button
                  className={classes.button}
                >
                  Login
                </button>
              </form>
              <p>
                If not a member please{" "}
                <a onClick={() => setShowSignIn(true)}>Sign In</a>
              </p>
            </div>
          )}
          {showSignIn && (
            <SignIn
              showSignin={showSignIn}
              loadLogin={() => {
                setShowSignIn(!showSignIn);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
