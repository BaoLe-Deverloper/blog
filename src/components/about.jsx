import React,{Component} from 'react'
export default class about extends Component{
   
    render(){
        return(
            <section className="about section">
                <div className="section-inner">
                  <h2 className="heading">About Me</h2>
                  <div className="content">
                    <p>{this.props.children}</p>
                  </div>
                </div>
              </section>
        )
    }
}