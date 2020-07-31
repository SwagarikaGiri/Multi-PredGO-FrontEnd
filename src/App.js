import React from 'react';
// import logo from './logo.svg';

import './App.css';
import author1 from './assets/img/1.jpeg'
import author2 from './assets/img/2.jpeg'
import author3 from './assets/img/3.jpeg'
import author4 from './assets/img/4.jpeg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ontology:'',
      accession:''
    };
    this.onChangeValue=this.onChangeValue.bind(this)
    this.onInputChange=this.onInputChange.bind(this)
  }
  onChangeValue(event) {
    this.setState({ontology: event.target.value});
    
  }


  onInputChange(event){

    this.setState({accession: event.target.value});
  }

  render()
  {
    console.log(this.state)
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">Multi-PredGO</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#results">Get Results</a>
            </li>
             <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#team">Team</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  
    
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">Multi-PredGO is a multi-modal protein function prediction model that uses the protein sequence, protein structure, and protein-protein interaction network-based information to predict GO-based protein function. 
          As the protein function classes are dependent on each other, we have used a neuro-symbolic hierarchical classification model,
           which resembles the structure of Gene Ontology (GO), for effectively predicting the dependent protein functions.</div>
          {/* <div className="intro-heading text-uppercase"></div> */}
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
        </div>
        
      </div>
    </header>
  
    
    <section className="page-section" id="results">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Get Results</h2>
            <h3 className="section-subheading text-muted">This tool only needs protein sequence as an input. The source code of the model is available on <a href="https://github.com/SwagarikaGiri/Multi-PredGO"><h6>Github Link</h6></a> Example Accession Number : P53368, P27348</h3>
           
            <h6>Please enter the accession number and select the ontology</h6>
            <form>
  
  
      <input type="text" name="name" value={this.state.accession} onChange={this.onInputChange}/>
      <div onChange={this.onChangeValue}>
        <input type="radio" value="bp" name="ontology" /> BP
        <input type="radio" value="mf" name="ontology" /> MF
        <input type="radio" value="cc" name="ontology" /> CC
      </div>
    
    <input type="submit" value="Submit" />
  </form>
            
          </div>
          
        </div>
        <div className="row text-center">
       
        </div>
      </div>
    </section>
    <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={author1} alt=""/>
              <h4>Swagarika J Giri</h4>
              <p className="text-muted">Researcher (M. Tech IIT Patna)</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={author2} alt=""/>
              <h4>Pratik Dutta</h4>
              <p className="text-muted">Researcher (Ph. D IIT Patna) </p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={author4} alt=""/>
              <h4>Parth Halani </h4>
              <p className="text-muted">Researcher (B. Tech IIIT Guwahati) </p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={author3} alt=""/>
              <h4>Sriparna Saha</h4>
              <p className="text-muted">Assoc. Prof IIT Patna</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
         
       
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">Pratik Dutta acknowledges Visvesvaraya PhD Scheme for Electronics and IT, an initiative of Ministry of Electronics and Information Technology (MeitY), Government of India for fellowship support. Dr. Sriparna Saha gratefully acknowledges the Young Faculty Research Fellowship (YFRF) Award, supported by Visvesvaraya PhD scheme for Electronics and IT, Ministry of Electronics and Information Technology (MeitY), Government of India, being implemented by Digital India Corporation (formerly Media Lab Asia) for carrying out this research.  </p>
          </div>
        </div>
      </div>
    </section>
  
    
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </section>
  
    
    
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; MULTI-PREDGO 2020</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#something">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#something">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
      </div>
    );

  }


  
}

export default App;
