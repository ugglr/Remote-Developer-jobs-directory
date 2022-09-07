import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Resources extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const youtubeChannels = [
      {
        name: "Traversy Media",
        body: "",
        url: "https://www.youtube.com/user/TechGuyWeb",
      },
      {
        name: "Coding Addict",
        body: "",
        url: "https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA",
      },
      {
        name: "Dev Ed",
        body: "",
        url: "https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q",
      },
      {
        name: "FreeCodeCamp Official Channel",
        body: "",
        url: "https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ",
      },
      {
        name: "Eddie Jaoude",
        body: "",
        url: "https://www.youtube.com/user/eddiejaoude",
      },
      {
        name: "Fireship",
        body: "",
        url: "https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA",
      },
      {
        name: "Brice Ayres",
        body: "",
        url: "https://www.youtube.com/channel/UC9nBRXEi-gthsZf8BBhp_Jw",
      },
      {
        name: "Joshua Fluke / Grindreel",
        body: "",
        url: "https://www.youtube.com/user/Tychos1",
      },
      {
        name: "Chris Hawkes",
        body: "",
        url: "https://www.youtube.com/user/noobtoprofessional",
      },
      {
        name: "Andrew Cunliffe",
        body: "",
        url: "https://www.youtube.com/channel/UC4hff1Dpvf4zMsQwLmt0LIQ",
      },
      {
        name: "LevelUpTuts",
        body: "",
        url: "https://www.youtube.com/user/LevelUpTuts",
      },
      {
        name: "TheCodePro",
        body: "",
        url: "https://www.youtube.com/channel/UC8QVCQsp1YCgTI--nACeZsw",
      },
      {
        name: "Hamza Mirza",
        body: "",
        url: "https://www.youtube.com/channel/UCBV-JvG9Ubkj7AU6Cxls1Tw",
      },
      {
        name: "Rem Zolotykh",
        body: "",
        url: "https://www.youtube.com/user/MrRemchi",
      },
      {
        name: "Academind",
        body: "",
        url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w",
      },
      {
        name: "Meth Meth Method",
        body: "",
        url: "https://www.youtube.com/channel/UC8A0M0eDttdB11MHxX58vXQ",
      },
      {
        name: "Programming with Mosh",
        body: "",
        url: "https://www.youtube.com/user/programmingwithmosh",
      },
      {
        name: "Ben Awad",
        body: "",
        url: "https://www.youtube.com/user/99baddawg",
      },
      {
        name: "Just Django",
        body: "",
        url: "https://www.youtube.com/channel/UCRM1gWNTDx0SHIqUJygD-kQ",
      },
      {
        name: "Code Artistry",
        body: "",
        url: "https://www.youtube.com/channel/UC-kHm7pG884IYQiYwqJWv9A",
      },
      {
        name: "interviewing.io",
        body: "",
        url: "https://www.youtube.com/channel/UCNc-Wa_ZNBAGzFkYbAHw9eg",
      },
      {
        name: "Awesome Tuts",
        body: "",
        url: "https://www.youtube.com/channel/UC5c-DuzPdH9iaWYdI0v0uzw",
      },
      {
        name: "80/20 Coding",
        body: "",
        url: "https://www.youtube.com/channel/UCobZg0ym72ZZPqOQNB_qJnw",
      },
      {
        name: "Coding Entrepreneurs",
        body: "",
        url: "https://www.youtube.com/user/CodingEntrepreneurs",
      },
      {
        name: "Andy Sterkowitz",
        body: "",
        url: "https://www.youtube.com/channel/UCZ9qFEC82qM6Pk-54Q4TVWA",
      },
      {
        name: "Code Realm",
        body: "",
        url: "https://www.youtube.com/channel/UCUDLFXXKG6zSA1d746rbzLQ",
      },
      {
        name: "Rayn Studios",
        body: "",
        url: "https://www.youtube.com/channel/UCUmQhjjF9bsIaVDJUHSIIKw",
      },
      {
        name: "Daft Creation",
        body: "",
        url: "https://www.youtube.com/channel/UCDrfHGsm6bJI7Sli7vlcteA",
      },
      {
        name: "TheCodePro",
        body: "",
        url: "https://www.youtube.com/channel/UC8QVCQsp1YCgTI--nACeZsw",
      },
      {
        name: "The Coding Train",
        body: "",
        url: "https://www.youtube.com/user/shiffman",
      },
      {
        name: "Coding Tech",
        body: "",
        url: "https://www.youtube.com/channel/UCtxCXg-UvSnTKPOzLH4wJaQ",
      },
      {
        name: "Sourav Johar",
        body: "",
        url: "https://www.youtube.com/user/RSOURAV100",
      },
    ]

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="List of great resources on how to learn to code" />
        <h2>Books</h2>
        <h5>Javascript</h5>
        <h5>Python</h5>
        <h5>Ruby</h5>
        <h5>Java</h5>
        <h5>Scala</h5>
        <h5>Golang</h5>
        <h2>Youtube Channels</h2>
        <ul style={{ listStyle: "none" }}>
          {youtubeChannels.map(channel => {
            return (
              <>
                <li>
                  <h5>{channel.name}</h5>
                  <p>{channel.body}</p>
                  <strong>Link: </strong>
                  <a href={channel.url}>{channel.url}</a>
                </li>
                <hr />
              </>
            )
          })}
        </ul>
      </Layout>
    )
  }
}

export default Resources

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
