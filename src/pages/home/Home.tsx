import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      <Container
        style={{ maxWidth: "1320px", margin: "0 auto", marginTop: "50px" }}
        as={"div"}
      >
        <Button variant="dark" onClick={() => navigate("/products")}>
          Products
        </Button>
      </Container>
    </div>
  );
};

export default Home;
