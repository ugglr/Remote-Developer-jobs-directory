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
        body:
          "Good amount of listings, including positions for juniors, good use of filters.",
        url: "https://www.workingnomads.co",
      },
      {
        name: "Remote Circle",
        body:
          "Filter remote openings based on your time zone. They have a fair amount of jobs there and is worth taking a look at.",
        url: "https://remotecircle.com/",
      },
      {
        name: "Turingly",
        body:
          "This is not a jobs directory, but you can prove you coding skills through the site and land a job that way, even though you don't have official experience in Software Development",
        url: "https://www.turing.ly",
      },
    ]

    const freelance = [
      {
        name: "UpWork",
        body:
          "Might be the most popular freelancing site in the world and have been the go to place for a long time for developers looking to kickstart their freelancing career. However, recently there are reportings that it's increasingly difficult to get accepted by UpWork to start making proposals to clients.",
        url: "https://www.upwork.com",
      },
      {
        name: "Freelancer",
        body:
          "According to the site, they are the largest freelancing site in the World. ",
        url: "https://www.freelancer.com",
      },
      {
        name: "Guru",
        body: "",
        url: "https://www.guru.com",
      },
      {
        name: "Fiverr",
        body: "",
        url: "https://www.fiverr.com",
      },
      {
        name: "Workana",
        body: "",
        url: "https://www.workana.com",
      },
    ]

    const slackChannels = [
      {
        name: "Remotive",
        body:
          "Payed community, but active and friendly, the founder is always out looking for new companies and quite a bit of recruiting people are sitting in the channels.",
        url: "https://remotive.io/community",
      },
      {
        name: "CodingCoach",
        body:
          "Not so much a community for job-hunting but a great place to find help from more experienced software developers.",
        url:
          "https://join.slack.com/t/coding-coach/shared_invite/enQtNDYxNTcwMjk4MDcwLThiZjY1MTM2YTU1YzM2MGI1N2Y1NDI3ZGM1MGRhNjdiZjU0MzE1YjMxZjdlZmVlNDdhNmFhN2RhNGIxZmE1YTI",
      },
      {
        name: "DevChat",
        body:
          "Join the jobs channel and keep a look-out. Also a place where it's possible to ask for help when stuck.",
        url: "https://devchat.devolio.net/",
      },
      {
        name: "Scotch.io",
        body:
          "Join the jobs channel and keep a look-out. Also a place where it's possible to ask for help when stuck.",
        url: "https://scotch-slack.herokuapp.com/",
      },
    ]

    const remoteCompanies = [
      {
        name: "Chili Piper",
        body: "100% fully remote team, with good benefits. ",
        url: "https://www.chilipiper.com/careers/",
      },
      {
        name: "Savvy io",
        body: "Crypto currency wallet solutions: ",
        url: "https://savvy.io",
      },
      {
        name: "Valohai",
        body: "Machine Learning version control in the cloud",
        url: "https://valohai.com/careers/",
      },
      {
        name: "10up",
        body:
          "10up makes the web better by finely crafting websites & tools for content creators.",
        url: "https://10up.com/careers/",
      },
      {
        name: "AgentFire",
        body: "Hyper local real estate websites powered by Wordpress.",
        url: "https://agentfire.com/meet-our-team/",
      },
      {
        name: "Aha!",
        body: "Aha! is roadmapping software for PMs who want their mojo back.",
        url: "https://www.aha.io/company/careers/current-openings",
      },
      {
        name: "AirTreks",
        body:
          "Multi-stop international flight planner with a distributed team.",
        url: "https://www.airtreks.com/about/",
      },
      {
        name: "Alley",
        body:
          "Digital Agency. We are strategists, researchers, designers, and developers who craft custom digital experiences for publishers, nonprofit institutions, museums, and brands.",
        url: "https://alley.co/jobs/",
      },
      {
        name: "ALICE",
        body:
          "Remote-friendly start-up company. We’re creating the global operations platform for the hospitality industry. ALICE empowers the world's best hotels to deliver a remarkable guest experience. ",
        url: "https://www.aliceplatform.com/careers/",
      },
      {
        name: "Ameego",
        body: "Restaurant scheduling software.",
        url: "http://ameego.ca/",
      },
      {
        name: "Arkency",
        body: "Rails and React.js experts, fully remote/async. ",
        url: "http://blog.arkency.com/join-our-team/",
      },
      {
        name: "Articulate",
        body:
          "EdTech. Makes software that helps teachers make e-learning courses. Ruby, Node, C#, and .NET for Windows app. ",
        url: "https://articulate.com/company/careers.php",
      },
      {
        name: "AT&T",
        body: "Nearly 20% of the eligible workforce works remotely.",
        url: "https://att.jobs/",
      },
      {
        name: "Auth0",
        body: "Zero-friction authentication and authorization for developers. ",
        url: "https://auth0.com/jobs",
      },
      {
        name: "Authentic F & F",
        body:
          "Independent design and technology studio based in Denver and Minnesota.",
        url: "http://authenticff.com/",
      },
      {
        name: "Aurity",
        body: "100% remote company, specializing in React and React Native.",
        url: "https://www.aurity.co/",
      },
      {
        name: "Automattic",
        body: "Makers of WordPress.com and Gravatar.",
        url: "https://automattic.com/work-with-us/",
      },
      {
        name: "Avallain",
        body:
          "Education Technology and Digital Publishing. We have the tools and processes to achieve the positive impact on human potential that technology enhanced education can provide.",
        url: "https://www.avallain.com/",
      },
      {
        name: "AvantStay",
        body:
          "Short-term rental company based in Los Angeles, with remote dev team.",
        url: "https://avantstay.com/careers",
      },
      {
        name: "Axelerant",
        body: "",
        url: "https://www.axelerant.com/careers",
      },
      {
        name: "Baremetrics",
        body:
          "Analytics and insights for Stripe, Braintree, Recurly and Chargify.",
        url: "https://baremetrics.com/about",
      },
      {
        name: "BaseCamp",
        body: "Project management software.",
        url: "http://basecamp.com/about/team",
      },
      {
        name: "Baselayer",
        body: "Data center and infrastructure management software.",
        url: "https://www.baselayer.com/company/careers/",
      },
      {
        name: "Basho",
        body:
          "Creators of Riak, an open source platform and k/v database. We code in Erlang and hang out on clouds. Everyone works remote and gets together a few times a year at HQ in Seattle.",
        url: "http://basho.com/careers/",
      },
      {
        name: "BeBanjo",
        body:
          "Software as a service for managing video on-demand. Ruby / Rails, Elasticsearch, Sidekiq.",
        url: "http://bebanjo.com/careers/",
      },
      {
        name: "Bluespark Labs",
        body:
          "WebDev Consulting and makers of Roomify. Remote team with HQs in Raleigh, NC and Italy. Drupal.",
        url: "http://www.bluespark.com/work-at-bluespark",
      },
      {
        name: "BookingSync",
        body:
          "Vacation Rental Software for professionals. Fully distributed team, we work remotely and try to make a company retreat each year. Proud Ember.js official sponsor, Ruby / Rails.",
        url: "https://www.bookingsync.com/en/jobs",
      },
      {
        name: "Brave",
        body:
          "Web browser with built-in ad blocker and crypto-token micro-payments.",
        url: "https://brave.com/",
      },
      {
        name: "Buffer",
        body:
          "Tools to help manage social media. PHP, CodeIgniter, MongoDB, Memcache, Backbone.js, React.js, Grunt.js, LESS, and Python.",
        url: "https://buffer.com/journey/",
      },
      {
        name: "Bugfender",
        body:
          "Bugfender is a remote logger for multiple platforms including iOS and Android. It stores logs created by your application and sends them to our server, creating a remote console where you can see logs in real time. Remote company based in Barcelona.",
        url: "https://bugfender.com/",
      },
      {
        name: "ButterCloud",
        body:
          "A small team of web & app developers. We help startups & small to medium sized businesses build, maintain, and grow their products.",
        url: "http://www.buttercloud.com/",
      },
      {
        name: "Cadasta",
        body:
          "Secure platform for mapping global land & resource rights. 100% remote team; Python, Django, JavaScript, PostgreSQL.",
        url: "http://cadasta.org/about-us/careers/",
      },
      {
        name: "Canonical",
        body: "The makers of the Linus distribution Ubuntu.",
        url: "https://www.canonical.com/careers/all-vacancies",
      },
      {
        name: "Catalyze",
        body:
          "HIPAA-compliant cloud computing for healthcare. HQ in Madison, WI. Docker, Go, Python.",
        url: "https://catalyze.io/jobs",
      },
      {
        name: "Chef",
        body:
          "We are all about IT automation for speed and awesomeness. Ruby, JavaScript & shell scripting. HQ in Seattle but we have employees all around US.",
        url: "https://www.chef.io/careers/",
      },
      {
        name: "Ciao Bambino",
        body: "Family destinations and hotel reviews.",
        url: "http://ciaobambino.com/",
      },
      {
        name: "CircleCI",
        body: "Provides continuous integration tools and services.",
        url: "https://circleci.com/jobs#engineer",
      },
      {
        name: "Circonus",
        body:
          "SaaS and on-prem monitoring, analytics, alerting, and more. C, Go, Java, Perl. HQ in Fulton MD, most employees are remote.",
        url: "https://www.circonus.com/careers",
      },
      {
        name: "Clevertech",
        body: "We build incredible, game changing technology. ",
        url: "https://clevertech.biz/careers",
      },
      {
        name: "Close.io",
        body: "Inside sales CRM for startups and SMBs.",
        url: "http://close.io/",
      },
      {
        name: "Codeship",
        body: "SaaS Continuous Delivery.",
        url: "https://codeship.com/jobs",
      },
      {
        name: "Collabora",
        body: "Open source software-based consulting.",
        url: "https://www.collabora.com/careers.html",
      },
      {
        name: "Collage",
        body:
          "We provide the easiest and most versatile tools to help you turn your photos into memories. 100% remote team.",
        url: "http://jobs.collage.com/",
      },
      {
        name: "Compose",
        body:
          "Managing databases as a service. Distributed team with offices in San Meteo, CA and Birmingham, AL. ",
        url: "https://www.compose.io/jobs/",
      },
      {
        name: "ConsenSys",
        body:
          "Blockchain software technology company with offices all around the world, and independent employees in even more locations.",
        url: "https://consensys.net/careers/",
      },
      {
        name: "Continu",
        body: "Continuous learning software for modern teams.",
        url: "http://www.continu.co/careers/",
      },
      {
        name: "Countly",
        body:
          "Open source, enterprise mobile / web analytics and marketing platform.",
        url: "https://count.ly/",
      },
      {
        name: "CRO Metrics",
        body: "Data-driven expirementation and growth programs.",
        url: "http://crometrics.com/jobs/",
      },
      {
        name: "Crossover",
        body: "Project-based Java, .Net and DevOps positions.",
        url: "https://app.crossover.com/x/marketplace/available-jobs",
      },
      {
        name: "Datadog",
        body:
          "Easy to use and scalable monitoring systems for modern and dynamic infrastructure. Distributed team with offices in New York, Boston and Paris. Engineers based all around the world.",
        url: "https://www.datadoghq.com/careers/",
      },
      {
        name: "DataStax",
        body: "Consulting based on Apache Cassandra.",
        url: "http://www.datastax.com/company/careers",
      },
      {
        name: "Deeson",
        body:
          "UK-based with European team. Digital agency specialising in Drupal, Symfony and Laravel.",
        url: "https://www.deeson.co.uk/careers",
      },
      {
        name: "Demio",
        body: "Webinar platform that just works.",
        url: "https://demio.com/inside/",
      },
      {
        name: "digitalminds.io",
        body:
          "Freelance platform, open for Developers, IT-consultants and Digital Experts.",
        url: "http://digitalminds.io/",
      },
      {
        name: "DigitalOcean",
        body: "Simple Cloud Hosting, Built for Developers.",
        url: "https://www.digitalocean.com/careers/",
      },
      {
        name: "Discourse",
        body: "Civilized discussion for your community.",
        url: "https://www.discourse.org/team",
      },
      {
        name: "DNSimple",
        body:
          "Small 100% remote and globally distributed team working to make domain management an afterthought.",
        url: "https://dnsimple.com/",
      },
      {
        name: "Doist",
        body: "Redefining productivity since 2007, 100% Remotely.",
        url: "https://doist.com/jobs/",
      },
      {
        name: "Dotsub",
        body:
          "Browser-based platform for subtitling & translating online videos. Java / Spring, JavaScript / React.js.",
        url: "https://dotsub.com/jobs",
      },
      {
        name: "Doximity",
        body:
          "Largest online medical network of US physicians. Ruby, Rails, Go, JavaScript, MySQL.",
        url: "https://www.doximity.com/about/jobs",
      },
      {
        name: "Drupal Association",
        body: "Non-profit supporting the Drupal project. ",
        url: "https://assoc.drupal.org/jobs",
      },
      {
        name: "DuckDuckGo",
        body: "Search engine.",
        url: "https://duck.co/help/company/hiring",
      },
      {
        name: "EasyCommunicationTechnology",
        body:
          ".NET development using C#, Angular, Azure. Remote-first company.",
        url: "https://www.easycomtec.com/homeoffice/developer",
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

        <h2>Freelance Platforms</h2>

        <ul style={{ listStyle: "none" }}>
          {freelance.map(site => {
            return (
              <>
                <li>
                  <h5>{site.name}</h5>
                  <p>{site.body}</p>
                  <strong>Link: </strong>
                  <a href={site.url}>{site.url}</a>
                </li>
                <hr />
              </>
            )
          })}
        </ul>

        <hr />

        <h2>Slack Communities</h2>

        <ul style={{ listStyle: "none" }}>
          {slackChannels.map(channel => {
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

        <h2>Companies with Remote DNA</h2>
        <ul style={{ listStyle: "none" }}>
          {remoteCompanies.map(company => {
            return (
              <>
                <li>
                  <h5>{company.name}</h5>
                  <p>{company.body}</p>
                  <strong>Link: </strong>
                  <a href={company.url}>{company.url}</a>
                </li>
                <hr />
              </>
            )
          })}
        </ul>

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
