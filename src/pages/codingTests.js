import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class CodingTests extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h2>Front-End Tests</h2>
        <h2>Back-End Tests</h2>
      </Layout>
    )
  }
}

export default CodingTests

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
