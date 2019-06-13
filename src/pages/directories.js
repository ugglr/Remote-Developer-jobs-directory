import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Directories extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const comps = [
      {
        name: "AngelList",
        body:
          "This is the main site where startups go to look for new talent, and because of that It is also one of the best places for juniors to reach out to potential employers.Start - up culture breeds and needs people with many skill sets, ambitious character and a get things done attitude.If you are willing to do the work and show them what you've made of, there is a good chance to grab that first position on this site.",
        url: "https://angel.co",
      },
      {
        name: "Reactiflux",
        body:
          "I truly recommend to join their Discord server, because there you have the potential to send messages directly to the person at the hiring company.That gives you an edge over regular job applications where the stacks of CVs grow larger by the day.By talking directly you have the chance to show your personality and proffessionalism directly.",
        url: "http://jobs.reactiflux.com/",
      },
      {
        name: "WeWorkRemotely",
        body:
          "One of the biggest Remote jobs directory on the web, and unfortunately most positions require experience.The competition is fierce and when applying you have to make sure to stand out in an extraordinary way, becuase when a junior job position is posted it will be getting flooded with applicants.",
        url: "https://weworkremotely.com/",
      },
      {
        name: "Stackoverflow Jobs",
        body:
          "Any company who posts an advert to stackoverflow is pretty legit due to the steep fees involved in order to advertise on the platform. Fierce competition, as the site is very well known.",
        url: "https://stackoverflow.com/jobs",
      },
      {
        name: "Github Jobs",
        body: "",
        url: "https://jobs.github.com/",
      },
      {
        name: "Codepen Jobs",
        body: "",
        url: "https://codepen.io/jobs/",
      },
      {
        name: "Remotive",
        body:
          "This site is fully dedicated to remote positions in many categories, they also offer an option to join the slack community for a one time fee.",
        url: "https://remotive.io/",
      },
      {
        name: "RemoteOk",
        body:
          "As the name implied the whole site is fully dedicated to remote listings.",
        url: "https://remoteok.io/",
      },
      {
        name: "Hubstaff Talent Jobs",
        body: "",
        url: "https://talent.hubstaff.com",
      },
      {
        name: "Authentic Jobs",
        body: "",
        url: "https://authenticjobs.com/",
      },
      {
        name: "Just UX Jobs",
        body: "",
        url: "https://justuxjobs.com/",
      },
      {
        name: "Jobspresso",
        body: "",
        url: "https://jobspresso.co/",
      },
      {
        name: "Findwork.dev",
        body: "",
        url: "https://findwork.dev/junior-jobs?remote=true",
      },
      {
        name: "Remote Leads",
        body: "",
        url: "https://remoteleads.io/",
      },
      {
        name: "Outsourcely",
        body: "",
        url: "https://www.outsourcely.com/",
      },
      {
        name: "Working Nomads",
        body: "",
        url: "https://www.workingnomads.co",
      },
      {
        name: "Remote Circle",
        body: "",
        url: "https://remotecircle.com/",
      },
      {
        name: "Turingly",
        body:
          "This is not a jobs directory, but you can prove you coding skills through the site and land a job that way, even though you don't have official experience in Software Development",
        url: "https://www.turing.ly",
      },
    ]

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="List of remote junior developer jobs directories" />
        <div>
          <ul style={{ listStyle: "none" }}>
            {comps.map(comp => {
              return (
                <>
                  <li>
                    <h5>{comp.name}</h5>
                    <p>{comp.body}</p>
                    <strong>Link: </strong>
                    <a href={comp.url}>{comp.url}</a>
                  </li>
                  <hr />
                </>
              )
            })}
          </ul>
        </div>
        <hr />
      </Layout>
    )
  }
}

export default Directories

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
