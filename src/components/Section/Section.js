import React from "react"
import "./Section.scss"

export default function Section(props) {
  const { className, title, children, size, alignment } = props
  return (
    <div
      className={`section ${
        alignment === "center" ? "section--centered" : ""
      } ${className || ""}`}
    >
      <div
        className={`section__header ${
          alignment === "center" ? "section__header--centered" : ""
        } ${size ? `section__header--${size}` : ""}`}
      >
        {title}
      </div>
      <div
        className={`section__content ${
          size ? `section__content--${size}` : ""
        }`}
      >
        {children}
      </div>
    </div>
  )
}
