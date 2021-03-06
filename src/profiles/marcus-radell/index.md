---
tags: profile
name: "Marcus Rådell"
dream: "Build healthy tech teams, mob program, and program in Rust."
phone: "+46725223325"
email: "marcus@radell.net"
presentation: "https://player.vimeo.com/video/613787819?h=10e4fcd6ed"

favorites:
  - RUST
  - TDD
  - EVENT_SOURCING
  - COACHING
  - TYPESCRIPT

gigs:
  - title: "Monadium.org"
    start: "2021-07"
    duration: "ONGOING"
    teamId: "b1f78784-f3e0-487f-856b-64226831d2e7"
    description: "I founded a platform for programmers and tech teams to collaborate and improve."

    tags:
      - GCP
      - KUBERNETES
      - RUST
      - JAVASCRIPT
      - ELEVENTY
      - GITHUB_ACTIONS
      - CI_CD
      - GCP
      - POSTGRES
      - MENTORING
      - EVENT_SOURCING

    highlights:
      - "Setup a Kubernetes cluster in GCP."
      - "Build an authentication & authorization setup in Rust."
      - "Use an event sourced database setup via Postgres and Rust’s sqlx."
      - "Write highly modular code with reusable services and business logic that is simple to extract out to their own services."
      - "Conduct user research by interviewing companies and programmers on their recruitment needs."
      - "Mentoring junior developers on how to build a great portfolio to showcase their skills by using a project board, writing tests, and documenting properly."

  - title: "GetGeek"
    start: "2021-07"
    duration: 2
    description: "Acting as the leading developer I helped clean up and structure the code and infrastructure."

    tags:
      - JAVASCRIPT
      - TYPESCRIPT
      - FIREBASE_FUNCTIONS
      - FIRESTORE
      - NODEJS
      - ZOD
      - TDD
      - REACT_NATIVE
      - GITHUB_ACTIONS
      - GCP
      - POSTGRES
      - CI_CD

    highlights:
      - "Upgrade Firebase functions from node v10 to v14 and safely upgrade packages by reading through changelogs and updating code as needed."
      - "Moving frontend and backend to TypeScript. Implement helper functions that enforce request payload validation via Zod."
      - "Write unit tests for new code. Frontend tests were done via state machines and reducers, backend separated out logic and mocked the database layer."
      - "Document the projects to make it simpler for new devs to be onboarded."
      - " Implement a simple per-user feature flag setup to enable continuous delivery to the production environment."
      - "Implement features in the React Native app as well as in the backend."
      - "Support technicians with urgent bugs, and collaborate with other functions in the company to capture their needs and plan the technical backlog."
      - "Improve the CI/CD setup using GitHub Actions."

  - title: Vembla
    start: 2021-07
    duration: 3
    description: "Working together with our CTO, I managed our tech team to setup personal goals, prioritize our backlog, and implement our Rust backend."

    tags:
      - RUST
      - NODEJS
      - JAVASCRIPT
      - ENGINEERING_MANAGEMENT
      - KUBERNETES
      - GITHUB_ACTIONS
      - GCP
      - POSTGRES
      - MYSQL
      - CI_CD

    highlights:
      - "Setup product planning processes, and prioritized work."
      - "Setup infrastructure with Kubernetes and CI/CD."
      - "Lead the team through regular one-on-ones and daily morning sync meetings. Supported team members with regular pair programming sessions."
      - "Implemented a Rust web backend."
  - title: Svea Solar
    start: 2020-01
    duration: 15

    tags:
      - COACHING
      - TDD
      - MOB_PROGRAMMING
      - KUBERNETES
      - GCP
      - POSTGRES
      - GITHUB_ACTIONS
      - CI_CD
      - JAVASCRIPT
      - TYPESCRIPT
      - NODEJS
      - CLOUD_RUN
      - TEAM_LEAD
      - EVENT_SOURCING

    highlights:
      - "Coach junior engineering team members via mob programming."
      - "Lead weekly learning sessions, teaching backend programming and TDD."
      - "Set up our first GCP kubernetes stack, including GCP-hosted Postgres with GitHub actions for CI/CD."
      - "Set up services via Cloud Run and used GCP secret manager."
      - "Lead a full-stack team, including building a full-stack solution used by all tech teams across multiple departments. The solution included a type-safe schema that replaced controllers by using domain model interfaces as type arguments. It had support for structured logging on GCP, validation of environment variables, and a modular code structure which made it simple for us to divide the code into multiple services when needed."

  - title: WeTal
    start: 2019-10
    duration: 3
    description: "Increase stability and performance of an existing platform, selling the product to companies, and working on implementing new features."

    tags:
      - NODEJS
      - JAVASCRIPT
      - REACT

    highlights:
      - "Improved web site performance and stability."
      - " Worked with marketing by opening up company pages, and setting up a community for developers."
      - "Direct sales sessions with companies, helping them to differentiate themselves on our platform."

  - title: Karma.life
    start: 2017-09
    duration: 25
    description: "Fullstack programming in the B2B team, working collaboratively across teams to stabilize our architecture."

    tags:
      - NODEJS
      - JAVASCRIPT
      - TYPESCRIPT
      - REACT
      - NODEJS
      - GCP
      - PUB_SUB
      - EVENT_SOURCING

    highlights:
      - "Built our text (SMS) notifications system."
      - "Automated our manual invoicing process, removing bugs, and modularized code for simpler maintenance."
      - "Built an event sourced food database to track and broadcast changes in our item inventory."
      - "Established team routines; swarming the team on hard problems, and having continuous communication with our sales team to improve our time-to-restore."
      - "Migrated our RabbitMQ setup to GCP Cloud Pub/Sub, creating TS types which did not exist at the time."

  - title: Linas Matkasse
    start: 2016-11
    duration: 10
    description: "Frontend programming with focus on state management and networking."

    tags:
      - JAVASCRIPT
      - REACT
      - GRAPHQL
      - RXJS
      - CSS

    highlights:
      - "Helped set up GraphQL with custom schema stitching which did not exist at the time."
      - "Created a state management framework for React, based on RxJS to simplify our stack (v2)."
      - "Setup our frontend network layer which consumed our backend API."
      - "Simplify state management in jQuery code so it worked similar to React's setState."

  - title: Omnivy
    start: 2016-06
    duration: 6
    description: "Build a collaborative admin panel for landlords."

    tags:
      - DOCKER
      - REACT
      - RXJS
      - NODEJS
      - JAVASCRIPT

    highlights:
      - "Setup of our dockerized cloud environment."
      - "Created a state management framework for React, based on RxJS to simplify our stack (v1)."
      - "Created highly interactive and reusable stateful components."
      - "Setup all of our backend."

  - title: Qvalia
    start: 2015-05
    duration: 13
    description: "Product management and fullstack programming, working closely with our CEO."

    tags:
      - PRODUCT_MANAGEMENT
      - NODEJS
      - JAVASCRIPT
      - REACT
      - Angular
      - RXJS

    highlights:
      - "I led and coordinated work for our teams; in-house, ERP, frontend, backend. I shortened our backlog according to Mary Poppendieck’s view that the backlog is inventory and thus a “waste” in lean terms (a cost)."
      - "I structured our backend system from fat controllers into promise-based (before it was part of ECMA) thin controllers."
      - "I used React and RxJS to create reactive reducers. I learned how to use setState to do reducers the same way as is done today via useReducer hooks."

  - title: Utvecklarbolaget
    start: 2014-08
    duration: 10
    description: "I worked as an expert AngularJS programmer towards our customers."

    tags:
      - ANGULARJS
      - JAVASCRIPT
      - CSS

    highlights:
      - "Wrote a highly modular AngularJS project with recursive resolution of promises when working against a JSON:API."
      - "Drove descisions around a newspaper's login experience."
      - "Pair programmed together with the team designer, enabled by my custom build tools built on browserify and gulp."
      - "Created stand-alone components in AngularJS which enabled me to work quickly when the dev environment went down."

  - title: R2M
    start: 2013-08
    duration: 11
    description: "I worked as an AngularJS programmer with some backend included."

    tags:
      - ANGULARJS
      - JAVASCRIPT
      - CSS

    highlights:
      - "Wrote a SPA calendar in AngularJS with adaptive UI depending on the screen size."
      - "Used functional programming concepts like immutability, pure functions, and one-way data flows to reduce code complexity."

  - title: DQC
    start: 2011-03
    duration: 30
    description: "I worked with enterprise intranets as a fullstack programmer."

    tags:
      - JAVASCRIPT
      - C#
      - CSS

  - title: Iptor
    start: 2010-01
    duration: 6
    description: "C# programming."

    tags:
      - C#

  - title: CAG Mälardalen
    start: 2008-01
    duration: 6
    description: "Java e-commerce mixed with learning PHP."

    tags:
      - JAVA
      - PHP
---
