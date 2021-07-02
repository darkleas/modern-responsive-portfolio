import Logo from '../data/img/manfirst.png';
import Button from '../components/Button';
function Header()
{
    return (

    <div className="about">
        <div className="row">
          <div className="col-md-6">
          <p className="text-muted text-sub-title">Let's explain myself</p>

            <h2 className="sub-title text-muted hakkimda">ABOUT</h2>
            <p className="text-muted aciklama">
            Etiam vel augue id nulla aliquet efficitur vel vel sapien. Integer et ipsum faucibus, auctor sapien eget, venenatis tellus. Quisque sit amet urna ac ligula lobortis condimentum quis non nisi. 
            </p>
            <br></br>
            <div className="about-buttons">
            <Button to="/projects/" text="Works" class="btn mr-1" />
            <Button to="/about/" text="Read more..." class="btn-outline" />
            </div>

          </div>
          <div className="col-md-6 logo-col">
            <img className="img-fluid" src={Logo}></img>
          </div>
        </div>
      </div>

    )
}
export default Header