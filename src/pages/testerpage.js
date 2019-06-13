import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import Card from "../components/card"

import testLogo from "../images/game.png"

class Testerpage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Card
          title="Test Title"
          logoImg={testLogo}
          URL={"https://www.github.com"}
          description={
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
          }
        />
      </Layout>
    )
  }
}

export default Testerpage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
