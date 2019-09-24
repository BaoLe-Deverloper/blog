import React, { Component } from "react"


export default class skills extends Component {
   
    // componentDidMount() {
    //     $('.level-label').tooltip();
    //   }
    render() {
        let data_skills = [
            { title: "Javascript & jQuery", level: "60%" },
            { title: "Asp.Net mvc", level: "70%" },
            { title: "Html & Css", level: "50%" },
            { title: "Reactjs", level: "30%" }
        ]
        const skills = data_skills.map((val, i) => {
            return (
                <div className="item" key={i}>
                    <h3 className="level-title">{val.title}<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle" />Expert</span></h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level={val.level}>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <aside className="skills aside section">
                <div className="section-inner">
                    <h2 className="heading">Skills</h2>
                    <div className="content">
                        <p className="intro">
                            Intro about your skills goes here. Keep the list lean and only show your primary skillset. You can always provide a link to your Linkedin or Coderwall profile so people can get more info there.</p>
                        <div className="skillset">
                           {skills}
                            <p><a className="more-link" href="#"><i className="fas fa-external-link-alt" />More on Coderwall</a></p>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }

}