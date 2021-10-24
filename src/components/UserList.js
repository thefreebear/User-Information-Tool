import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../reducers/actions";
import ListGroup from "react-bootstrap/ListGroup";
import MyButton from "./MyButton";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (this.props.users.length <= 0) this.props.fetchUser();
  }

  renderList() {
    return this.props.users.map((user) => {
      return user.map((user) => {
        return (
          <ListGroup variant="flush">
            <ListGroup.Item>
                <div>{`Name: ${user.name}`}</div>
                <div>{`Email: ${user.email}`}</div>
                <div>{`Phone: ${user.phone}`}</div>
                <MyButton id={user.id} ButtonName={'Delete'} /> 
                <MyButton ButtonName={'Edit'} />
                <hr></hr>
            </ListGroup.Item>
          </ListGroup>
        );
      });
    });
  }

  render() {
    return <div style={{marginBottom:'5%'}}>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserList);
