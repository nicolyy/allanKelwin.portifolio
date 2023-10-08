import { Link } from "react-router-dom";
import './Cabecalho.css';

/*export default function Cabecalho()*/

    function Cabecalho(){
        return(
            <>
                <header>
                        <ul>
                            <li className="nav-cabecalho"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-cabecalho">|</li>
                            <li className="nav-cabecalho"><Link className="nav-link" to='/produtos'>Produtos</Link></li>

                        </ul>
                </header>
            </>
        )
    }
export default Cabecalho;