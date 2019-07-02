import React from "react"
import { Card, Button } from "react-bootstrap"

//Props:
//logoImg: the path to the logo
//title: The title of the card/App
//body: Short description of the card
//url: url which the button links to.
//img: add an image to the card.

export default function card(props) {
  return (
    <Card
      style={{
        width: "18rem",
        marginBottom: "1rem",
        height: "15rem",
      }}
    >
      {/* <Card.Img variant="top" src={props.img} /> */}
      <Card.Body style={{ overflow: "hidden", marginBottom: "1rem" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
      <div style={{ margin: "auto", marginBottom: "1rem" }}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" style={{ width: "10rem" }}>
            Link
          </Button>
        </a>
      </div>
    </Card>
  )
}
