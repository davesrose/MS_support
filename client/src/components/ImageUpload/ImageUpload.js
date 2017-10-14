import React, { Component } from "react";
import "./ImageUpload.css";
import API from "../../utils/API";
import { Input, FormBtn, Select } from "../../components/Form";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '', 
      name: '', 
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      zipCode: '',
      sex: '',
      userCategory: '',
      categoryDescription: '',
      publicProfile: '',
      imagePreviewUrl: ''
    };
  }
  
  componentDidMount() {
    this.loadProfile();
  };

  //TODO: Currently Defaulting to an Id, but will change this to Session
  //TODO: Also need to properly display the picture
  loadProfile = () => {
    API.getUser("59df790e98ae2f3b18ab4ce0")
      .then(res => {
        console.log(res.data);
        return this.setState({ 
                  data: res.data,
                  firstName: res.data.firstName,
                  lastName: res.data.lastName,
                  email: res.data.email,
                  password: res.data.password,
                  zipCode: res.data.zipCode,
                  sex: res.data.sex,
                  userCategory: res.data.userCategory,
                  categoryDescription: res.data.categoryDescription,
                  publicProfile: res.data.publicProfile,
                  imagePreviewUrl: res.data.imgPath 
                });
      })
      .catch(err => console.log(err));
  }


  _handleSubmit(e) {
    e.preventDefault();

    var formData = new FormData(document.getElementById('uploadForm'));

    API.uploadImage(formData)
   .then(res => {
      console.log(res);
      if (res.data.success === false) {
        setTimeout(() => {
          alert(res.data.message);
        }, 1000);
      } else {
        // alert("File Upload Succeeded");
        API.updateProfile("59df790e98ae2f3b18ab4ce0", {
          firstName: this.state.title,
          lastName: this.state.author,
          // email: this.state.email,
          // password: this.state.password,
          zipCode: this.state.zipCode,
          sex: this.state.sex,
          userCategory: this.state.userCategory,
          categoryDescription: this.state.categoryDescription,
          publicProfile: this.state.publicProfile
        })
        .then(resbook => this.loadProfile())
        .catch(err => console.log(err));

        this.setState({ file: res.data.response, name: '', imagePreviewUrl: ''});
      }
    })
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        name: file.name,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form 
          id="uploadForm"
          method="POST"
          action="/upload"
          formEncType="multipart/form-data" 
          onSubmit={(e)=>this._handleSubmit(e)}>
          <Input
            value={this.state.firstName}
            onChange={this.handleInputChange}
            name="firstName"
            placeholder="First Name"
          />
          <Input
            value={this.state.LastName}
            onChange={this.handleInputChange}
            name="LastName"
            placeholder="Last Name"
          />
          <Input
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="email"
            type="email"
          />
          <Input
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            placeholder="password"
            type="password"
          />
          <Input
            value={this.state.zipCode}
            onChange={this.handleInputChange}
            name="zipCode"
            placeholder="zip Code"
          />
          <label>Sex:
            <Select value={this.state.sex} onChange={this.handleChange}>
              <option value="Male">Male</option>
              <option value="Femal">Female</option>
              <option value="NA">NA</option>
            </Select>
          </label>
          <br />
          <label>Category: 
            <Select value={this.state.userCategory} onChange={this.handleChange}>
              <option value="Patient">Patient</option>
              <option value="Friend">Friend</option>
              <option value="Family">Family</option>
              <option value="Other">Other</option>
            </Select>
          </label>
          <Input
            value={this.state.categoryDescription}
            onChange={this.handleInputChange}
            name="categoryDescription"
            placeholder="Fill in only if others selected as Category Description"
          />
          <label>Is Profile Public:  
            <input
              value={this.state.publicProfile}
              onChange={this.handleInputChange}
              name="publicProfile"
              type="checkbox"
            />
          </label>
          <br />
          <input className="fileInput" 
            type="file" name="userPhoto"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload image and Update profile
          </button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
export default ImageUpload;