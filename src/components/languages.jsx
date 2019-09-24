import React, {Component} from 'react'
export default class languages extends Component {
 
    render(){
        return(
            <aside className="languages aside section">
            <div className="section-inner">
              <h2 className="heading">Languages</h2>
              <div className="content">
                <ul className="list-unstyled">
                  <li className="item">
                    <span className="title"><strong>Vietnamese:</strong></span>
                    <span className="level">Native Speaker <br className="visible-xs" /><i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> </span>
                  </li>
                  <li className="item">
                    <span className="title"><strong>Russian:</strong></span>
                    <span className="level">Professional Proficiency <br className="visible-sm visible-xs" /><i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star-half" /></span>
                  </li>
                  <li className="item">
                    <span className="title"><strong>English:</strong></span>
                    <span className="level">Professional Proficiency <br className="visible-sm visible-xs" /></span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        )
    }
}