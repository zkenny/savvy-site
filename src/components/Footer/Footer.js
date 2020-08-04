import React from "react"
import "./Footer.scss"

const copyright = "© 2020. Savvy | Investments & Planning."
const legalNotice = {
    title: "Legal Notice",
    content:
        "The information on this site is provided “AS IS” and without warranties of any kind either ex-press or implied. To the fullest extent permissible pursuant to applicable laws, Savvy | Investments & Planning (referred to as “Savvy”) disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability, non-infringement and suitability for a particular purpose. Savvy does not warrant that the information will be free from error. None of the information provided on this website is intended as investment, tax, accounting or legal advice, as an offer or solicitation of an offer to buy or sell, or as an endorsement of any company, security, fund, or other securities or non-securities offering. The information should not be relied upon for purposes of transacting securities or other investments. Your use of the information is at your sole risk. Under no circumstances shall Savvy be liable for any direct, indirect, special or consequential damages that result from the use of, or the inability to use, the materials in this site. Information on this website should not be considered a solicitation to buy, an offer to sell, or a recommendation of any security in any jurisdiction where such offer, solicitation, or recommendation would be unlawful or unauthorized.",
}

export default function Footer(props) {
    return (
        <div
            className={`footer ${props.fixToBottom ? "footer--absolute" : ""}`}
        >
            <div className="footer__copyright">{copyright}</div>
            <div className="footer__legal-notice">
                <div className="footer__legal-notice-title">
                    {legalNotice.title}
                </div>
                <div className="footer__legal-notice-text">
                    {legalNotice.content}
                </div>
            </div>
        </div>
    )
}
