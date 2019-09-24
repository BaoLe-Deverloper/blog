import React, { Component } from 'react'
export default class educations extends Component {
    render() {

        let data = [
            { title: 'MSc Computer Science', location: 'University College London', time: '(2011-2012)' },
            { title: 'BSc Computer Science', location: 'University of Bristol', time: '(2008-2011)' },
            { title: 'University of Bristol', location: 'My Home', time: '(2017-201)' }
        ]
        const edu = data.map((val, i) => {
            return (
                <div className="item" key={i}>
                    <h3 className="title"><i className="fas fa-graduation-cap" /> {val.title}</h3>
                    <h4 className="university">{val.location} <span className="year">{val.time}</span></h4>
                </div>
            )
        })
        return (
            <aside className="education aside section">
                <div className="section-inner">
                    <h2 className="heading">Education</h2>
                    <div className="content">

                       {edu}
                    </div>
                </div>
            </aside>
        )
    }
}