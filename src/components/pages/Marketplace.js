import React, { Component } from 'react'
import a1 from '../../images/a1.jpg'
import a2 from '../../images/a2.jpg'
import a3 from '../../images/a3.jpg'
import a4 from '../../images/a4.jpg'
import a5 from '../../images/a5.jpg'
import a6 from '../../images/a6.jpg'

class Marketplace extends Component {
    render() {
        return (
            
      <div className="row projects">
        <div className="col-md-8 ">
          <div className="hpanel hgreen projects-separtor">
            <div className="panel-body">
              <span className="label label-success pull-right">R600 Short</span>
              <div className="row">
                <div className="col-sm-8 animated-panel zoomIn animation" >
                  <h4>
                    <a href="">Payday loan</a>
                    <small className="muted padding-text">12hrs left! </small>
                  </h4>


                  <div className="market-header">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has...
                  </div>

                  <div className="row">
                    <div className="col-sm-3 animated-panel zoomIn animation" >
                      <div className="project-label">INTEREST</div>
                      <small>12.5%</small>
                    </div>
                    <div className="col-sm-3 animated-panel zoomIn animation" >
                      <div className="project-label">RISK</div>
                      <i className="fa fa-circle text-success"></i>
                    </div>
                    <div className="col-sm-3 animated-panel zoomIn animation" >
                      <div className="project-label">PERIOD</div>
                      <small>1 Month(s)</small>
                    </div>
                    <div className="col-sm-3 animated-panel zoomIn animation" >
                      <div className="project-label">PROGRESS</div>
                      <div className="progress m-t-xs full progress-small">
                        <div style={{width: 95}} aria-valuemax="100" title="95% completed" aria-valuemin="0" aria-valuenow="95" role="progressbar" className=" progress-bar progress-bar-success">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 project-info animated-panel zoomIn animation" >
                  <div className="project-action m-t-md">

                  </div>
                  <div className="project-value">
                    <h2 className="text-info">
                      R9,500.00
                    </h2>
                  </div>
                  <div className="project-people">
                    <img alt="logo_image" className="img-circle" data-toggle="tooltip" data-placement="top" title="R7500@9.5%" src={a5} />
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <div className="social-talk">
                <div className="media social-profile clearfix">
                  <a className="pull-left">
                    <img src={a1} alt="profile-picture" />
                  </a>

                  <div className="media-body">
                    <span className="font-bold">@invtGuru</span>
                    <small className="text-muted padding-text">21.07.2015</small>

                    <div className="social-content">
                      R2500
                      <span className="fa fa-angle-double-right padding-text"></span> 12.5% interest.
                      <span className="fa fa-star-half-o"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-talk">
                <div className="media social-profile clearfix">
                  <a className="pull-left">
                    <img src={a6} alt="profile-picture" />
                  </a>

                  <div className="media-body">
                    <span className="font-bold">@chinaman</span>
                    <small className="text-muted padding-text">21.07.2015</small>

                    <div className="social-content">
                      R900
                      <span className="fa fa-angle-double-right padding-text"></span> 7% interest.
                      <span className="fa fa-star-o"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-talk">
                <div className="media social-profile clearfix">
                  <a className="pull-left">
                    <img src={a3} alt="profile-picture" />
                  </a>

                  <div className="media-body">
                    <span className="font-bold">@banknotes97</span>
                    <small className="text-muted padding-text">14.07.2015</small>
                    <div className="social-content">
                      R5200
                      <span className="fa fa-angle-double-right padding-text"></span> 11% interest.
                      <span className="fa fa-star"></span>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="form-inline ">
                <div className="row">
                  <div className="form-group">
                    <div className="col-xs-3">
                      <div className="input-group">
                        <div className="input-group-addon">R</div>
                        <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount"  />
                      </div>
                    </div>
                    <div className="col-xs-3">
                      <div className="input-group">
                        <input type="text" className="form-control interest" id="interest" placeholder="%"  />
                        <div className="input-group-addon">%</div>
                      </div>
                    </div>
                    <div className="col-xs-2">
                      <a href="register.html" className="btn btn-default">
                        <span className="fa fa-check"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hpanel hgreen projects-separtor">
            <div className="panel-body">
              <span className="label label-success pull-right">R7,000 Short</span>
              <div className="row">
                <div className="col-sm-8 animated-panel zoomIn animation" >
                  <h4><a href="">Business loan</a>
                    <small className="muted padding-text"> 26hrs left! </small>
                  </h4>

                  <div className="market-header">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has...
                  </div>

                  <div className="row">
                    <div className="col-sm-3 animated-panel zoomIn animation" >
                      <div className="project-label">INTEREST</div>
                      <small>8%</small>
                    </div>
                    <div className="col-sm-3 animated-panel zoomIn animation">
                      <div className="project-label">RISK</div>
                      <i className="fa fa-circle text-success"></i>
                    </div>
                    <div className="col-sm-3 animated-panel zoomIn animation">
                      <div className="project-label">PERIOD</div>
                      <small>3 Month(s)</small>
                    </div>
                    <div className="col-sm-3 animated-panel zoomIn animation">
                      <div className="project-label">PROGRESS</div>
                      <div className="progress m-t-xs full progress-small">
                        <div style={{width: 12}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="12" role="progressbar" className=" progress-bar progress-bar-success">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 project-info animated-panel zoomIn animation">
                  <div className="project-action m-t-md">

                  </div>
                  <div className="project-value">
                    <h2 className="text-info">
                      R20,000.00
                    </h2>
                  </div>
                  <div className="project-people">
                    <img alt="logo" data-toggle="tooltip" data-placement="top" title="R50@10.5%" className="img-circle" src={a1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <div className="social-talk">
                <div className="media social-profile clearfix">
                  <a className="pull-left">
                    <img src={a5} alt="profile-picture" />
                  </a>

                  <div className="media-body">
                    <span className="font-bold">@batmanTrader</span>
                    <small className="text-muted padding-text">21.07.2015</small>

                    <div className="social-content">
                      R8200
                      <span className="fa fa-angle-double-right padding-text"></span> 12.5% interest.
                      <span className="fa fa-star-half-o"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="social-talk">
                <div className="media social-profile clearfix">
                  <a className="pull-left">
                    <img src={a3} alt="profile-picture" />
                  </a>

                  <div className="media-body">
                    <span className="font-bold">@banknotes97</span>
                    <small className="text-muted padding-text">14.07.2015</small>
                    <div className="social-content">
                      R5200
                      <span className="fa fa-angle-double-right padding-text"></span> 11% interest.
                      <span className="fa fa-star"></span>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="form-inline ">
                <div className="row">
                  <div className="form-group">
                    <div className="col-xs-3">
                      <div className="input-group">
                        <div className="input-group-addon">R</div>
                        <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount"  />
                      </div>
                    </div>
                    <div className="col-xs-3">
                      <div className="input-group">
                        <input type="text" className="form-control interest" id="interest" placeholder="%"  />
                        <div className="input-group-addon">%</div>
                      </div>
                    </div>
                    <div className="col-xs-2">
                      <a href="register.html" className="btn btn-default">
                        <span className="fa fa-check"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hpanel hwarning projects-separtor">
            <div className="panel-body">
              <span className="label label-warning pull-right">R45,000 Short</span>
              <div className="row">
                <div className="col-sm-8 animated-panel zoomIn" >
                  <h4><a href="">Home upgrade </a>
                    <small className="muted padding-text">2hrs left! </small>
                  </h4>

                  <div className="market-header">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has...
                  </div>

                  <div className="row">
                    <div className="col-sm-3 animated-panel zoomIn" >
                      <div className="project-label">INTEREST</div>
                      <small>14.5%</small>
                    </div>
                    <div className="col-sm-3 animated-panel zoomIn animation">
                      <div className="project-label">RISK</div>
                      <i className="fa fa-circle text-warning"></i>
                    </div>
                    <div className="col-sm-3 animated-panel zoomIn animation">
                      <div className="project-label">PERIOD</div>
                      <small>36 Month(s)</small>
                    </div>
                    <div className="col-sm-3 animated-panel zoomIn animation">
                      <div className="project-label">PROGRESS</div>
                      <div className="progress m-t-xs full progress-small">
                        <div style={{width: 75}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" role="progressbar" className=" progress-bar progress-bar-success">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 project-info animated-panel zoomIn animation" >
                  <div className="project-action m-t-md">

                  </div>
                  <div className="project-value">
                    <h2 className="text-info">
                      R98,527.00
                    </h2>
                  </div>
                  <div className="project-people">
                    <img alt="logo" className="img-circle" src={a1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <div className="social-talk">
                <div className="media social-profile clearfix">
                  <a className="pull-left">
                    <img src={a1} alt="profile-picture" />
                  </a>

                  <div className="media-body">
                    <span className="font-bold">@invtGuru</span>
                    <small className="text-muted padding-text">21.07.2015</small>

                    <div className="social-content">
                      R2500
                      <span className="fa fa-angle-double-right padding-text"></span> 12.5% interest.
                      <span className="fa fa-star-half-o"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-talk">
                <div className="media social-profile clearfix">
                  <a className="pull-left">
                    <img src={a6} alt="profile-picture" />
                  </a>

                  <div className="media-body">
                    <span className="font-bold">@chinaman</span>
                    <small className="text-muted padding-text">21.07.2015</small>

                    <div className="social-content">
                      R900
                      <span className="fa fa-angle-double-right padding-text"></span> 7% interest.
                      <span className="fa fa-star-o"></span>
                    </div>
                  </div>
                </div>
              </div>

              <hr/>
              <div className="form-inline ">
                <div className="row">
                  <div className="form-group">
                    <div className="col-xs-3">
                      <div className="input-group">
                        <div className="input-group-addon">R</div>
                        <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount"  />
                      </div>
                    </div>
                    <div className="col-xs-3">
                      <div className="input-group">
                        <input type="text" className="form-control interest" id="interest" placeholder="%"  />
                        <div className="input-group-addon">%</div>
                      </div>
                    </div>
                    <div className="col-xs-2">
                      <a href="register.html" className="btn btn-default">
                        <span className="fa fa-check"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hpanel hgreen projects-separtor">
            <div className="panel-body">
              <span className="label label-success pull-right">R56,000 Short</span>
              <div className="row">
                <div className="col-sm-8 animated-panel zoomIn" >
                  <h4><a href="">Loan consolidation</a>
                    <small className="muted padding-text"> 7hrs left! </small>
                  </h4>

                  <div className="market-header">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has...
                  </div>

                  <div className="row">
                    <div className="col-sm-3 animated-panel zoomIn" >
                      <div className="project-label">INTEREST</div>
                      <small>8%</small>
                    </div>
                    <div className="col-sm-3 animated-panel zoomIn animation">
                      <div className="project-label">RISK</div>
                      <i className="fa fa-circle text-success"></i>
                    </div>
                    <div className="col-sm-3 animated-panel zoomIn animation">
                      <div className="project-label">PERIOD</div>
                      <small>12 Month(s)</small>
                    </div>
                    <div className="col-sm-3 animated-panel zoomIn animation">
                      <div className="project-label">PROGRESS</div>
                      <div className="progress m-t-xs full progress-small">
                        <div style={{width: 53}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="53" role="progressbar" className=" progress-bar progress-bar-success">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 project-info animated-panel zoomIn animation" >
                  <div className="project-action m-t-md">

                  </div>
                  <div className="project-value">
                    <h2 className="text-info">
                      R75,000.00
                    </h2>
                  </div>
                  <div className="project-people">
                    <img alt="logo" className="img-circle" src={a1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <div className="social-talk">
                <div className="media social-profile clearfix">
                  <a className="pull-left">
                    <img src={a1} alt="profile-picture" />
                  </a>

                  <div className="media-body">
                    <span className="font-bold">@invtGuru</span>
                    <small className="text-muted padding-text">21.07.2015</small>

                    <div className="social-content">
                      R2500
                      <span className="fa fa-angle-double-right padding-text"></span> 12.5% interest.
                      <span className="fa fa-star-half-o"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-talk">
                <div className="media social-profile clearfix">
                  <a className="pull-left">
                    <img src={a6} alt="profile-picture" />
                  </a>

                  <div className="media-body">
                    <span className="font-bold">@chinaman</span>
                    <small className="text-muted padding-text">21.07.2015</small>

                    <div className="social-content">
                      R900
                      <span className="fa fa-angle-double-right padding-text"></span> 7% interest.
                      <span className="fa fa-star-o"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-talk">
                <div className="media social-profile clearfix">
                  <a className="pull-left">
                    <img src={a3} alt="profile-picture" />
                  </a>

                  <div className="media-body">
                    <span className="font-bold">@banknotes97</span>
                    <small className="text-muted padding-text padding-text">14.07.2015</small>
                    <div className="social-content">
                      R5200 
                      <span className="fa fa-angle-double-right padding-text"></span> 11% interest.
                      <span className="fa fa-star"></span>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="form-inline ">
                <div className="row">
                  <div className="form-group">
                    <div className="col-xs-3">
                      <div className="input-group">
                        <div className="input-group-addon">R</div>
                        <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount"  />
                      </div>
                    </div>
                    <div className="col-xs-3">
                      <div className="input-group">
                        <input type="text" className="form-control interest" id="interest" placeholder="%"  />
                        <div className="input-group-addon">%</div>
                      </div>
                    </div>
                    <div className="col-xs-2">
                      <a href="register.html" className="btn btn-default">
                        <span className="fa fa-check"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="marketplace-sidebar">
              <span className="label label-success">Investor's Corner</span>
            <ul>
              <li>Free loan bidding</li>
              <li>Free transfers to Boleka account</li>
              <li>Free account verification</li>
            </ul>
            
              <div className="description">
                No hidden fees. Lending to Boleka borrowers is a straightforward process.
                <br/> You only pay once as show below.
              </div>
              <hr />
              <h4>1.2% Service fee.</h4>
              <hr />
              <small>
                <ul className="list-unstyled text-xs">
                  <li>
                    <span className="fa fa-star"> Amount &amp; interest rate accepted. </span>
                  </li>
                  <li>
                    <span className="fa fa-star-half-o"> Amount &amp; interest rate partially accepted. </span>
                  </li>
                  <li>
                    <span className="fa fa-star-o"> Amount &amp; interest rate pending. </span>
                  </li>
                </ul>
              </small>
          </div>

        </div>
      </div>
        )
    }
}

export default Marketplace