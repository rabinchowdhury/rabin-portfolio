import React, { Component } from 'react'

export default class CoverPage extends Component {
    render() {
        return (
            <div className="cover-page">
                <span className="cover-page__container">
                    <span className="cover-page__text">
                        <h3><b>So you're hiring!?</b></h3>
                        <p><b>Hi, I'm Rabin.</b> I'm a front-end developer from Atlanta, Georgia. I work with small businesses making software.</p>
                    </span>
                </span>
                <div className="avatar-image animated tada delay-1s"></div>
            </div>
        )
    }
}