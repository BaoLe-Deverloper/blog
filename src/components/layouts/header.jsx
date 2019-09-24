import React, {Component} from 'react'
export default class header extends Component {
    render(){
        return(
          <header className="header">
              <div  id="particles-js"></div>   
          <div className="container clearfix">  
                          
            <img className="profile-image img-fluid float-left" src="assets/images/baole-dev_Avarta.jpg" alt="Le Van Bao" />
            <div className="profile-content float-left">
              <h1 className="name">Lê Văn Bảo</h1>
              <h2 className="desc">Web App Developer</h2>   
              <ul className="social list-inline">
                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook" /></a></li>                   
                <li className="list-inline-item"><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-github-alt" /></a></li>    
                <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow" /></a></li>   
                <li className="list-inline-item last-item"><a href="#"><i className="fab fa-codepen" /></a></li>                
              </ul> 
            </div>
            <a className="btn btn-cta-primary float-right" href="https://themes.3rdwavemedia.com/" target="_blank"><i className="fas fa-paper-plane" /> Contact Me</a>              
          </div>
        </header>
        )
    }
}