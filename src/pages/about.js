import React from "react"
import Section from "../components/Section"
import Layout from "../components/Layout"
import "./About.scss"

const trust = {
    title: "It All Begins with Trust",
    p: [
        "Very few people feel confident about their own expertise in saving, investing, and managing their finances. And it’s no wonder. Finances are complicated, and you’ve probably got more than a few alternative demands on you time.",
        "You might then consider engaging the assistance of a professional advisor. But if you don’t understand the issues yourself, how do you know whom to trust? How do you sift through the cacophony of confusing and often contradictory claims? ",
        "At Savvy we believe it all begins with Trust. And we aim first and foremost to earn your trust. Savvy was built on a foundation of trustworthiness and integrity, and from the outset we demonstrate that commitment in three dimensions.",
    ],
    list: [
        {
            point: "1. Fiduciary Oath & Obligation",
            sub:
                "We work to a fiduciary standard, committed to always putting clients’ interests first.",
        },
        {
            point: "2. Certified Financial Planner® Credentials",
            sub:
                "We are CFP® professionals, held to the highest ethical standards.",
        },
        {
            point: "3. Fee-Only Planning & Investments",
            sub:
                "We work on a fee-only basis, to avoid even the appearance of conflicted interests.",
        },
    ],
    footnote:
        "Savvy Investments & Planning, LLC, is a Registered Investment Advisory firm, in the state of California.",
}

const team = {
    title: "Meet Our Team",
    position: "Principal & CEO",
    name: "John D. Kenny",
    credentialsContent: {
        title: "Credentials",
        credentials: [
            "CFP® – Certified Financial Planner",
            "MBA – Master in Business Administration",
            "FINRA Series 66 – Financial Advisory License",
        ],
    },
}

const faq = {
    title: "Frequently Asked Questions",
    questions: [
        {
            q: "1. Are you a fiduciary?",
            a:
                "Savvy: Yes. We are entirely committed to serving our clients best interests.",
        },
        {
            q: "2. How do you charge for your services, and how much?",
            a:
                " Savvy: We are a fee-only firm. Fees vary by type and level of service.",
        },
        {
            q:
                "3.  What licenses, credentials or other certifications do you have?",
            a:
                "Savvy: Savvy Investments & Planning is a Registered Investment Advisor in the state of California.  John D. Kenny is a Certified Financial Planner® (CFP®), and has a Masters degree in Business Administration (MBA).",
        },
        {
            q: "4.  What services do you/does your firm provide?",
            a:
                "Savvy: Financial Planning, Investment Management, General Advising.",
        },
        {
            q: "5.  What types of clients do you specialize in?",
            a:
                "Savvy: We work with a wide range of clients and we have no minimum asset or income requirements.",
        },
        {
            q: "6.  Could I see a sample financial plan?",
            a: "Savvy: Of course. Please see our Planning page.",
        },
        {
            q: "7.  What is your investment approach?",
            a:
                "Savvy: We are happy to provide guidance on passive investment strategies, but in the current era of high risk and uncertainty we recommend active, defensive strategies.",
        },
        {
            q: "8.  How much contact do you have with your clients?",
            a:
                "Savvy: As much as you like. We recommend regular reviews to monitor progress and make adjustments as needed.",
        },
        {
            q: "9.  Will I be working only with you or with a team?",
            a:
                "Savvy: You will be working with Principal and CEO, John D. Kenny.",
        },
        {
            q: "10.  What makes your client experience unique?",
            a:
                "Savvy: We truly enjoy tackling financial challenges and helping people live better lives.  And it shows.",
        },
    ],
    footnote: "**Adapted from ",
    link: "10 Questions to Ask a Financial Advisor",
}

export default function About() {
    return (
        <Layout activeTab="about">
            <div className="about__page-content">
                <Section title={trust.title} size="lg">
                    <>
                        {trust.p.map((paragraph, index) => (
                            <div key={index} className="about__trust-text">
                                {paragraph}
                            </div>
                        ))}
                    </>
                    <>
                        {trust.list.map((bullet, index) => (
                            <div key={index} className="about__trust-text">
                                <div>{bullet.point}</div>
                                <div>{bullet.sub}</div>
                            </div>
                        ))}
                    </>
                    <div className="about__trust-text">{trust.footnote}</div>
                </Section>
                <div className="about__meet-our-team">
                    <div className="about__meet-our-team-title">
                        {team.title}
                    </div>
                    <div className="about__meet-our-team-content">
                        <div className="about__profile">
                            <div className="about__meet-our-team-section">
                                <div>{team.position}</div>
                                <div>{team.name}</div>
                            </div>
                            <div className="about__meet-our-team-section">
                                <div>{team.credentialsContent.title}</div>
                                <>
                                    {team.credentialsContent.credentials.map(
                                        (credential, index) => (
                                            <div key={index}>{credential}</div>
                                        )
                                    )}
                                </>
                            </div>
                        </div>
                        <img
                            className="about__headshot"
                            src="../images/headshot.jpg"
                            alt="our ceo"
                        />
                    </div>
                </div>
                <Section
                    className="about__faq"
                    title={faq.title}
                    size="md"
                    alignment="center"
                >
                    <>
                        {faq.questions.map((q, index) => (
                            <div key={index} className="about__faq-question">
                                <div>{q.q}</div>
                                <div>{q.a}</div>
                            </div>
                        ))}
                    </>
                    <div className="about__faq-link">
                        {faq.footnote}
                        <a href="https://www.forbes.com/pictures/54f4e709da47a54de8244b99/10-questions-to-ask-a-fin/#6af457e91174">
                            {faq.link}
                        </a>
                    </div>
                </Section>
            </div>
        </Layout>
    )
}
