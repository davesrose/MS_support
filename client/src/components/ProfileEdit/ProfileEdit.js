import React, { Component } from "react";
import "./ProfileEdit.css";
import API from "../../utils/API";
import { Input, FormBtn, Select } from "../../components/Form";

class ProfileEdit extends Component {
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
      ageRange: '',
      sex: '',
      userCategory: '',
      categoryDescription: '',
      publicProfile: '',
      imagePreviewUrl: '',
      imagePath: ''
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
        return this.setState({ 
          data: res.data,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          password: res.data.password,
          zipCode: res.data.zipCode,
          ageRange: res.data.ageRange,
          sex: res.data.sex,
          userCategory: res.data.userCategory,
          categoryDescription: res.data.categoryDescription,
          publicProfile: res.data.publicProfile,
          imagePreviewUrl: res.data.imagePath,
          imagePath: res.data.imagePath
        });
      })
      .catch(err => console.log(err));
  }


  _handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(document.getElementById('uploadForm'));
    const uploadData = document.getElementById('uploadForm');

    let updatedProfileData = {};
    updatedProfileData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      // email: this.state.email,
      // password: this.state.password,
      zipCode: this.state.zipCode,
      ageRange: this.state.ageRange,
      sex: this.state.sex,
      userCategory: this.state.userCategory,
      categoryDescription: this.state.categoryDescription,
      publicProfile: this.state.publicProfile,
      imagePath: this.state.imagePath
    };

    let _path = "";

    //Upload the image, and grab the URL if successful, then save all the text in the DB
    API.uploadImage(formData)
   .then(res => {
      if (res.data.success === false) {
        setTimeout(() => {
          alert(res.data.message);
        }, 1000);
      } 
      else {
        this.setState({ file: res.data.response, imagePath: res.data.imagePath, name: '', imagePreviewUrl: ''});
      }
    })
    .catch(err => console.log(err));
    

    console.log(this.state);
    console.log(updatedProfileData);

    // Now Save the profile data in the DB, including the path of the image, if it were provided
    

    API.updateProfile("59df790e98ae2f3b18ab4ce0", updatedProfileData)
    .then(resbook => this.loadProfile())
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    //Check to only deal with checkboxes
    if (event.target.type == "checkbox"){
      this.setState({ 
        publicProfile: event.target.checked
      });
    }
  };

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    console.log(file.name);
    reader.onloadend = () => {
      this.setState({
        file: file,
        name: file.name,
        imagePath: '/images/' + file.name,
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
            disabled="true"
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
            value={this.state.firstName}
            onChange={this.handleInputChange}
            name="firstName"
            placeholder="First Name"
          />
          <Input
            value={this.state.lastName}
            onChange={this.handleInputChange}
            name="lastName"
            placeholder="Last Name"
          />
          <Input
            value={this.state.zipCode}
            onChange={this.handleInputChange}
            name="zipCode"
            placeholder="zip Code"
          />
          <label>Age Range:
            <Select value={this.state.ageRange} name="ageRange" onChange={this.handleInputChange}>
              <option value="">Prefer Not to Say</option>
              <option value="0">18 and under</option>
              <option value="19">19 - 29</option>
              <option value="30">30 - 39</option>
              <option value="40">40 - 49</option>
              <option value="50">50 - 59</option>
              <option value="60">60 and Over</option>
            </Select>
          </label>
          <br />          
          <label>Sex:
            <Select value={this.state.sex} name="sex" onChange={this.handleInputChange}>
              <option value="">Prefer Not to Say</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </label>
          <br />
          <label>Category: 
            <Select value={this.state.userCategory} name="userCategory" onChange={this.handleInputChange}>
              <option value="">Prefer Not to Say</option>
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
export default ProfileEdit;