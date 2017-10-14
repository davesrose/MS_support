import React, { Component } from "react";
import ImageUpload from "../components/ImageUpload";
import { Col, Row, Container } from "../components/Grid";
import Panel from "../components/Panel";

class Profile extends Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <Panel icon="fa fa-user-circle-o" heading="Update Profile">
              <ImageUpload />
            </Panel>
          </Col>
        </Row>
      </Container>
	  )
	}
	
}  

 export default Profile;