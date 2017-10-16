import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import $ from "jquery"

class Signup extends Component {
  state = {
    user: [],
    name: "",
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.password) {

      const email = this.state.email;
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(email)) {
          API.register({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          })
          .then(res => {
            console.log(res);
            this.setState({ user: res.data.response, name: "", email: "", password: ""});
            $("#loginModal").hide();
            document.getElementById("logInBttn").innerHTML = "<p>Log Out</p>";
          })
          .catch(err => {
            if (err === "Error: Request failed with status code 422") alert("email already used");
            console.log(err);

          });

      } else {
        alert("enter a valid e-mail address");
      }
    }
  };

  render() {
    return (
      <div id="signIn">
        <Container fluid>
          <Row>
            <Col size="md-10 md-offset-1">

                <form>
                  <Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="name"
                  />
                  <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="email"
                  />
                  <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="password"
                    type="password"
                  />
                  <FormBtn
                    disabled={!this.state.name}
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </FormBtn>
                </form>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Signup;
