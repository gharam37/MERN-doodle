import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { FilePond, registerPlugin } from 'react-filepond'
import "filepond/dist/filepond.min.css"


const Image = ({ dispatch,  token }) => {
  const [currentFile, setFile] = useState(null);
  const [pond, setPond] = useState(null);
  const [currentLink , setLink]=useState(null);

  useEffect(() => {
    console.log(token)
  }, [dispatch])


  const onChangeHandler=(fileItems) => {
    // Set current file objects to this.state
    console.log("Times list" +fileItems.length)
    console.log(fileItems[0])
    
    setFile(fileItems[0])
    console.log("Current file "+currentFile)
    
}



const handleInit =() => {
  console.log('FilePond instance has initialised', pond);
}

const SetCurrentUrl = (url)=>{
  setLink(url)
  console.log("here"+currentLink)



}

const addFile = (event) =>{
  var formData = new FormData();
  console.log(event.target.files[0]);
  formData.append("image", event.target.files[0]);

  console.log(event.target.files[0]);

  fetch(`http://localhost:3001/thumbnail`, {
      method: 'POST',
      headers: {'Authorization' : `Bearer ${token}`},
      body: formData,
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data.url)
    setLink(data.url)
    console.log("this is my link"+currentLink)


    //  this.setState({images: data.images, isLoading: false});
      //this.props.updateImages(data.images);
  })
  .catch(error => console.log("Error fetching"));
}

  return (
    <section>
      <h1>You can upload an Image here</h1>

      <form encType="multipart/form-data" action="">
                <input id="id-for-upload-file" onChange={addFile} type="file"/>
            </form>

       <img 
      src={currentLink}
      alt="new"
      />

      <Button onClick={() => { console.log(token); console.log(currentLink)}}>  Click me </Button>
     
      
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
  isLoggedIn: state.login.isLoggedIn,
  token: state.login.token,

})

export default connect(mapStateToProps)(Image)