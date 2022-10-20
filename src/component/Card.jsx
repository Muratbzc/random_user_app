import Container from "react-bootstrap/Container";
import emailicon from "../assets/email.svg";
import locationicon from "../assets/location.svg";
import phoneicon from "../assets/phone.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const Card = () => {
  const [user, setUser] = useState("");

  const getUsersFromApi = async () => {
    const url = "https://randomuser.me/api/";

    try {
      const res = await axios(url);
      const data = res.data.results[0];
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersFromApi();
  }, []);

  const { name, location, email, phone, picture, dob, registered } = user;
  console.log(user);

  return (
    <Container className="mt-5">
      <Container
        className="bg-info p-3 mb-5 border border-dark"
        // style={{ width: "30rem" }}
        style={{
          boxShadow:
            "rgba(12, 12, 225, 0.4) 5px 5px, rgba(12, 12, 225, 0.3) 10px 10px, rgba(12, 12, 225, 0.2) 15px 15px, rgba(12, 12, 225, 0.1) 20px 20px, rgba(12, 12, 225, 0.05) 25px 25px",
          width: "25rem",
        }}
      >
        <div className="row mb-3 align-items-center">
          <img className="col-4 rounded-circle" src={picture?.large} />
          <h4 className="col-8">
            {name?.title} {name?.first} {name?.last}
          </h4>
        </div>
        <div className="row mb-3 align-items-center">
          <img className="col-4" src={emailicon} width="50" height="50" />
          <p className="col-8">{email}</p>
        </div>
        <div className="row mb-3 align-items-center">
          <img className="col-4" src={phoneicon} width="50" height="50" />
          <p className="col-8">{phone}</p>
        </div>
        <div className="row mb-3 align-items-center">
          <img className="col-4" src={locationicon} width="50" height="50" />
          <p className="col-8">
            {location?.city}
            {location?.country}
          </p>
        </div>
        <p className="text-center">Age: {dob?.age}</p>
        <p className="text-center">
          Register Date: {new Date(registered?.date).toLocaleDateString()}
        </p>
      </Container>
      <Container className="text-center mb-5">
        <Button
          className="text-center"
          variant="warning"
          onClick={getUsersFromApi}
        >
          Random User
        </Button>
      </Container>
    </Container>
  );
};

export default Card;
