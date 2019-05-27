import React, { Component } from 'react'

import CoverPage from './CoverPage';
import AboutSection from './AboutSection';
import WorkSection from './WorkSection';
import FooterSection from './FooterSection';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <CoverPage />
                <AboutSection />
                <WorkSection />
                <FooterSection />
            </div>
        )
    }
}
