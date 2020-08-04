import React from "react"
import Section from "../components/Section"
import Layout from "../components/Layout"
import "./Investments.scss"

const portfolioManagement = {
    title: "Portfolio Management, Specialized to Your Needs",
    listStart: "Warren Buffett has only Two Rules for managing investments",
    list1: "Rule #1 – Never lose money.",
    list2: "Rule#2 – Never forget Rule #1.",
    p1:
        "Buffett’s rules are objective #1 at Savvy Investments & Planning. To be clear, Buffett’s rules are not literal, but aspirational – there is no reward without some measure of risk. (Buffett himself lost $23 billion in the 2008 Financial Crisis.) But the rules reflect a critical mindset – never be frivolous or nonchalant about investing. At Savvy, managing your hard earned savings is serious business, and we will always treat every dollar you entrust to us as if it were our own.",
    p2:
        "Savvy provides investment management services personalized to each client’s individual needs. These include taxable accounts, retirement accounts, and 529 college savings accounts. In establishing new accounts, Savvy employs a rigorous process to construct efficient portfolios based on timeless principles. Savvy can also incorporate a client’s existing positions into a portfolio design and gradually migrate positions toward greater efficiency.",
}

const investmentPrinciples = {
    title: "Investment Principles",
    list1: "1. Focus on long term, net returns.",
    list2:
        "2. Always strive to achieve the highest risk-adjusted return, consistent with your given risk profile.",
    list3: "3. In the long term, Value wins.",
    list4: "4. Tax efficiency is pivotal to success.",
    list5:
        "5. Risk management is imperative as you enter retirement in volatile times.",
}

const investmentProcess = {
    title: "Investment Process",
    list1: "1. Carefully review financial position and investment goals.",
    list2: "2. Draft a personalized Investment Policy Statement.",
    list3: "3. Develop a long term Investment Plan.",
    list4:
        "4. Construct the portfolio and select initial investment positions.",
    list5: "5. Monitor and make periodic adjustments as appropriate.",
}

const portfolioReview = {
    title: "Portfolio Review",
    p:
        "If you have an existing investment account, you may want to consider a Portfolio Review. In an environment of infinite complexity and high volatility, it never hurts to get a second opinion. Contact us today for a consulation.",
}

export default function Investments() {
    return (
        <Layout activeTab="investments">
            <div className="investments__page-content">
                <div className="investments__portfolio-management investments__page-section">
                    <Section title={portfolioManagement.title} size="md">
                        <div>{portfolioManagement.listStart}</div>
                        <div>{portfolioManagement.list1}</div>
                        <div>{portfolioManagement.list1}</div>
                        <div>{portfolioManagement.p1}</div>
                        <div>{portfolioManagement.p2}</div>
                    </Section>

                    <img
                        className="investments__portfolio-construction"
                        src="../images/portfolioconstruction.png"
                        alt="portfolio construction example"
                    />
                </div>
                <div className="investments__investment investments__page-section">
                    <img
                        className="investments__stock-exchange"
                        src="../images/stockexchange.jpg"
                        alt="stock exchange graph"
                    />
                    <div className="investments__sections">
                        <Section title={investmentPrinciples.title} size="sm">
                            <div>{investmentPrinciples.list1}</div>
                            <div>{investmentPrinciples.list2}</div>
                            <div>{investmentPrinciples.list3}</div>
                            <div>{investmentPrinciples.list4}</div>
                            <div>{investmentPrinciples.list5}</div>
                        </Section>
                        <Section title={investmentProcess.title} size="sm">
                            <div>{investmentProcess.list1}</div>
                            <div>{investmentProcess.list2}</div>
                            <div>{investmentProcess.list3}</div>
                            <div>{investmentProcess.list4}</div>
                            <div>{investmentProcess.list5}</div>
                        </Section>
                    </div>
                </div>
                <div className="investments__portfolio-review investments__page-section">
                    <Section title={portfolioReview.title} size="sm">
                        <div>{portfolioReview.p}</div>
                    </Section>
                </div>
            </div>
        </Layout>
    )
}
