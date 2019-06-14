import React from "react"

import { Link } from "gatsby"

export default function Navbar() {
  return (
    <>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/">Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="directories">Job Directories</Link>
        </li>
        <li style={liStyle}>
          <Link to="resources">Resources</Link>
        </li>
        <li style={liStyle}>
          <Link to="codingTests">Coding Tests</Link>
        </li>
        <li style={liStyle}>
          <Link to="faq">How to post a Job</Link>
        </li>
      </ul>
    </>
  )
}

//NAVBAR Styles

const liStyle = {
  float: "left",
  marginRight: "1rem",
}

const ulStyle = {
  listStyle: "none",
  overflow: "hidden",
}
