import React, { Component, useState } from "react"
import LabelledInput from "../LabelledInput"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import "./EmailForm.scss"

const labels = {
    title: "Let's Chat!",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send",
}

export default class EmailForm extends Component {
    render() {
        return (
            <div className="email-form">
                <div className="email-form__title">{labels.title}</div>
                <form
                    className="email-form__form"
                    action="/email.php"
                    method="post"
                >
                    <LabelledInput name={labels.name} required={true} />
                    <LabelledInput name={labels.email} required={true} />
                    <LabelledInput name={labels.subject} />
                    <LabelledInput
                        name={labels.message}
                        required={true}
                        type="textbox"
                    />
                    <input type="submit" value="submit" />
                    <Button className="email-form__button">
                        {labels.send}
                    </Button>
                </form>
            </div>
        )
    }

    //validateForm() {}
}
