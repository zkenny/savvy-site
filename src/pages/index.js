import React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"

const bannerText = "Success, Security, Peace of Mind"
const intro = {
  title: "Success Begins With a Plan",
  start: "Life’s complicated, but there is a simple path to success.",
  step1: "Get organized.",
  step2: "Make a plan.",
  step3: "Save and invest.",
  step4: "Track your progress.",
  qualifier:
    "This path is \"simple”, but not neccesarily easy.  Peering into the future and planning ahead takes effort and discipline.  That's where an organized process and a savvy plan can make all the difference.  You begin with incremental steps, but your rewards compound exponentially.",
  close: "Let us help you.",
}
const whatWeDo = {
  title: "What We Do",
  subSection1Title: "Financial Planning",
  subSection1Text:
    "Comprehensive financial planning can help you clarify your goals, make the most of your finances, and help you live your best life.  The process begins with understanding your objectives and getting organized, then walks through every dimension of your financial life.  The process also builds a powerful sense of confidence and security that comes from having a solid long-term plan and from having a savvy financial coach available on-demand.",
  subSection2Title: "Investment Management",
  subSection2Text:
    "Value focused, tax efficient, risk managed – these are the pillars of savvy investments.  And now more than ever, you need to know where your investments stand.  Are your investments structured to weather extreme volatility?  Are you simultaneously looking out for long-term opportunities?  Savvy can help you review where your investments are at today, and make sound recommendations for long-term success.",
}

export default function Home() {
  return (
    <Layout activeTab="home">
      <div className="home__banner">
        <img
          className="home__banner-image"
          src="../images/family.jpg"
          alt="family with kids"
        />
        <div className="home__banner-text">{bannerText}</div>
      </div>
      <div className="home__page-content">
        <Section className="home__intro" title={intro.title} size="lg">
          <div className="home__intro-content">{intro.start}</div>
          <div className="home__intro-content">
            {intro.step1}
            <br />
            {intro.step2}
            <br />
            {intro.step3}
            <br />
            {intro.step4}
          </div>
          <div className="home__intro-content">{intro.qualifier}</div>
          <div className="home__intro-content">{intro.close}</div>
        </Section>
        <Section className="home__what-we-do" title={whatWeDo.title} size="sm">
          <div className="home__what-we-do-subsection">
            <img
              className="home__what-we-do-subsection-icon"
              src="../images/icons/graph-logo.svg"
              alt="planning icon"
            />
            <div className="home__what-we-do-subsection-content">
              <div className="home__what-we-do-subsection-title">
                {whatWeDo.subSection1Title}
              </div>
              <div className="home__what-we-do-subsection-text">
                {whatWeDo.subSection1Text}
              </div>
            </div>
          </div>
          <div className="home__what-we-do-subsection">
            <img
              className="home__what-we-do-subsection-icon"
              src="../images/icons/doc-logo.svg"
              alt="investments icon"
            />
            <div className="home__what-we-do-subsection-content">
              <div className="home__what-we-do-subsection-title">
                {whatWeDo.subSection2Title}
              </div>
              <div className="home__what-we-do-subsection-text">
                {whatWeDo.subSection2Text}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  )
}
