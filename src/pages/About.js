import React from 'react';
import Logo from '../data/img/manfirst.png';
import Button from '../components/Button';
function About()
{
    return (
        <section className="aboutpage"> 
          <div className="container">
          <div className="about">
        <div className="row">
          <div className="col-md-6">
          <p className="text-muted text-sub-title">Let's explain myself</p>

            <h2 className="sub-title text-muted hakkimda">ABOUT</h2>
            <p className="text-muted aciklama">
            Etiam vel augue id nulla aliquet efficitur vel vel sapien. Integer et ipsum faucibus, auctor sapien eget, venenatis tellus. Quisque sit amet urna ac ligula lobortis condimentum quis non nisi. 
            </p><br></br>
            <p className="text-muted aciklama">
            Etiam vel augue id nulla aliquet efficitur vel vel sapien. Integer et ipsum faucibus, auctor sapien eget, venenatis tellus. Quisque sit amet urna ac ligula lobortis condimentum quis non nisi. 

            </p>
            <p className="text-muted aciklama">
            Etiam vel augue id nulla aliquet efficitur vel vel sapien. Integer et ipsum faucibus, auctor sapien eget, venenatis tellus. Quisque sit amet urna ac ligula lobortis condimentum quis non nisi. 

            </p>
            <br></br>
            <div className="about-buttons">
            <a rel="noreferrer" target="_blank" href="https://github.com/darkleas"  class="btn mr-1" > <i class="fab fa-github"></i> Github</a>
            <a rel="noreferrer" target="_blank" href="https://twitter.com/burhankocadag0"  class="btn mr-1" > <i class="fab fa-twitter"></i> Twitter</a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/burhan-kocada%C4%9F-49a3331a5/"  class="btn mr-1" > <i class="fab fa-linkedin"></i> Linkedin</a>

            </div>

          </div>
          <div className="col-md-6 logo-col">
            <img className="img-fluid" src={`${process.env.PUBLIC_URL + Logo}`}></img>
          </div>
        </div>
      </div>
          </div>
        </section>
    );
}
export default About