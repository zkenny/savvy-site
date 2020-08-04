import React from "react"
import Section from "../components/Section"
import Layout from "../components/Layout"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Planning.scss"

const intro = {
    title: "Life's complicated. You need a plan.",
    listStart: "Developing a comprehensive financial plan can help you:",
    list1: "Organize your finances and clarify your goals.",
    list2: "Learn how to better understand and manage your finances.",
    list3: "Evaluate potential risks & missed opportunities.",
    list4: "Develop a solid plan for long term financial success.",
    list5:
        "Build confidence in your financial future and empower yourself to live your best life.",
}

const introToFinancialPlanning = {
    title: "Introduction to Financial Planning",
    p1:
        "Many research studies confirm the un-surprising conclusion, that those who develop plans are more likely to achieve their goals.",
    p2:
        "But many people are unclear about what exactly a financial plan is, and how to go about developing one. In fact, there are many forms a financial plan might take, from very simple to very complex. The attached Introduction illustrates the basic process we follow at Savvy to help you develop a comprehensive personalized financial plan.  Read below for some highlights of the planning process.",
    buttonLabel: "View or Download Our Introduction to Planning",
}

const balanceSheet = {
    title: "Developing your balance sheet",
    p1:
        "Building out your personal Balance Sheet and Cash Flow statements is the first essential step in organizing and assessing your current financial position.  This is an example of a personal Balance Sheet.",
    p2:
        "* All financial documents and information herein represent fictitious sample clients.",
}

const futureForecasting = {
    title: "Forecasting your future",
    p1:
        "The ability to forecast your financial future is one of the most valuable benefits of developing a financial plan.  This allows us to project an estimate of your current path, and also allows us to test alternative scenarios.",
    p2:
        "In the sample at right, this forecast shows that the current path would suffer a catastrophic failure if Jack were to pass substantially before Ann.  Once recognized, we can suggest appropriate changes in the plan to guard against such adverse outcomes.",
}

const planningTech = {
    title: "Financial Planning Technology",
    content:
        "At Savvy we employ a robust Financial Planning Technology Platform, called Right Capital, to facilitate efficient planning. This platform enhances your planning experience by allowing you to view all of your financial data in one easy place. We begin by setting you up with a personal financial planning account, then all of your financial data is entered into the system. From there we can run a variety of financial forecasts, that you can experiment with as well. The platform also provides budgeting tools, and offers an optional data aggregation service. Data aggregation allows you to link all of your financial accounts to your planning account, which then provides for real time monitoring of how your financial position is evolving over time.",
}

export default function Planning() {
    return (
        <Layout activeTab="planning">
            <div className="planning__page-content">
                <Section title={intro.title} size="lg">
                    <div className="planning__intro">
                        <div className="planning__intro-text">
                            <div>{intro.title}</div>
                            <ol>
                                <li>{intro.list1}</li>
                                <li>{intro.list2}</li>
                                <li>{intro.list3}</li>
                                <li>{intro.list4}</li>
                                <li>{intro.list5}</li>
                            </ol>
                        </div>
                        <img
                            className="planning__intro-img"
                            src="../images/planningGears.jpg"
                            alt="gears"
                        />
                    </div>
                </Section>
                <Section
                    title={introToFinancialPlanning.title}
                    alignment="center"
                    size="md"
                >
                    <div className="planning__intro-to-planning-content">
                        <div className="planning__intro-to-planning-text">
                            <div>{introToFinancialPlanning.p1}</div>
                            <div>{introToFinancialPlanning.p2}</div>
                        </div>
                        <Button className="planning__intro-to-planning-button">
                            {introToFinancialPlanning.buttonLabel}
                        </Button>
                    </div>
                </Section>
                <div className="planning__subsection">
                    <img
                        className="planning__subsection-img"
                        src="../images/balancesheet.png"
                        alt="balance sheet example"
                    />
                    <div className="planning__subsection-content">
                        <div className="planning__subsection-title">
                            {balanceSheet.title}
                        </div>
                        <div className="planning__subsection-text">
                            {balanceSheet.p1}
                        </div>
                        <div className="planning__subsection-text">
                            {balanceSheet.p2}
                        </div>
                    </div>
                </div>
                <div className="planning__subsection">
                    <div className="planning__subsection-content">
                        <div className="planning__subsection-title">
                            {futureForecasting.title}
                        </div>
                        <div className="planning__subsection-text">
                            {futureForecasting.p1}
                        </div>
                        <div className="planning__subsection-text">
                            {futureForecasting.p2}
                        </div>
                    </div>
                    <img
                        className="planning__subsection-img"
                        src="../images/survivorscenario.png"
                        alt="financial planning survival scenario"
                    />
                </div>
                <Section
                    title={planningTech.title}
                    alignment="center"
                    size="md"
                >
                    <div className="planning__planning-tech">
                        <div className="planning__planning-tech-text">
                            {planningTech.content}
                        </div>
                        <img
                            className="planning__right-capital"
                            src="../images/rightcapital.jpg"
                            alt="right capital example"
                        />
                    </div>
                </Section>
            </div>
        </Layout>
    )
}
