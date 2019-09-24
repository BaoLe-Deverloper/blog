import React, { Component } from "react"
import Layout from "../layouts/layout"
import Projects from './../project/projects'
import Skills from './../skills'
import Languages from "../languages"
import Educations from "../educations"
import Contacts from "../contacts"
import About from "../about"

import LastProjects from "../project/lastProducts"
export default class home_page extends Component {
  
  render() {
    return (
      <Layout>
        <div className="container sections-wrapper">
          <div className="row">
            <div className="primary col-lg-8 col-12">
              <About>
              Write a brief intro about yourself. It's a good idea to include your personal interests and hobbies as well. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Commodo ligula eget dolor. Aenean massa.
              </About>
              <section className="latest section">
                <div className="section-inner">
                  <h2 className="heading">Latest Projects</h2>
                  <div className="content">
                    <LastProjects/>
                    <hr className="divider" />
                    
                    <Projects/>
                   
                     
                  </div>{/*//content*/}
                </div>{/*//section-inner*/}
              </section>{/*//section*/}
              <section className="projects section">
                <div className="section-inner">
                  <h2 className="heading">Other Projects</h2>
                  <div className="content">
                    <div className="item">
                      <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/" target="_blank">Pillar - Free Bootstrap 4 Resume/CV Template for Developers</a> <span className="badge badge-theme">Free</span></h3>
                      <p className="summary">Provide a brief description of your project. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatu.</p>
                      <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/" target="_blank"><i className="fas fa-external-link-alt" />Download Now</a></p>
                    </div>{/*//item*/}
                    <div className="item">
                      <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/speciality/devblog-free-bootstrap-4-blog-template-for-developers/" target="_blank">DevBlog - Free Bootstrap 4 Blog Template for Developers</a> <span className="badge badge-theme">Free</span></h3>
                      <p className="summary">Provide a brief description of your project. Maecenas ornare ultricies risus, in fermentum augue consectetur in. Vestibulum vitae mauris iaculis, sollicitudin velit in, molestie nulla. </p>
                      <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/speciality/devblog-free-bootstrap-4-blog-template-for-developers/" target="_blank"><i className="fas fa-external-link-alt" />Download Now</a></p>
                    </div>{/*//item*/}
                    <div className="item">
                      <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank">Nova - Free App Landing Page Template for App Developers</a> <span className="badge badge-theme">Free</span></h3>
                      <p className="summary">Provide a brief description of your project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel purus enim. Etiam tortor felis, fermentum ac ultrices sed.</p>
                      <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank"><i className="fas fa-external-link-alt" />Download Now</a></p>
                    </div>{/*//item*/}
                    <a className="btn btn-cta-secondary" href="#">More on CoderWall <i className="fas fa-chevron-right" /></a>
                  </div>{/*//content*/}
                </div>{/*//section-inner*/}
              </section>{/*//section*/}
              <section className="experience section">
                <div className="section-inner">
                  <h2 className="heading">Work Experience</h2>
                  <div className="content">
                    <div className="item">
                      <h3 className="title">Co-Founder &amp; Lead Developer - <span className="place"><a href="#">Startup Hub</a></span> <span className="year">(2014 - Present)</span></h3>
                      <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.</p>
                    </div>{/*//item*/}
                    <div className="item">
                      <h3 className="title">Software Engineer - <span className="place"><a href="#">Google</a></span> <span className="year">(2013 - 2014)</span></h3>
                      <p>Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
                    </div>{/*//item*/}
                    <div className="item">
                      <h3 className="title">Software Engineer - <span className="place"><a href="#">eBay</a></span> <span className="year">(2012 - 2013)</span></h3>
                      <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                    </div>{/*//item*/}
                  </div>{/*//content*/}
                </div>{/*//section-inner*/}
              </section>{/*//section*/}
              <section className="github section">
                <div className="section-inner">
                  <h2 className="heading">My GitHub</h2>
                  <p>My GitHub contribution graph calendar 
                </p><div id="github-graph" className="github-graph">
                  </div>{/*//github-graph*/}
                  <p>
                  My activity on github
                  </p><div id="ghfeed" className="ghfeed">
                  </div>{/*//ghfeed*/}
                </div>{/*//secton-inner*/}
              </section>{/*//section*/}
            </div>{/*//primary*/}
            <div className="secondary col-lg-4 col-12">
              <Contacts/>
              <Skills/>
              <aside className="testimonials aside section">
                <div className="section-inner">
                  <h2 className="heading">Testimonials</h2>
                  <div className="content">
                    <div className="item">
                      <blockquote className="quote">
                        <p><i className="fas fa-quote-left" />James is an excellent software engineer and he is passionate about what he does. You can totally count on him to deliver your projects!</p>
                      </blockquote>
                      <p className="source"><span className="name">Tim Adams</span><br /><span className="title">Curabitur commodo</span></p>
                    </div>{/*//item*/}
                    <p><a className="more-link" href="#"><i className="fas fa-external-link-alt" />More on Linkedin</a></p>
                  </div>{/*//content*/}
                </div>{/*//section-inner*/}
              </aside>{/*//section*/}
             <Educations/>
             <Languages/>
              <aside className="blog aside section">
                <div className="section-inner">
                  <h2 className="heading">Latest Blog Posts</h2>
                  <p>You can use Sascha Depold's <a href="https://github.com/sdepold/jquery-rss" target="_blank">jQuery RSS plugin</a> to pull in your blog post feeds.</p>
                  <div id="rss-feeds" className="content">
                  </div>{/*//content*/}
                </div>{/*//section-inner*/}
              </aside>{/*//section*/}
              <aside className="list music aside section">
                <div className="section-inner">
                  <h2 className="heading">Favourite coding music</h2>
                  <div className="content">
                    <ul className="list-unstyled">
                      <li><i className="fas fa-headphones" /> <a href="#">Etiam hendrerit urna nunc</a></li>
                      <li><i className="fas fa-headphones" /> <a href="#">Ut sollicitudin in mauris non auctor</a></li>
                      <li><i className="fas fa-headphones" /> <a href="#">Etiam hendrerit urna nunc</a></li>
                      <li><i className="fas fa-headphones" /> <a href="#">Duis et felis bibendum</a></li>
                    </ul>
                  </div>{/*//content*/}
                </div>{/*//section-inner*/}
              </aside>{/*//section*/}
              <aside className="list conferences aside section">
                <div className="section-inner">
                  <h2 className="heading">Conferences</h2>
                  <div className="content">
                    <ul className="list-unstyled">
                      <li><i className="far fa-calendar-alt" /> <a href="#" target="_blank">WWDC 2020</a> (San Francisco)</li>
                      <li><i className="far fa-calendar-alt" /> <a href="#">Hive</a> (Seattle)</li>
                    </ul>
                  </div>{/*//content*/}
                </div>{/*//section-inner*/}
              </aside>{/*//section*/}
              <aside className="credits aside section">
                <div className="section-inner">
                  <h2 className="heading">Credits</h2>
                  <div className="content">
                    <ul className="list-unstyled pb-2">
                      <li><a href="https://getbootstrap.com/" target="_blank"><i className="fas fa-external-link-alt" />Bootstrap</a></li>
                      <li><a href="https://fortawesome.github.io/Font-Awesome/" target="_blank"><i className="fas fa-external-link-alt" />FontAwesome</a></li>
                      <li><a href="https://jquery.com/" target="_blank"><i className="fas fa-external-link-alt" />jQuery</a></li>
                      <li><a href="https://github.com/IonicaBizau/github-calendar" target="_blank"><i className="fas fa-external-link-alt" />GitHub Calendar Plugin</a></li>
                      <li><a href="https://caseyscarborough.com/projects/github-activity/" target="_blank"><i className="fas fa-external-link-alt" />GitHub Activity Stream</a></li>
                      <li><a href="https://github.com/sdepold/jquery-rss" target="_blank"><i className="fas fa-external-link-alt" />jQuery RSS</a></li>
                      <li>Profile image: <a href="https://www.flickr.com/photos/dotbenjamin/2577394151" target="_blank">Ben Smith</a></li>
                    </ul>
                    <hr />
                    <p className="pt-2">This Bootstrap 4 portfolio template is handcrafted by UX designer <a href="https://twitter.com/3rdwave_themes" target="_blank">Xiaoying Riley</a> at <a href="https://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a> for developers and is <strong>FREE</strong> under the <a className="dotted-link" href="https://creativecommons.org/licenses/by/3.0/" target="_blank">Creative Commons Attribution 3.0 License</a></p>
                    <p>If you’d like to <strong>use this template without the attribution link</strong>, you can <a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap-portfolio-theme-for-web-developers/" target="_blank">buy the commercial license</a>.</p>
                    <a className="btn btn-cta-primary btn-download" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap-portfolio-theme-for-web-developers/" target="_blank"><i className="fas fa-download" /> I want to download</a>
                    <hr />
                    <h5 className="subheading pt-3">Want more free Bootstrap themes and templates?</h5>
                    <p>Check out our <a href="https://themes.3rdwavemedia.com/bootstrap-templates/free/">collection of free themes and templates.</a></p>
                    <p>Follow <a href="https://twitter.com/3rdwave_themes" target="_blank">Xiaoying</a> on twitter so you don't miss any future freebies!</p>
                    <a className="btn btn-cta-secondary btn-follow" href="https://twitter.com/3rdwave_themes" target="_blank"><i className="fab fa-twitter" /> Follow on twitter</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}