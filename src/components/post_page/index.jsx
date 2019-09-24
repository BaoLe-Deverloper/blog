import React , {Component} from "react"
import Layout from "../layouts/layout"
import Skills from './../skills'
import LastProjects from "../project/lastProducts"
export default class post_page extends Component{
    render(){
        return (
            <Layout>
                <div className="container sections-wrapper">
                <div className="row">
                    <div className="primary col-lg-8 col-12">
                
                    <section className="latest section">
                        <div className="section-inner">
                        <h2 className="heading">Latest Projects</h2>
                        <div className="content">
                            <LastProjects/>
                        
                        </div>{/*//content*/}
                        </div>{/*//section-inner*/}
                    </section>{/*//section*/}
                
                    </div>{/*//primary*/}
                    <div className="secondary col-lg-4 col-12">
                    
                    <Skills/>
                    
                    </div>
                </div>
                </div>
            </Layout>
        )
    }
}