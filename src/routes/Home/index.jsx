import { Link } from "react-router-dom";
import '../../script/script.js'
// Import CSS
import '../../styles/styles.css'

//Import dos Links

//Import das imagens
import Quadra from '../../assets/Framequadra.png'
import Google from '../../assets/google.png'
import Linkedin from '../../assets/linkedin.png'
import Whatsapp from '../../assets/whatsapp.png'
import Allan from '../../assets/Rectangle 4allan.png'
import Img1 from '../../assets/Group 1img1.png'
import Img2 from '../../assets/Group 2img2.png'
import Img3 from '../../assets/Group 3img3.png'
import Img4 from '../../assets/Group 4img4.png'
import Seta from '../../assets/seta.png'



export default function Home() {
  return (
    <>
      <main className="principal">
        <article className="principal-conteudo">
            <h1 className="principal-titulo principal-item" >Allan Kelwin</h1>
            <p className="principal-subtitulo principal-item">Profissional de Educação Fisica </p>
            <p className="principal-texto principal-item">"O esporte tem a capacidade de transformar pensamentos, 
                quebrar paradigmas, educando os estudantes pelo movimento e interação social". Diogo Diedrich</p>
            <Link to = "" className="btn-conhecer">CONHECER</Link>
        </article>
        <img className="principal-img" src={Quadra} alt = "Quatro pessoas praticando esportes em uma quadra escolar" />
      </main>

      <section className="sobre-mim" id="sobre-mim">
        <div className="sobre-mim-box">
            <img className="sobre-mim-img " src= {Allan} alt="Imagem do profissional Allan Kelwin"/>
            <h2 className="sobre-mim-titulo">Sobre Mim</h2>
            <p className="sobre-mim-texto">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                 industry's standard dummy text ever since the 1500s, when an unknown printer took 
                 a galley of type and scrambled it to make a type specimen book. It has survived not 
                 only five centuries, but also the leap is simply dummy text of the printing and 
                 typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                 since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                 make a type speci</p>
        </div>
        <div className="curriculo-box">
            <details className="curriculo opcao1">
                <summary className="summary-titulo">FORMAÇÃO
                    <img src={Seta} alt="Seta para abrir"/>
                </summary>
                <div className="summary-open">
                    <p className="summary-texto">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took 
                        a galley of type and scrambled it to make a type specimen book</p>
                </div>
            </details>

            <details className="curriculo opcao2">
                <summary className="summary-titulo">IDIOMAS
                   <img src={Seta} alt="Seta para abrir"/>
                </summary>
                <div className="summary-open">
                    <p className="summary-texto">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took 
                        a galley of type and scrambled it to make a type specimen book</p>
                </div>
            </details>
            <details className="curriculo opcao3">
                <summary className="summary-titulo">EXPERIÊNCIA
                   <img src={Seta} alt="Seta para abrir"/>
                </summary>
                <div className="summary-open">
                    <p className="summary-texto">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took 
                        a galley of type and scrambled it to make a type specimen book</p>
                </div>
            </details>
            <details className="curriculo opcao4">
                <summary className="summary-titulo">HABILIDADES
                   <img src={Seta} alt="Seta para abrir"/>
                </summary>
                <div className="summary-open">
                    <p className="summary-texto">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took 
                        a galley of type and scrambled it to make a type specimen book</p>
                </div>
            </details>
            </div>
      </section>
     
     <section >
        <div className="professor-alunos"> 
            <div className="colum1-professor">
                <h1 className="professor-titulo">Alguma coisa Aqui</h1>
                <p className="professor-texto">is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived 
                     not only five centuries, but also the leap is simply dummy text 
                     of the printing and typesetting industry. Lorem Ipsum has been 
                     the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it
                      to make a type speci</p>
            </div>
            <div className="colum2-professor">

            </div>
        </div>
     </section>







      <section className="projetos">
          <article className="projeto-right linha1">
              <div className="conteudo-projeto">
                  <h2 className="projeto-titulo">Titulo do projeto aqui</h2>
                  <p className="projeto-texto">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                      and scrambled it to make a type specimen book. It has survived not only five centuries, 
                      but also the leap is simply dummy text of the printing and typesetting industry. Lorem 
                      Ipsum has been the industry's standard dummy text ever since the 1500s, ]
                      when an unknown printer took a gall</p>
              </div>
              <figure>
              <img className="projeto-img" src={Img1} alt=""/>
              </figure>
          </article>
          <article className="projeto-left linha2">
              <div className="conteudo-projeto">
                  <h2 className="projeto-titulo">Titulo do projeto aqui</h2>
                  <p className="projeto-texto">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                      and scrambled it to make a type specimen book. It has survived not only five centuries, 
                      but also the leap is simply dummy text of the printing and typesetting industry. Lorem 
                      Ipsum has been the industry's standard dummy text ever since the 1500s, ]
                      when an unknown printer took a gall</p>
              </div>
              <figure>
              <img className="projeto-img" src={Img2} alt=""/>
              </figure>
          </article>
          <article className="projeto-right linha3">
              <div className="conteudo-projeto">
                  <h2 className="projeto-titulo">Titulo do projeto aqui</h2>
                  <p className="projeto-texto">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                      and scrambled it to make a type specimen book. It has survived not only five centuries, 
                      but also the leap is simply dummy text of the printing and typesetting industry. Lorem 
                      Ipsum has been the industry's standard dummy text ever since the 1500s, ]
                      when an unknown printer took a gall</p>
              </div>
              <figure>
              <img className="projeto-img" src={Img3} alt=""/>
              </figure>
          </article>
          <article className="projeto-left linha4">
              <div className="conteudo-projeto">
                  <h2 className="projeto-titulo">Titulo do projeto aqui</h2>
                  <p className="projeto-texto">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                      and scrambled it to make a type specimen book. It has survived not only five centuries, 
                      but also the leap is simply dummy text of the printing and typesetting industry. Lorem 
                      Ipsum has been the industry's standard dummy text ever since the 1500s, ]
                      when an unknown printer took a gall</p>
              </div>
              <figure>
              <img className="projeto-img" src={Img4} alt=""/>
              </figure>
          </article>
      </section>

          <section className="form" id="contato">
          <div className="contato" >
                  <div className="colum1">
                    <form action="https://formsubmit.co/kelwinsantos@hotmail.com"  className="form-contato" id="formulario" method="POST" name="formulario" >
                        <div className="form-linha-1">
                            <input className="inp-name input-contato" type="text" name="nome" id="nome" placeholder="Nome Completo" required/>
                            <input className="inp-tel input-contato" type="tel" name="telefone" id="telefone" placeholder="Telefone" required/>
                        </div>
                        <input className="inp-email input-contato" type="email" name="email" id="email" placeholder="E-mail" required/>
                        <input className="inp-subject input-contato" type="text" name="assunto" id="assunto" placeholder="Assunto" required/>
                        <textarea className="textarea input-contato" type="text" name="mensagemt" id="mensagem" cols="30" rows="10" placeholder="Mensagem" required></textarea>
                        <input type="hidden" name="_next" value="Obrigado/index.jsx"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <div className="button">
                            <button className="btn-enviar">Enviar</button>
                        </div>
                    </form>
                  </div>

                  <div className="colum2">
                      <h2 className="contato-titulo">ENTRE EM CONTATO</h2>
                     <div className="media-querie-social-links">
                      <div className="link-contato">
                          <img className="contato-img" src={Linkedin} alt="Logo do linkedin"/>
                          
                      </div>
                      <div className="link-contato">
                          <img className="contato-img"  src={Google} alt="Logo do Google"/>
                         
                      </div>
                      <div className="link-contato">
                          <img className="contato-img"  src={Whatsapp} alt="Logo do Whatsapp"/>
                          
                      </div>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}