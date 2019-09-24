import React, {Component} from 'react'
import Project from './project'
export default class projects extends Component {

  
    render(){
        let products = [
            {title:"Instance - Bootstrap 4 Portfolio Theme for Aspiring Full Stack Developers",urlLink:"#",content:"You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.",urlImage:"assets/images/projects/project-1.png"},
            {title:"Instance - Bootstrap 4 Portfolio Theme for Aspiring Full Stack Developers",urlLink:"#",content:"You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.",urlImage:"assets/images/projects/project-2.png"},
            {title:"Instance - Bootstrap 4 Portfolio Theme for Aspiring Full Stack Developers",urlLink:"#",content:"You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.",urlImage:"assets/images/projects/project-3.png"},
            {title:"Instance - Bootstrap 4 Portfolio Theme for Aspiring Full Stack Developers",urlLink:"#",content:"You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.",urlImage:"assets/images/projects/project-4.png"}
        ]
        
        const list = products.map((val,i)=>{
      
           return <Project key={i} title ={val.title} link={val.urlLink} content={val.content} urlImage={val.urlImage} />
        })
        return(
            <div>
              {list}
            </div>
          
        )
    }
}