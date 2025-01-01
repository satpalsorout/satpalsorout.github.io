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
            <span className="home-text118">Experienced Software Engineer</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Professional Experience</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">Skills and Expertise</span>
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
              Software Professional with a passion for coding and
              problem-solving.
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
            <span className="home-text125">
              Explore more about Satpal Sorout&apos;s professional journey and
              connect with him on LinkedIn.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Connect on LinkedIn</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Overview of the projects I have worked on.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Details of my work experience in the software industry.
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
              List of skills and technologies I am proficient in.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Projects</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$199</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Buy Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Buy Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Feature 2 of Plan 1</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature 11 of Plan 2</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Feature 2 of Plan 2</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature 4 of Plan 2</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$1299</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Buy Now</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Buy Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Feature 1 of Plan 3</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Feature 3 of Plan 2</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$199</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature 21 of Plan 2</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Buy Now</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Feature 2 of Plan 3</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Content for plan section one
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Feature 1 of Plan 2</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature 11 of Plan 1</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature 21 of Plan 1</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">
              {' '}
              Feature5 of plan3
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">$2299</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$149</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">$2499</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature 31 of Plan 2</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">$1999</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$249</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$1499</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">
              Feature4 of Plan3
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$299</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature 31 of Plan 1</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Feature 3 of Plan 1</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$999</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Feature 1 of Plan 1</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Feature 3 of Plan 3</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              <span>
                Content for plan section two
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text183">Buy Now</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text184">$99</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text185">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
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
            <span className="home-text208">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
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
