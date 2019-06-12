import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Directories extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="List of remote junior developer jobs directories" />
        <div>
          <li>
            AngelList:{" "}
            <p>
              This is the main site where startups go to look for new talent,
              and because of that It is also one of the best places for juniors
              to reach out to potential employers. Start-up culture breeds and
              needs people with many skill sets, ambitious character and a get
              things done attitude. If you are willing to do the work and show
              them what you've made of, there is a good chance to grab that
              first position on this site.
            </p>{" "}
            <strong>Link: </strong>
            <a href="https://angel.co/">https://angel.co/</a>
          </li>
          <li>
            Reactiflux:{" "}
            <p>
              I truly recommend to join their Discord server, because there you
              have the potential to send messages directly to the person at the
              hiring company. That gives you an edge over regular job
              applications where the stacks of CVs grow larger by the day. By
              talking directly you have the chance to show your personality and
              proffessionalism directly.
            </p>
            <strong>Link: </strong>
            <a href="http://jobs.reactiflux.com/">
              http://jobs.reactiflux.com/
            </a>
          </li>
          <li>
            WeWorkRemotely:{" "}
            <p>
              One of the biggest Remote jobs directory on the web, and
              unfortunately most positions require experience. The competition
              is fierce and when applying you have to make sure to stand out in
              an extraordinary way, becuase when a junior job position is posted
              it will be getting flooded with applicants.
            </p>
            <strong>Link: </strong>
            <a href="https://weworkremotely.com/">
              https://weworkremotely.com/
            </a>
          </li>
          <li>
            Stackoverflow Jobs:
            <strong>Link: </strong>
            <a href="https://stackoverflow.com/jobs">
              https://stackoverflow.com/jobs
            </a>
          </li>
          <li>
            Github Jobs:
            <strong>Link: </strong>
            <a href="https://jobs.github.com/">https://jobs.github.com/</a>
          </li>
          <li>
            Codepen Jobs:
            <strong>Link: </strong>
            <a href="https://codepen.io/jobs/">https://codepen.io/jobs/</a>
          </li>
          <li>
            Remotive:
            <strong>Link: </strong>
            <a href="https://remotive.io/">https://remotive.io/</a>
          </li>
          <li>
            RemoteOK:
            <strong>Link: </strong>
            <a href="https://remoteok.io/">https://remoteok.io/</a>
          </li>
          <li>
            Hubstaff Talent Jobs:
            <strong>Link: </strong>
            <a href="https://talent.hubstaff.com">
              https://talent.hubstaff.com
            </a>
          </li>
          <li>
            Authentic Jobs:
            <strong>Link: </strong>
            <a href="https://authenticjobs.com/">https://authenticjobs.com/</a>
          </li>
          <li>
            Just UX Jobs: <strong>Link: </strong>
            <a href="https://justuxjobs.com/">https://justuxjobs.com/</a>
          </li>
          <li>
            Jobspresso:
            <strong>Link: </strong>
            <a href="https://jobspresso.co/">https://jobspresso.co/</a>
          </li>
          <li>
            Findwork.dev:
            <strong>Link: </strong>
            <a href="https://findwork.dev/junior-jobs?remote=true">
              https://findwork.dev/junior-jobs?remote=true
            </a>
          </li>
          <li>
            Remote Leads:
            <strong>Link: </strong>
            <a href="https://remoteleads.io/">https://remoteleads.io/</a>
          </li>
          <li>
            Outsourcely:
            <strong>Link: </strong>
            <a href="https://www.outsourcely.com/">
              https://www.outsourcely.com/
            </a>
          </li>
          <li>
            Working Nomads:
            <strong>Link: </strong>
            <a href="https://www.workingnomads.co">
              https://www.workingnomads.co
            </a>
          </li>
          <li>
            Remote Circle:
            <strong>Link: </strong>
            <a href="https://remotecircle.com/">https://remotecircle.com/</a>
          </li>
          <li>
            Turingly:{" "}
            <p>
              This is not a jobs directory, but you can prove you coding skills
              through the site and land a job that way, even though you don't
              have official experience in Software Development
            </p>{" "}
            <strong>Link: </strong>
            <a href="https://www.turing.ly">https://www.turing.ly</a>
          </li>
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
