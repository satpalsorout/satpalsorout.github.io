import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/satpal-sorout-99348775', '_blank')
  }
  return (
    <div className="home-container">
      <Helmet>
        <title>Satpal sorout</title>
        <meta property="og:title" content="Satpal-Sorout" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">Get in touch with me</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Resume</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">Experience</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Profile</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">Profile</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Experience</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">View my professional profile</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">Explore my work experience</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">Projects</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Projects</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Discover the projects I&apos;ve worked on
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Connect</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Main action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Satpal Sorout - Senior Specialist Software Engineering
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
            Experienced Full-Stack Developer and Azure-Certified Architect with over a decade of expertise in web and product development, specializing in the travel and finance sectors. Skilled in .NET, React.js, Node.js, and advanced CI/CD methodologies, delivering scalable and innovative solutions. Currently serving as a Senior Specialist Engineer at LTI Mindtree, with a passion for technology and active contributions to the developer community.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">Experienced Senior Specialist Software Engineer with expertise in leading software development projects</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Professional Experience</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">Proficient in frontend technologies like React.js, JavaScript, and backend frameworks including .NET Core, Node.js. Experienced with Azure Cloud, Power BI, SQL, microservices, CI/CD, and cloud-based solutions.

</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Satpal Sorout</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
            Software Professional with a passion for coding, problem-solving, and developing innovative solutions to complex technical challenges.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Skills</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Connect with Satpal Sorout</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125" >
              Explore more about Satpal Sorout&apos;s professional journey and
              connect with him on LinkedIn.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126" onClick={handleLinkedIn}>Connect on LinkedIn</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
  Overview of the projects I have worked on.<br/>
  <br/>
  <strong>EY Capital Edge</strong><br/>
  Profile: Senior Specialist Engineering<br/>
  Company: EY (Ernst & Young)<br/>
  Description: Capital Edge offers a range of applications to manage work plans, sales and margin variance analytics, legal entity planning, custom analytics, operating models, transaction pipeline, value capture, project status reporting, and more.<br/>
  Key Features:<br/>
  - Manage all workplan management processes.<br/>
  - Optimize costs or time based on requirements.<br/>
  - Process mergers for entities.<br/>
  Technology Stack: React.js, Node.js, JavaScript, .NET Core, C#, Power BI, Python, SQL, MongoDB, ADX, Azure Cloud, Microservices.<br/><br/>

  <strong>EY Transaction Periscope</strong><br/>
  Profile: Senior Specialist Engineering<br/>
  Company: EY (Ernst & Young)<br/>
  Description: Transaction Periscope offers a variety of tools, including the Transaction Data Hub, Sales Reporting and Analysis, Cross-Sell Analytics, and Working Capital Analytics.<br/>
  Key Features:<br/>
  - Manage Logistics Edge functionalities.<br/>
  - Optimize cost or time based on requirements.<br/>
  - Focus on Spend Analytics.<br/>
  Technology Stack: React.js, JavaScript, Python, SQL, Power BI, Azure Cloud, Microservices.<br/><br/>

  <strong>S&P E*TRADE Financial Corporation</strong><br/>
  Profile: Senior Software Engineer (Tech Owner)<br/>
  Company: S&P E*TRADE (A subsidiary of Morgan Stanley)<br/>
  Description: E*TRADE is an online brokerage platform for trading various financial assets such as stocks, ETFs, and mutual funds.<br/>
  Key Features:<br/>
  - Manage financial research and reporting.<br/>
  - Download financial rating and report documents.<br/>
  - Process documents and provide stock and mutual fund/ETF quotes.<br/>
  Technology Stack: React.js, Node.js, JavaScript, C#.NET, MVC, ASP.<br/><br/>

  <strong>IHSMarkit BlackRock PDF Tool</strong><br/>
  Profile: Senior Software Engineer<br/>
  Company: IHSMarkit<br/>
  Description: The BlackRock PDF Editor tool automates the process of editing PDF documents for publishing reports with logo uploads and content edits.<br/>
  Key Features:<br/>
  - Manage all PDF editing and signing tasks.<br/>
  - Download all edited documents.<br/>
  - Process documents and read metadata.<br/>
  - SAML authentication for login.<br/>
  Technology Stack: React.js, Redux, ES6, Bootstrap4, LESS, Node.js.<br/><br/>

  <strong>Pramati Pilot (CredHub)</strong><br/>
  Profile: Senior Development Engineer<br/>
  Company: Pramati Technologies<br/>
  Description: The Pilot tool helps property managers maintain credit history and submit reports to credit management organizations like Equifax and TransUnion.<br/>
  Key Features:<br/>
  - Manage property data.<br/>
  - View consolidated details of submitted and in-progress reports.<br/>
  - Automate data collection from Excel.<br/>
  - Seamless integration with credit management systems.<br/>
  Technology Stack: React.js, Redux, ES6, Bootstrap.<br/><br/>

  <strong>IVP Raptor (Finance Domain)</strong><br/>
  Profile: Senior Software Engineer (Lead)<br/>
  Company: IVP (Indus Valley Partners)<br/>
  Description: IVP RAPTOR is an automated regulatory filing solution with support for various forms, including OPERA, Form PF, Form 13-D/F/G, CPO-PQR, and more.<br/>
  Key Features:<br/>
  - Manage regulatory filings in a single dashboard.<br/>
  - Provide a consolidated view of submitted, in-progress, and upcoming filings.<br/>
  - Integrate seamlessly with accounting, risk, and data warehouse systems.<br/>
  Technology Stack: C#.NET, React.js, Redux, ES6, ETL, Azure Data Bricks, Data Factory, Data Explorer.<br/><br/>

  <strong>Fareportal Email Express (Travel Domain)</strong><br/>
  Profile: Senior Software Engineer<br/>
  Company: Fareportal<br/>
  Description: Email Express is an automation tool for sending personalized and branded emails. The platform allows email campaign management and automation.<br/>
  Key Features:<br/>
  - Configurable emails (e.g., newsletters, promotional emails).<br/>
  - Auto-trigger emails for abandoned bookings and confirmations.<br/>
  Technology Stack: C#.NET, HTML5, JavaScript, jQuery.<br/><br/>

  <strong>Omni Desk (Newgen)</strong><br/>
  Profile: Software Engineer<br/>
  Company: Newgen<br/>
  Description: Omni Desk is a multi-module web application that integrates various activities across functional departments, including HR services, IT services, and travel management.<br/>
  Key Features:<br/>
  - Configurable reporting facilities.<br/>
  - Strong security features for user access control.<br/>
  - Attendance, payroll, and other HR functionalities.<br/>
  Technology Stack: C#.NET, SQL Server 2008 R2, Windows OS, WCF services, XML.<br/><br/>

  <strong>Omni Gyan (Newgen)</strong><br/>
  Profile: Software Engineer<br/>
  Company: Newgen<br/>
  Description: Omni Gyan is a web application used for conducting online recruitment tests.<br/>
  Key Features:<br/>
  - Configurable test product with rich reporting facilities.<br/>
  - Strong security features for user login and access rights.<br/>
  Technology Stack: C#.NET, SQL Server 2008, Windows OS, WCF, Web services.<br/><br/>

  <strong>Transaction Processing System (Newgen)</strong><br/>
  Profile: Software Engineer<br/>
  Company: Newgen<br/>
  Description: A Windows-based application for designing customized forms and workflows for transaction processing.<br/>
  Key Features:<br/>
  - Design and customize transaction forms.<br/>
  - Process transactions based on user-defined flows.<br/>
  Technology Stack: C#.NET, SQL Server 2008, Windows OS.
</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
            Senior Technology Specialist at LTI Mindtree<br/>
            Tenure: Over 2 years<br/>
            Responsibilities: Leading technology initiatives, specializing in Azure Cloud, .NET, .NET Core, React.js, Node.js, and JavaScript.<br/>
            Previous Roles:<br/>
            S&P Global<br/>
            Pramati Technologies<br/>
            Indus Valley Partners<br/>
            Fareportal<br/>
            Newgen
          </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Skills</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Professional Experience</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
  List of skills and technologies I am proficient in.<br/>
  <strong>Programming Languages</strong><br/>
  C#<br/>
  JavaScript (ES6+)<br/>
  TypeScript<br/>
  Python<br/>
  <strong>Frontend Development</strong><br/>
  React.js<br/>
  HTML5<br/>
  CSS3<br/>
  SCSS<br/>
  Bootstrap<br/>
  Tailwind CSS<br/>
  <strong>Backend Development</strong><br/>
  .NET Framework<br/>
  .NET Core<br/>
  Node.js<br/>
  Express.js<br/>
  Web API Development<br/>
  RESTful APIs<br/>
  Microservices Architecture<br/>
  <strong>Cloud Computing</strong><br/>
  Azure Cloud Services<br/>
  Azure Functions<br/>
  Azure DevOps<br/>
  Azure App Service<br/>
  Azure Blob Storage<br/>
  Azure SQL Database<br/>
  <strong>DevOps and CI/CD</strong><br/>
  GitHub Actions<br/>
  Jenkins<br/>
  Azure Pipelines<br/>
  Docker<br/>
  Kubernetes<br/>
  <strong>Database Management</strong><br/>
  Microsoft SQL Server<br/>
  MySQL<br/>
  ADX<br/>
  MongoDB<br/>
  Redis<br/>
  <strong>Software Development Practices</strong><br/>
  Agile Methodologies (Scrum, Kanban)<br/>
  Test-Driven Development (TDD)<br/>
  Code Reviews and Refactoring<br/>
  Design Patterns and Principles (e.g., SOLID, DRY)<br/>
  <strong>Version Control</strong><br/>
  Git<br/>
  GitHub<br/>
  Bitbucket<br/>
  Azure Repos<br/>
  <strong>Others</strong><br/>
  API Integration<br/>
  Unit Testing Frameworks (e.g., NUnit, xUnit, Jest)<br/>
  Logging and Monitoring (e.g., Kibana, Application Insights)<br/>
  Performance Optimization
</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Projects</span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186">
              Master of Computer Applications (MCA) from Guru Gobind Singh
              Indraprastha University, Delhi
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187">
              Proficient in Java, JavaScript, React, Node.js, MongoDB, and Agile
              methodologies
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188">Experience</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Over 10 years of experience in software development and project
              management
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190">Education</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191">Skills</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192">
              Certified Scrum Master (CSM) and AWS Certified Developer -
              Associate
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193">Certifications</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194">Tech Lead</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195">Software Engineer</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197">Michael Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198">
              Working with Satpal was a pleasure. He is a great team player and
              has a deep understanding of software architecture. I highly
              recommend him for any project.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200">UI/UX Designer</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Emily Brown</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202">
              Satpal is an exceptional developer with a keen eye for detail. His
              problem-solving skills are top-notch, and he always delivers
              high-quality work on time.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203">Product Manager</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204">
              Satpal helped us streamline our development process and improve
              overall efficiency. His expertise in React and JavaScript was
              invaluable to our team.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206">
              Satpal&apos;s dedication to his work is truly inspiring. He goes
              above and beyond to ensure that the project meets all requirements
              and exceeds expectations.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207">
              Satpal&apos;s attention to detail is unmatched. He has a creative
              approach to problem-solving and always brings fresh ideas to the
              table. It was a pleasure collaborating with him.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text178 home-font-15 ">
            Email: satpal.sorout@gmail.com<br/>
  Phone: +91 8860718125 <br/>
  LinkedIn: <a href="https://www.linkedin.com/in/satpal-sorout-99348775/">Satpal Sorout LinkedIn</a><br/>
  GitHub: <a href="https://github.com/satpalsorout">satpalsorout GitHub</a><br/>
  Website/Portfolio: <a href="https://satpalsorout.github.io">satpalsorout.github.io</a> 
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209">
              Currently based in San Francisco, CA
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210">Contact Information</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Originally from New Delhi, India
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212">San Francisco, CA</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text213">New Delhi, India</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text214">Portfolio</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215">Services</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">/terms</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219">Contact</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">/cookies</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">/privacy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
