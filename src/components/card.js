import React from "react"
import { Row, Col, Button } from "react-bootstrap"

//Props:
//logoImg: the path to the logo
//title: The title of the card/App
//description: Short description of the card
//url: URL to the hosted version of the app

export default function card(props) {
  return (
    <div
      style={{
        width: "100%",
        borderStyle: "solid",
        borderWidth: "0.5px",
        borderRadius: "2rem",
        padding: "0.8rem",
      }}
    >
      <strong style={{ fontSize: "2.2rem" }}>{props.title}</strong>
      <Row style={{ marginTop: "1rem" }}>
        <Col>
          <img
            src={props.logoImg}
            alt="Error"
            style={{ width: "15rem", borderRadius: "2rem" }}
          />
        </Col>
        <Col>
          <p>{props.description}</p>
          <a href={props.url}>
            <Button>Link</Button>
          </a>
        </Col>
      </Row>
    </div>
  )
}
