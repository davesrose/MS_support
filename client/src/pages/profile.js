import React, { Component } from "react";
import ProfileEdit from "../components/ProfileEdit";
import { Col, Row, Container } from "../components/Grid";
import Panel from "../components/Panel";

class Profile extends Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <Panel icon="fa fa-user-circle-o" heading="Edit Profile">
              <ProfileEdit />
            </Panel>
          </Col>
        </Row>
      </Container>
	  )
	}
	
}  

 export default Profile;