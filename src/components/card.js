import React from "react"
import { Row, Col } from "react-bootstrap"

export default function card() {
  return (
    <div>
      <Row>
        <Col>
          <img
            src={props.logo}
            alt={"Make a no logo img"}
            style={{ maxWidth: "100%" }}
          />
        </Col>
      </Row>
    </div>
  )
}
