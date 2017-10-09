import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Panel from "../../components/Panel";

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
      API.register({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .then(res => this.setState({ user: res.data.response, name: "", email: "", password: ""}))
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <Jumbotron>
              <h1 className="text-center"><i className="fa fa-newspaper-o"></i> Sign up</h1>
            </Jumbotron>
            <Panel icon="fa fa-list-alt" heading="Search Parameters">
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
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
