import { NavLink } from 'react-router-dom';
  
function Footer()
{    
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p className="text-muted footer-title">Joe Doe</p>
                        <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur ac massa at malesuada.
            </p>
                    </div>
                    <div className="col-md-3">
                    <p className="text-muted footer-title">Important Pages</p>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About Me</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <p className="text-muted footer-title">Contact Information</p>

                    <a href="tel:+905469619221" className="text-muted">Phone: +1 555 555 5555</a><br></br>
                    <a href="mailto:iletisim@burhankocadag.com" className="text-muted">Mail: burhankcd@gmail.com</a>

                    </div>
                    <div className="col-md-3">
                    <p className="text-muted footer-title">Social Media</p>

                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/burhan-kocada%C4%9F-49a3331a5/" className="text-muted">Linkedin</a><br></br>
                    <a rel="noreferrer" target="_blank" href="https://twitter.com/burhankocadag0" className="text-muted">Twitter</a><br></br>
                    <a rel="noreferrer" target="_blank" href="https://github.com/darkleas" className="text-muted">Github</a><br></br>

                    </div>
                </div>
            </div>

        </footer>
    );
}
export default Footer