import React, {Component} from 'react';
import './App.css';

//Navigation bar for other pages on our webapp
class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="/">
          <img src="logo192.png" style={{"width": "32px"}}/>
        </a>
        <a class="navbar-brand" href="/"><strong>Climb!</strong></a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="/">Competitions</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Climbs</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><strong>Actions</strong></a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown">
                      <a class="dropdown-item" href="/">Registrations</a>
                      <a class="dropdown-item" href="/">Scores</a>
                      <a class="dropdown-item" href="/">Results</a>
                  </div>
                </li>
            </ul>
          </div>
        </nav>
    );
  }
}

//Centerpiece of our home page and gives quick links for users (see user story)
class Jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron" style={{"background-color": "#f8f9fa"}}>
        <p class="lead" style={{"font-size": "36px"}}>Climbing &mdash; easier than ever before.</p>
        <hr class="my-4" />
        <div class="btn-group d-flex">
            <a class="btn btn-outline-secondary btn-lg w-100" href="/">Registrations</a>
            <a class="btn btn-outline-secondary btn-lg w-100" href="/upload">Upload</a>
            <a class="btn btn-outline-secondary btn-lg w-100" href="/">Portal</a>
        </div>
      </div>
    );
  }
}

//Renders page
export default class App extends Component {
  render () {
    return (
      <div>
        <NavBar></NavBar>
      <div class="container w-75 d-flex h-100 justify-content-center">
        <div class="row my-auto">
          <Jumbotron></Jumbotron>
        </div>
      </div>
   </div>
    );
  }
}
