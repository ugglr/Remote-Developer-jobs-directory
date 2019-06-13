import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Faq extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="" />
        <div>
          <h2>How to post a job?</h2>
          <p>
            All the job posts are presented on the first page, and the content
            are written in markdown files. To post a job is 100% free via
            open-source magic.
          </p>
          <div
            style={{
              borderStyle: "solid",
              borderWidth: "1px",
              overflow: "hidden",
              padding: "2rem",
              marginTop: "2rem",
              marginBottom: "3rem",
            }}
          >
            <ol>
              <strong>Steps:</strong>
              <li>
                Create a new branch of the repo, add you job listing under
                content/blog as a new folder and create a new index.md file with
                the information.
              </li>
              <li>
                After you are done create a pull-request to merge the content
                into master.
              </li>
              <li>
                When the pull-request is accepted and merged into master it will
                trigger a re-build of the site.
              </li>
            </ol>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Faq

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
