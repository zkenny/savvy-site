import React from "react"
import "./LabelledInput.scss"

export default function LabelledInput(props) {
    return (
        <div className="labelled-input">
            <label for={props.name}>
                {props.name}
                {props.required && (
                    <span className="labelled-input__required">*</span>
                )}
            </label>
            {props.type && props.type === "textbox" ? (
                <textarea
                    className="labelled-input__input labelled-input__input--large"
                    name={props.name}
                ></textarea>
            ) : (
                <input
                    className="labelled-input__input"
                    name={props.name}
                ></input>
            )}
        </div>
    )
}
