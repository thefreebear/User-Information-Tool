import React, { useState } from "react";
import Cards from "../components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import * as CONST from '../constants';
const Home = () => {
  return (
    <div className="Home">
      <FontAwesomeIcon icon={faAddressBook} size="8x" />
      <h2>Welcome to User Information</h2>
      <h3>A place to find information about all for our users</h3>
      <div className="Cards">
        <Cards
          CardText={"See info about all the existing users"}
          CardTitle={"Browse Users"}
          ButtonProp={CONST.DISPLAY}
          CardImage={<FontAwesomeIcon icon={faAddressCard} size="2x" />}
        />
        <Cards
          CardText={"Click here to add a new user"}
          CardTitle={"Add User"}
          ButtonProp={CONST.ADD}
          CardImage={<FontAwesomeIcon icon={faUserPlus} size="2x" />}
        />
      </div>
    </div>
  );
};
export default Home;
