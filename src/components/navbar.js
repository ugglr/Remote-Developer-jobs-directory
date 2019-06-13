import React from "react"

import { Link } from "gatsby"

export default function Navbar() {
  return (
    <>
      <ul style={{ listStyle: "none", overflow: "hidden" }}>
        <li style={{ float: "left", marginRight: "1rem" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ float: "left", marginRight: "1rem" }}>
          <Link to="directories">Job Directories</Link>
        </li>
        <li style={{ float: "left", marginRight: "1rem" }}>
          <Link to="resources">Resources</Link>
        </li>
        <li style={{ float: "left", marginRight: "1rem" }}>
          <Link to="faq">How to post a Job</Link>
        </li>
      </ul>
    </>
  )
}
