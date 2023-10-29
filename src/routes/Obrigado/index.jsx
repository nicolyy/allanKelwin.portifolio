import '../../styles/obrigado.css'
import enviado from '../../assets/enviado.jpg'

export default function Error() {


    return (
        <>
        <main className='obrigado-principal'>
            <div className='obrigado-conteudo'>
                <h1>Obrigado</h1>
                <p >Sua mensagem foi enviada!</p>
                <p >Em breve entraremos em contato.</p>
            </div>
            <img className='img-enviado' src={enviado} alt="" />
        </main>
        </>
    );
}