import Logo from '../data/img/man.jpg';
import Button from '../components/Button';
function Header()
{
    return (
        <header className="header">
        <div className="row">
          <div className="col-md-6">
            <p className="white title">
              Hi, this is 
            </p>
            <h1 className="purple name">DarkLeas</h1>
            <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nibh eu accumsan maximus, magna ligula varius lacus, sagittis imperdiet turpis erat facilisis mi. Mauris efficitur ac massa at malesuada.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

            </p>
            <br></br>
            <Button to="/contact/" text="Contact" class="btn" />
          </div>
          <br></br>
          <br></br>

          <div className="col-md-6 logo-col">
            <img className="img-fluid logo" alt="burhan kocadağ" src={Logo}></img>
          </div>
        </div>
      </header>

    )
}
export default Header