import React , {Component} from 'react'
export default class quickview extends Component{
    render(){
        return(
            <div id="quickviewModal" className="modal fade" role="dialog" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-6">
                    <div id="qv-images-container">
                      <div id="qv-product-cover">
                        <img id="main-thumbnail" src="#" alt="product-img" />
                      </div>
                      <div id="qv-thumbnails" className="owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                          <div className="owl-stage" />
                        </div>
                        <div className="owl-nav disabled">
                          <div className="owl-prev"><i className="material-icons" /></div>
                          <div className="owl-next"><i className="material-icons" /></div>
                        </div>
                        <div className="owl-dots disabled" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div id="qv-text-container">
                      <div id="qv-productname" />
                      <div id="qv-productprice" />
                      <div id="qv-spr-badge" />
                      <div id="qv-productdescription" />
                      <div id="qv-quantity" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
        )
    }
} 