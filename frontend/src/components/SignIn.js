import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import MaterialLink from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { login } from "../actions/loginActions";
import { connect } from "react-redux";
//Styles for form
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright ©  "}
      <MaterialLink color="inherit" href="https://github.com/gharam37">
        Gharam Zakaria
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



const SignIn = ({ token, dispatch }) => {
  const classes = useStyles();
  const [userName, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const fetchRequest = (e) => {
    // e.preventDefault();

    dispatch(login([userName, password]));
    console.log(token);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="user name"
            name="userName"
            autoComplete="userName"
            onChange={(text) => setUsername(text.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(text) => {
              setPassword(text.target.value);
            }}
            autoComplete="current-password"
          />
          <Link to="/upload" className="button">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={fetchRequest}
              className={classes.submit}
            >
              Sign In
            </Button>
          </Link>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
});

export default connect(mapStateToProps)(SignIn);
