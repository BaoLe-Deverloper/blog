import React, {Component} from 'react'
export default class project extends Component {
  
    render(){
        return(
            <div className="item row">
            <a className="col-md-4 col-12" href={this.props.link} target="_blank">
              <img className="img-fluid project-image" src={this.props.urlImage} alt="project name" />
            </a>
            <div className="desc col-md-8 col-12">
              <h3 className="title"><a href={this.props.link} target="_blank">{this.props.title}</a></h3>
              <p className="mb-2">{this.props.content}</p>
              <p><a className="more-link" href="#" target="_blank"><i className="fas fa-external-link-alt" />Find out more</a></p>
            </div>
          </div>
        )
    }
}