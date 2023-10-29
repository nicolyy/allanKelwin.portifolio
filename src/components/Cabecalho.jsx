import { Link } from "react-router-dom";

//Importando o CSS


/*export default function Cabecalho()*/

    function Cabecalho(){
        return(
            <>
                 <header className="nav">
                    <Link to="/">SOBRE MIM</Link>
                    <Link to="/">CONTATO</Link>
                </header>
            </>
        )
    }
export default Cabecalho;