import React, * as react from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MaterialUIButton from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { Helmet } from 'react-helmet'

//Styles for the upload button
const buttonStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const Image = ({ dispatch, token }) => {
  const button = buttonStyles();
  //Current Link is the thumbnail link
  const [currentLink, setLink] = react.useState(null);
 // Where we fetch data
  const addFile = (event) => {
    var formData = new FormData();
    console.log(event.target.files[0]);
    formData.append("image", event.target.files[0]);

    console.log(formData);

    fetch(`http://localhost:3001/thumbnail`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.url);
        setLink(data.url);
        console.log("this is my link" + currentLink);
      })
      .catch((error) => console.log("Error fetching"));
  };

  return (
   
    <section>
      <div className={button.root}>
      <Helmet>
          <title>A very empty upload page</title>
        </Helmet>
        <Typography gutterBottom variant="h5" component="h2">
          Press that tiny button to upload
        </Typography>

        <input
          accept="image/*"
          className={button.input}
          onChange={addFile}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            OnClick={addFile}
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
        <MaterialUIButton variant="contained" href={currentLink}>
          Your thumbnail will go here
        </MaterialUIButton>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  token: state.login.token, //Get the token from redux store
});

export default connect(mapStateToProps)(Image);
