// Home.js
// outputs home page

import React, {Component} from 'react';
import NavBar from './NavBar';

export default class Home extends Component {
  render() {
    return (
      <>
        <NavBar></NavBar>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div id="content">
                <h1>Climb!</h1>
                <h3>Climbing &mdash; easier than ever before.</h3>
                <hr/>
                <form action="/signup">
                  <div class="form-group">
                    <button class="btn btn-default btn-lg">Get Started <i class="fa fa-hand-rock"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};