import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import EditUserDetails from "./EditUserDetails";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteUser } from "../reducers/actions";

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = { renderPopUp: "" };
  }
  handleClick = () => {
    console.log(this.props.users);
    console.log(this.props.ButtonName);
    if (this.props.ButtonName === "Edit") {
      return <EditUserDetails UserName={this.props.Users} />
    }if (this.props.ButtonName === "Delete") {
      let id = this.props.id
      this.props.delUsers(id);
    }
    this.setState({});
  };
  render() {
    console.log(this.props.id)
    var MyButton;
    if (this.props.ButtonName === "Edit") {
      MyButton = (
        <Link className="Links" to={"/edit"}>
          <Button variant="secondary">{this.props.ButtonName}</Button>
        </Link>
      );
    } else {
      MyButton = (
        <Button variant="secondary" onClick={() => this.handleClick()}>
          {this.props.ButtonName}
        </Button>
      );
    }
    return <>{MyButton}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    Users: state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return { 
    delUsers: id => dispatch(deleteUser(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyButton);
