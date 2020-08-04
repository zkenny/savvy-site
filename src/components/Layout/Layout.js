import React from "react"
import Footer from "../Footer"
import NavigationBar from "../NavigationBar"

export default function Layout(props) {
    const { activeTab, children } = props
    return (
        <div className={`${activeTab} layout`}>
            <NavigationBar active={activeTab} />
            <div className="layout__content">{children}</div>
            <Footer fixToBottom={props.fixToBottom} />
        </div>
    )
}
