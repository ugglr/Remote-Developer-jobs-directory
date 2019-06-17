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
      {
        name: "Elastic",
        body: "Open source search & analytics.",
        url: "https://www.elastic.co/",
      },
      {
        name: "Envato",
        body:
          "Maker of ThemeForest and other online marketplaces. MySQL, Ruby, Rails, Javascript. Distributed team with HQ in Melbourne, Australia.",
        url: "https://envato.com/careers",
      },
      {
        name: "Etsy",
        body:
          "Marketplace for artists. MySQL, Memcache, PHP. Offices in Dublin, Paris, San Francisco, New York, London and Melbourne.",
        url: "https://www.etsy.com/careers",
      },
      {
        name: "Eyeo",
        body: "Maker of AdBlock Plus. Main office in Cologne, Germany.",
        url: "https://eyeo.com/en/jobs/",
      },
      {
        name: "Findify",
        body:
          "E-commerce search powered by machine learning and big data. Team distributed across Europe.",
        url: "https://findify.io/",
      },
      {
        name: "Fog Creek",
        body:
          "NY-based software company. Makers of bug-tracking and source control tools. Workday must overlap New York afternoons (1700 - 2200 GMT).",
        url: "http://www.fogcreek.com/careers/",
      },
      {
        name: "General Assembly",
        body:
          "Physical and on-line education for technology, business, and design.",
        url: "https://generalassemb.ly/careers",
      },
      {
        name: "Ghost",
        body: "Publishing platform.",
        url: "https://ghost.org/about/#careers",
      },
      {
        name: "Gigster",
        body:
          "vetted network of top 5% freelancers worldwide. PM, Dev, Sales positions available.",
        url: "https://gigster.com/",
      },
      {
        name: "Gitbook",
        body: "Publishing toolchain based on git. Javascript, node.js, Go.",
        url: "http://jobs.gitbook.com/",
      },
      {
        name: "GitHub",
        body: "",
        url: "https://github.com/about/jobs",
      },
      {
        name: "GitLab",
        body: "Competitor to GitHub.",
        url: "https://about.gitlab.com/jobs/",
      },
      {
        name: "GlueNetworks",
        body: "Network automation company.",
        url: "http://gluenetworks.com/",
      },
      {
        name: "Gradle",
        body:
          "Open Source Build Tool ; Enterprise SaaS and on-premise. Fully remote. Java, Groovy, Kotlin.",
        url: "https://gradle.com/careers",
      },
      {
        name: "GrooveHQ",
        body: "Help desk software.",
        url: "https://www.groovehq.com/about",
      },
      {
        name: "Hanzo",
        body: "Web archiving company. Fully Remote. Python, AWS.",
        url: "https://www.hanzo.co/about-us/careers-uk",
      },
      {
        name: "Harvest",
        body: "Time tracking software. ",
        url: "https://www.getharvest.com/careers",
      },
      {
        name: "HashiCorp",
        body:
          "Open source tools for automating the modern data center. Go, Ruby, Rails, Ember, JavaScript.",
        url: "https://www.hashicorp.com/jobs.html",
      },
      {
        name: "HE:labs",
        body: "",
        url: "https://helabs.com/us/",
      },
      {
        name: "Healthfinch",
        body:
          "Making Healthcare systems more usable. HQ in Madison, WI, USA. Ruby, Javascript.",
        url: "http://www.healthfinch.com/careers/",
      },
      {
        name: "Heap",
        body: "Web & Mobile Analytics.",
        url: "https://heapanalytics.com/careers/jobs",
      },
      {
        name: "Help Scout",
        body:
          "A help desk for teams that insist on a delightful customer experience.",
        url: "https://www.helpscout.net/careers/",
      },
      {
        name: "Heroku",
        body:
          "PaaS Cloud, makes devs' experience awesome, Ruby, Erlang, Javascript, Golang, Python.",
        url: "https://www.heroku.com/careers",
      },
      {
        name: "Honeybadger",
        body: "Ruby. 100% remote.",
        url: "https://www.honeybadger.io/",
      },
      {
        name: "Hotjar",
        body: "Analytics & Feedback tool.",
        url: "https://careers.hotjar.com/",
      },
      {
        name: "Hubstaff",
        body: "Time tracking solution with multiple integrations.",
        url: "https://hubstaff.com/jobs",
      },
      {
        name: "Igalia",
        body: "Open source consultancy. HQ in Spain.",
        url: "https://www.igalia.com/jobs/",
      },
      {
        name: "Incsub",
        body: "Remote team that builds Wordpress projects.",
        url: "http://incsub.com/careers/",
      },
      {
        name: "Inpsyde GmbH",
        body: "WordPress Agency in Germany.",
        url: "https://inpsyde.com/",
      },
      {
        name: "Institute for Nonprofit News",
        body: "Nonprofit news organization.",
        url: "https://inn.org/about/jobs/",
      },
      {
        name: "Instructure",
        body: "We make software that makes people smarter.",
        url: "https://www.instructure.com/careers/",
      },
      {
        name: "Intellum",
        body:
          "We build employee collaboration, performance and learning tools. Ruby, iOS, Android, AWS, GCS.",
        url: "http://intellum.com/",
      },
      {
        name: "InVision",
        body: "prototyping, collaboration & workflow platform.",
        url: "https://www.invisionapp.com/company#jobs",
      },
      {
        name: "Isos Technology",
        body:
          "premier Atlassian Platinum & Enterprise Solution Partner, helping organizations solve complex development and business problems with the Atlassian tools.",
        url: "https://careers.isostech.com/",
      },
      {
        name: "Jackson River",
        body: "Digital-first technology and strategy for nonprofits.",
        url: "https://www.jacksonriver.com/about/jobs",
      },
      {
        name: "Judge.me",
        body:
          "A review platform for ecommerces. Our company is fully remote across 4 continents.",
        url: "http://judge.me/",
      },
      {
        name: "Keepsafe",
        body:
          "Mobile-first privacy products, making privacy easy for the world to opt into.",
        url: "https://www.getkeepsafe.com/",
      },
      {
        name: "Khan Academy",
        body:
          "EdTech. Non-profit focusing on K-12 STEM. Less, React, Flux, Backbone, jQuery, Python, Google App Engine, Swift, and Objective-C.",
        url: "https://www.khanacademy.org/careers",
      },
      {
        name: "Knack",
        body: "The easy online database.",
        url: "https://www.knack.com/jobs",
      },
      {
        name: "LaterPay",
        body:
          "The (micro)payment enabler. Munich, Germany. Python, JavaScript, AWS.",
        url: "https://www.laterpay.net/",
      },
      {
        name: "LaunchPotato",
        body: "Startup studio based in Delray Beach, Florida.",
        url: "http://launchpotato.com/careers",
      },
      {
        name: "Librato",
        body: "Cloud Monitoring.",
        url: "http://solarwinds.jobs/solarwinds-cloud/",
      },
      {
        name: "Linaro",
        body: "OpenSource Engineering on ARM.",
        url: "https://www.linaro.org/careers/",
      },
      {
        name: "Lincoln Loop",
        body: "WebDev shop.",
        url: "https://lincolnloop.com/",
      },
      {
        name: "Litmus",
        body:
          "Optimization tools for email professionals. Offices in Boston and London, but nearly 50% of the team works remotely.",
        url: "https://litmus.com/careers",
      },
      {
        name: "LivingSocial",
        body:
          "Company-wide support for teams of experienced, remote developers. Lots of autonomy.",
        url: "https://jobs.groupon.com/",
      },
      {
        name: "Lullabot",
        body: "Strategy, design and development using Drupal.",
        url: "https://www.lullabot.com/jobs",
      },
      {
        name: "madewithlove",
        body:
          "We help companies build digital products and bring new juice to teams that seem to jam.",
        url: "https://madewithlove.be/jobs",
      },
      {
        name: "Maintainer Mountaineer",
        body: "Open source community management as a service.",
        url: "https://maintainer.io/",
      },
      {
        name: "MariaDB",
        body: "Open source database.",
        url: "https://mariadb.com/about-us/careers",
      },
      {
        name: "MarsBased",
        body:
          "MarsBased is a development consultancy from Barcelona offering end‑to‑end web & mobile apps based on Ruby on Rails, Angular and other Javascript frameworks.",
        url: "https://marsbased.com/",
      },
      {
        name: "Mapbox",
        body: "Map integration tools for various platforms.",
        url: "https://www.mapbox.com/jobs/",
      },
      {
        name: "MCFTech",
        body: "Applications to help you run your business succesfully.",
        url: "https://www.mcftech.com/careers/",
      },
      {
        name: "MeetEdgar",
        body: "Automated social sharing. US remote.",
        url: "https://meetedgar.com/careers/",
      },
      {
        name: "Mobile Jazz",
        body:
          "We are a dedicated team of highly-skilled engineers, designers and marketing experts on a mission to build a more beautiful digital world. We are a remote friendly company with headquarters in Barcelona.",
        url: "https://mobilejazz.com/",
      },
      {
        name: "Modern Tribe",
        body:
          "A digital agency with a modern twist. All freelancers. All experts.",
        url: "http://tri.be/about/join-our-team/",
      },
      {
        name: "Modus Create",
        body:
          "Modus is a digital design-build agency driven by world-class talent. PHP, Javascript.",
        url: "https://moduscreate.com/",
      },
      {
        name: "Mosalingua",
        body: "Learn words, enjoy the world.",
        url: "https://www.mosalingua.com/en/jobs/",
      },
      {
        name: "MVP Space",
        body:
          "Test a business idea with your target audience or show its potential to your investors.",
        url: "http://mvp-space.com/",
      },
      {
        name: "Mozilla",
        body: "Firefox has a 'Remote' option under it's location searchbar.",
        url: "https://careers.mozilla.org/listings/",
      },
      {
        name: "NearForm",
        body:
          "NearForm evolves enterprises by building high-performance, open software. Our global team uses modern processes and tools to help clients innovate at speed.",
        url: "https://www.nearform.com/careers/",
      },
      {
        name: "Nectafy",
        body: "nbound marketing and content creation.",
        url: "http://nectafy.com/jobs/",
      },
      {
        name: "Netsparker",
        body: "Web Application Security Scanner.",
        url: "https://www.netsparker.com/jobs/",
      },
      {
        name: "Next Big Sound",
        body: "Analytics and Insights for the Music Industry.",
        url: "https://www.nextbigsound.com/about",
      },
      {
        name: "NinjaCat",
        body:
          "Reporting, Monitoring & Call Tracking Platform for Leading Digital Agencies.",
        url: "https://www.ninjacat.io/jobs",
      },
      {
        name: "Niteo",
        body:
          "A decade old SaaS studio full of bright ideas, building smart solutions to empower small businesses online.",
        url: "https://niteo.co/careers",
      },
      {
        name: "NodeSource",
        body:
          "NodeSource is dedicated to creating a sustainable ecosystem for Node.js.",
        url: "https://nodesource.com/about",
      },
      {
        name: "ofri",
        body:
          "A swiss online marketplace that connects homeowners with quality home improvement professionals.",
        url: "https://www.ofri.ch/job_openings",
      },
      {
        name: "Olark",
        body: "Chat support funnel.",
        url: "https://www.olark.com/jobs",
      },
      {
        name: "onTheGo Systems",
        body: "WordPress Developer, Supporter and Marketing Jobs.",
        url: "https://www.onthegosystems.com/jobs/",
      },
      {
        name: "Onyo",
        body: "Transforming the eating out experience in pure pleasure.",
        url: "http://www.onyo.com/",
      },
      {
        name: "OpenCraft",
        body: "Open edX development (Free Software MOOC project).",
        url: "http://opencraft.com/",
      },
      {
        name: "Owsy",
        body:
          "International studio focused on creating products for financial service firms.",
        url: "http://owsy.com/careers/",
      },
      {
        name: "Parknav",
        body: "Intelligent parking using AI.",
        url: "https://parknav.com/",
      },
      {
        name: "Parsely",
        body: "Analytics solutions.",
        url: "http://www.parsely.com/jobs/",
      },
      {
        name: "Particular Software (NServiceBus)",
        body: "Enterprise Service Bus, Messaging, C#, Open Source.",
        url: "https://particular.net/careers",
      },
      {
        name: "Patients Know Best",
        body:
          "Empowering patients to manage their care, enabling professionals to share information while improving efficiencies for payers.",
        url: "https://patients.workable.com/",
      },
      {
        name: "Paylocity",
        body: "HR and payroll solutions.",
        url: "http://www.paylocity.com/careers/",
      },
      {
        name: "Pilot",
        body:
          "Pilot is a software platform that removes all the pain from contract work. We find work, negotiate contracts, send invoices and chase payments for hundreds of forward-looking engineers and designers around the world.",
        url: "https://pilot.co/",
      },
      {
        name: "Pleo",
        body:
          "Pleo is a company payment card solution that automates expense reports and simplifies company spending.",
        url: "https://careers.pleo.io/",
      },
      {
        name: "Precision Nutrition",
        body: "Online Nutrition Coaching and Certification.",
        url: "http://www.precisionnutrition.com/",
      },
      {
        name: "PreviousNext",
        body: "Australian based Drupal agency.",
        url: "https://www.previousnext.com.au/",
      },
      {
        name: "Prezly",
        body: "SaaS PR platform. PHP, React, JS, Postgres. 100% remote.",
        url: "https://www.prezly.com/",
      },
      {
        name: "RainforestQA",
        body: " On demand QA as a service.",
        url: "https://www.rainforestqa.com/jobs/",
      },
      {
        name: "Reaction Commerce",
        body:
          "Fastest-growing open source ecommerce platform. Node.js, MongoDB, Kubernetes, Docker.",
        url: "https://reactioncommerce.com/careers/",
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
