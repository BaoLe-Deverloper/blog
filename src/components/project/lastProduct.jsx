import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class lastProject extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="item featured text-center">
                <h3 className="title"><Link to={this.props.link}>{this.props.name}</Link></h3>
                <p className="summary">{this.props.title}</p>
                <div className="featured-image has-ribbon">
                    <a href="#" target="_blank">
                        <img className="img-fluid project-image" src={this.props.urlImage} alt="project name" />
                    </a>
                    <div className="ribbon">
                        <div className="text">New</div>
                    </div>
                </div>
                <div className="desc text-left">
                    <p>{this.props.content}</p>
                </div>
                <a className="btn btn-cta-secondary" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/velocity-bootstrap-theme-for-startup-products/" target="_blank"><i className="fas fa-thumbs-up" /> Back my project</a>
            </div>
        )
    }
}