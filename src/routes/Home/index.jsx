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
            <p className="sobre-mim-texto">Profissional proativo e dedicado, com características de escuta ativa e comunicação elogiadas, 
            sempre em busca de melhorias em seu ambiente de trabalho, aprimorando processos diários ou propondo novos projetos.</p>
        </div>
        <div className="curriculo-box">
            <details className="curriculo opcao1">
                <summary className="summary-titulo">FORMAÇÃO
                    <img src={Seta} alt="Seta para abrir"/>
                </summary>
                <div className="summary-open">
                    <ul className="summary-texto">
                        <li>
                            <h3>Educação Fisica (Licenciatura)</h3>
                            <p>Centro Universitário das Faculdades Metropolitanas Unidas - FMU</p>
                            <p>Janeiro de 2020 - Dezembro de 2023</p>   
                        </li>
                        <li>
                            <h3>Tecnico em Adminstração</h3>
                            <p>Etec de Sapopemba</p>
                            <p>Janeiro de 2017 - Dezembro de 2019</p>

                        </li>
                    </ul>
                </div>
            </details>

            <details className="curriculo opcao2">
                <summary className="summary-titulo">IDIOMAS
                   <img src={Seta} alt="Seta para abrir"/>
                </summary>
                <div className="summary-open">
                    <ul className="summary-texto">
                        <li>
                            <p>Inglês - <strong>Avançado</strong></p>
                        </li>
                        <li>
                            <p>Português - <strong>Avançado</strong></p> </li>
                    </ul>
                </div>
            </details>
            <details className="curriculo opcao3">
                <summary className="summary-titulo">EXPERIÊNCIA
                   <img src={Seta} alt="Seta para abrir"/>
                </summary>
                <div className="summary-open">
                    <ul className="summary-texto">
                        <li>
                            <h3>Colégio Palmares</h3>
                            <p>Estágiario</p>
                            <p>Setembro de 2022 - Até o momento</p>
                        </li>
                        <li>
                            <h3>Colégio Brasil Canáda</h3>
                            <p>Professor Especialista</p>
                            <p>Junho de 2023 - Até o momento</p>
                        </li>
                        <li>
                            <h3>Saint Nicholas School</h3>
                            <p>Professor Especialista</p>
                            <p>Setembro de 2023 - Até o momento</p>
                        </li>
                        <li>
                            <h3>Corpo Brinquedo LTDA</h3>
                            <p>Coordenador</p>
                            <p>Junho de 2023 - Até o momento</p>
                        </li>
                    </ul>
                </div>
            </details>
            <details className="curriculo opcao4">
                <summary className="summary-titulo">HABILIDADES
                   <img src={Seta} alt="Seta para abrir"/>
                </summary>
                <div className="summary-open">
                    <ul className="summary-texto">
                        <li>Planejamento de Aulas</li>
                        <li>Desenvolvimento e acompanhamento de habilidades física dos alunos</li>
                        <li>Elaboraçaõ de projetos</li>
                        <li>Preparação de Eventos</li>
                        <li>Pacote Office - Avançado </li>
                    </ul>
                </div>
            </details>
            </div>
      </section>
     
     <section >
        <div className="professor-alunos"> 
            <div className="colum1-professor">
                <h1 className="professor-titulo">O Professor</h1>
                <p className="professor-texto">É um profissional dedicado ao ensino de atividades
                 de carater motor, incluindo esportes, jogos e brincadeiras, danças e lutas. 
                 Ele projeta e ministra aulas, promove o desenvolvimento da coordenação,
                  possibilita momentos de evolução socioemocional entre os alunos, 
                  além de incentivar hábitos saudáveis de vida e a importância do exercício físico. 
                  É responsável por criar projetos de treinamento, eventos, competitivos ou não,
                   avaliar o progresso dos alunos e fomentar a importância da atividade física para o bem-estar geral.</p>
            </div>
            <div className="colum2-professor">

            </div>
        </div>
     </section>







      <section className="projetos">
          <article className="projeto-right linha1">
              <div className="conteudo-projeto-linha1">
                  <h2 className="projeto-titulo">Cheerleading</h2>
                  <p className="projeto-texto">A modalidade esportiva do cheerleading alinhada 
                    ao planejamento escolar, pode trazer benefícios variados e notáveis no processo
                    pedagógico dos alunos praticantes. Entrando no mérito fisiológico, as vantagens
                    acerca de consciência corporal, flexibilidade e força são as mais acentuadas 
                    conforme a criança ou adolescente começa a praticar o esporte com uma boa frequência.
                     Os movimentos novos promovem estímulos cognitivos e motores que são em sua grande
                     maioria, novos para aquele aluno, que se vê descobrindo um universo de possibilidades
                    longe do eixo tradicional dos esportes mais conhecidos.</p>
              </div>
              <figure>
              <img className="projeto-img" src={Img1} alt=""/>
              </figure>
          </article>
          <article className="projeto-left linha2">
              <div className="conteudo-projeto">
                  <h2 className="projeto-titulo">Circo</h2>
                  <p className="projeto-texto-left">As propostas circenses dentro do âmbito escolar representam 
                  um estímulo alternativo muito válido para o desenvolvimento socioemocional e motor 
                  dos alunos. A presença da característica artística é um ponto de  
                  interdisciplinaridade que pode ser muito aproveitado com o devido planejamento, 
                  possibilitando frutos positivos para os alunos.</p>
              </div>
              <figure>
              <img className="projeto-img" src={Img2} alt=""/>
              </figure>
          </article>
          <article className="projeto-right linha3">
              <div className="conteudo-projeto">
                  <h2 className="projeto-titulo">Vivências Esportivas</h2>
                  <p className="projeto-texto">Aulas de iniciação aos esportes coletivos,
                   são imprescindíveis para a formação integral do aluno de até 6 anos. 
                   Promovendo estas atividades, os benefícios de interação social, 
                   habilidade motora fina e execução de técnicas específicas 
                   são claros quando o aluno atinge os anos iniciais do ensino 
                   fundamental e consegue desempenhar atividades cotidianas com 
                   maior autonomia devido ao ganho de repertório motor prévio.</p>
              </div>
              <figure>
              <img className="projeto-img" src={Img3} alt=""/>
              </figure>
          </article>
          <article className="projeto-left linha4">
              <div className="conteudo-projeto">
                  <h2 className="projeto-titulo">Trabalho Social</h2>
                  <p className="projeto-texto-left">Dentre todas as possibilidades pedagógicas no 
                  âmbito da educação física, se mostra cada vez mais presente a desigualdade
                   social e a diferença de oportunidades de acordo com o nível de recursos
                    monetários de cada família. Possibilitar vivências e oficinas com foco 
                    no público mais carente, é uma resposabilidade para os professores que
                     procuram fazer a diferença para os alunos que mais precisam.</p>
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
                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="hidden" name="_next" value="https://allankelwin-portifolio.netlify.app/Obrigado"></input>
                        <div className="button">
                            <button id="enviar" className="btn-enviar">Enviar</button>
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