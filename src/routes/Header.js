
import './Header.scss';
import { Link } from 'react-router-dom';
import img from './klipartz.com.png';




export default function Header()
{
    return (<nav  className="navbar navbar-expand-md">
            <div className="container-md">
                <a className="navbar-brand d-flex align-items-center " href="#">
                   {console.log}
                    <img src={img} width={30} height={30} className='align-text-top '/>
                    <span aria-label="site title"> Site www</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNav" class="collapse navbar-collapse">
                <ul className="navbar-nav navbar-nav-scroll d-md-flex flex-md-row justify-content-center">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Accueil</a>
                    </li>
                   
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">Inscriptions</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><Link className="dropdown-item" to={`inscriptions`}>Liste</Link></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to={`ajouter`}>Ajouter</Link></li>
                            <li><Link className="dropdown-item" to={`editer`}>Modifier</Link></li>
                            <li><Link className="dropdown-item" to={`supprimer`}>Supprimer</Link></li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <Link to={`data`}>Data</Link>
                    </li>
                
                </ul>

                </div>

            </div>

    </nav>)

}