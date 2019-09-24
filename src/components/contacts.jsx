import React, { Component } from 'react'
export default class contacts extends Component {
    render() {
        let data=[
          
            {name:"Gmail",link:"baolehvpkkq@gmail.com",class_icon:"fas fa-envelope"},
            {name:"Facebook",link:"web.facebook.com",class_icon:"fab fa-facebook"},
            {name:"Webchat",link:"baoledeveloper",class_icon:"fab fa-weixin"}
        ]
        const contacts=data.map((val,i)=>{
               return <li key={i}><i className={val.class_icon}/><span className="sr-only">{val.name}</span><a href="#">{val.link}</a></li>
        })
        return (
            <aside className="info aside section">
                <div className="section-inner">
                  <h2 className="heading sr-only">Basic Information</h2>
                  <div className="content">
                    <ul className="list-unstyled">
                      <li><i className="fas fa-map-marker-alt" /><span className="sr-only">Location:</span>Moscow,Russia</li>
                      {contacts}
                      
                    </ul>
                  </div>
                </div>
              </aside>
        )
    }
    }