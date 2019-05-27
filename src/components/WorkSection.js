import React, { Component } from 'react'

export default class WorkSection extends Component {
    render() {
        return (
            <div className="work-section__container">
                <div className="row">
                    <div className=" work-section__table--one col-md">
                        <h4>Front-end Developer</h4>
                        <p>I can create elegant user interfaces that'll attract the attention of the clients.</p>
                        <h4>Languages I Speak:</h4>
                        <p>HTML, CSS, JavaScript</p>
                        <h4>Things I'm familiar with:</h4>
                        <span>
                            <ul className="work-section__table">
                                <li>SASS</li>
                                <li>BEM</li>
                                <li>Bootstrap</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Visual Studio Code</li>
                                <li>Restful Services</li>
                                <li>Git - Version Control</li>
                                <li>Basic SEO</li>
                            </ul>
                        </span>

                    </div>
                    <div className="work-section__table--two col-md">
                    <h4>Business Strategist</h4>
                        <p>I can also help ensure that the products meet the needs of the users and clients.</p>
                        <h4>Languages I Speak:</h4>
                        <p>English (native), Bengali (native), Hindi (limited)</p>
                        <h4>Things I've learned:</h4>
                        <span>
                            <ul className="work-section__table" >
                                <li>Economics</li>
                                <li>Accounting</li>
                                <li>Corporate Finance</li>
                                <li>Marketing Management</li>
                                <li>Database Management</li>
                                <li>System Analysis</li>
                                <li>Managing IT Projects</li>
                                <li>Tech Law</li>
                                <li>Entrepreneurship</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}