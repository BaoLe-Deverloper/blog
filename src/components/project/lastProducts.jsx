import React, {Component} from 'react'
import LastProject from './lastProduct'
export default class lastProjects extends Component {

  
    render(){
        let products = [
            {name:"Instance - Bootstrap 4",title:"Portfolio Theme for Aspiring Full Stack Developers",urlLink:"/category",content:"You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.",urlImage:"assets/images/projects/project-featured.jpg"},
            
        ]
        
        const list = products.map((val,i)=>{
        
           return <LastProject key={i} name={val.name} title ={val.title} link={val.urlLink} content={val.content} urlImage={val.urlImage} />
        })
        return(
            <div>
              {list}
            </div>
          
        )
    }
}