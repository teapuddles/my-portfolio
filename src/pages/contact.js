import React from 'react'
import Layout from '../components/Layout.js'

export default function Contact () {
    return(
        <Layout pageTitle="Contact Me">
            <div className="form-container">
            <form method="post" action="https://getform.io/f/eca25ccb-efa0-44c0-a8b8-f0a41df3d3cf">
                <div className="form-content-list">
                <label className="name-label">Name
                    <input className="contact-name" type="text" name="name"/>
                </label>
                <label className="email-label">Email
                    <input className="contact-email" type="email" name="email"/>
                </label>
                <label className="message-label">Message
                    <textarea className="contact-message" type="text" name="message"/>
                </label>
                <button className="contact-button" type="submit">Send</button>
                </div>
            </form>
            </div>
        </Layout>
    )
}