import React from "react"
import Section from "../components/Section"
import Layout from "../components/Layout"
import "./Consultation.scss"

const consultation = {
    title: "Complimentary Consultation",
    p:
        "If you’d like to explore the possibilities, I’d be happy to offer a complimentary consultation to review your current financial health, or to discuss any particular financial concerns you may have. No committment, no obligation. Just happy to get acquainted and share some insights.",
}

export default function Consultation() {
    return (
        <Layout activeTab="consultation" fixToBottom={true}>
            <div className="consultation__page-content">
                <Section title={consultation.title} size="md">
                    <>{consultation.p}</>
                </Section>
                <div className="consultation__contact">
                    <img
                        className="consultation__contact-icon"
                        src="../images/icons/address-icon.svg"
                        alt="address contact information"
                    />
                    <img
                        className="consultation__contact-icon"
                        src="../images/icons/number-icon.svg"
                        alt="phone contact information"
                    />
                    <img
                        className="consultation__contact-icon"
                        src="../images/icons/email-icon.svg"
                        alt="email contact information"
                    />
                </div>
            </div>
        </Layout>
    )
}
