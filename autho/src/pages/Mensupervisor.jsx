import React, { useState } from "react";

function Navbar() {
  return (
    <React.Fragment>
      <div
        className="nav"
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "darkblue",
          padding: "1rem",
        }}
      >
        <img
          src="https://findlogovector.com/wp-content/uploads/2019/03/vit-bhopal-logo-vector.png"
          style={{ height: "50px" }}
          className="nav_img"
        />
        <h4 style={{ color: "white" }}>VIT BHOPAL</h4>
      </div>
      <h1 style={{ color: "black", textAlign: "center", top: "90px" }}>
        Men Supervisor
      </h1>
    </React.Fragment>
  );
}

function Main() {
  const [val, setVal] = useState(0);
  const [vacant, setVacant] = useState([60, 72, 11, 46, 58, 62]);
  const [register, setRegister] = useState(0);
  const [registered, setRegistered] = useState([3, 7, 11, 5, 9, 21]);
  const [req, setReq] = useState(0);
  const [requests, setRequests] = useState([16, 14, 9, 5, 21, 24]);

  const handleClick = (value1, value2, value3) => {
    setVal(value1);
    setRegister(value2);
    setReq(value3);
  };

  return (
    <>
      <div
        className="main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          flex: 1,
        }}
      >
        <Card
          desc={"1 bedded"}
          handleClick={() => {
            handleClick(vacant[0], registered[0], requests[0]);
          }}
        />
        <Card
          desc={"2 bedded"}
          handleClick={() => {
            handleClick(vacant[1], registered[1], requests[1]);
          }}
        />
        <Card
          desc={"3 bedded"}
          handleClick={() => {
            handleClick(vacant[2], registered[2], requests[2]);
          }}
        />
        <Card
          desc={"4 bedded"}
          handleClick={() => {
            handleClick(vacant[3], registered[3], requests[3]);
          }}
        />
        <Card
          desc={"5 bedded"}
          handleClick={() => {
            handleClick(vacant[4], registered[4], requests[4]);
          }}
        />
        <Card
          desc={"6 bedded"}
          handleClick={() => {
            handleClick(vacant[5], registered[5], requests[5]);
          }}
        />
      </div>
      <h2 style={{ lineHeight: "30px", margin: "20px", textAlign: "center" }}>
        Vacancy :{" "}
        <span style={{ border: "1px solid black", padding: "5px 20px" }}>
          {val}
        </span>
      </h2>
      <h2 style={{ lineHeight: "30px", margin: "20px", textAlign: "center" }}>
        Registered Rooms :{" "}
        <span style={{ border: "1px solid black", padding: "5px 20px" }}>
          {register}
        </span>
      </h2>
      <h2 style={{ lineHeight: "30px", margin: "20px", textAlign: "center" }}>
        Pending requests :{" "}
        <span style={{ border: "1px solid black", padding: "5px 20px" }}>
          {req}
        </span>
      </h2>
    </>
  );
}

function Card({ desc, handleClick }) {
  return (
    <div
      className="card"
      onClick={handleClick}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 30px",
        borderRadius: "10%",
        margin: "2rem",
      }}
    >
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AMale_%2528801864%2529_%25E2%2580%2593_The_Noun_Project.svg&psig=AOvVaw3dpJDolqMK4chqG1qA1pQ_&ust=1683918101864000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjsj5P67f4CFQAAAAAdAAAAABAV"
        alt="boy logo"
        style={{
          height: "150px",
          objectFit: "contain",
          backgroundColor: "white",
          backgroundSize: "cover",
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      />
      <h4>{desc}</h4>
    </div>
  );
}

function App() {
  return (
    <div
      className="app"
      style={{
        margin: "0px",
        boxSizing: "border-box",
        backgroundColor: "white",
      }}
    >
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
