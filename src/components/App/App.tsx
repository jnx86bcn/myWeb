import * as React from 'react';
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";

export class App extends React.Component<any,any> {

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <BrowserRouter>
                <header>
                    <nav className="header-nav">
                    <ul>
                        <li>Inicio</li>
                        <li>Proyectos</li>
                        <li>Contacto</li>
                    </ul>
                    </nav>
                    <h1 className="Bold">Tus sueños acaban donde acaba tu ilusión</h1>
                </header>
                <main>
                    <section>
                        <article>
                            <p className="main-title Bold">Sobre mí</p>
                            <p className="main-description">Ingeniero de telecomunicaciones que ha centrado su carrera profesional en la informática. 
                                                            Llevo trabajando como programador desde hace mas de 3 años. Centrado principalmente en desarrollo front-end 
                                                            pero también haciendo desarrollo back-end en C# haciendo web services desplegados en Azure WebApps. 
                                                            Familiarizado con React-Redux, Typescript y Webpack. He trabajado siempre con repos de GitHub en entornos Microsoft Visual 
                                                            tanto Studio como Code. Actualmente estoy realizando un Master en Diseño Front-end multidispositivo 
                                                            por la escuela de Diseño de Barcelona.</p>
                        </article>
                        <article>
                            <p className="main-title Bold">Trabajos</p>
                            <p className="main-description">Durante los 3 años de experiencia he trabajado en diferente proyectos tanto del sector alimenticios, bancario y Aereo. 
                                                            Todos los proyectos han sido en Client Side con las últimas tecnologías del mercado con un equipo que ha priorizado siempre 
                                                            la calidad en el diseño de paginas web modernas y de vanguardia. Tambien he trabajado en el desarrollo de API en WCF con C# 
                                                            para la conexión entre las BBDD y la parte Client o con conexión a repositorios de ficheros FTPs. 
                                                            La metodología de trabajo ha sido tanto Waterfall como Scrum según el cliente y siguien el proyecto mediante VSTS.</p>
                        </article>
                    </section>
                    <section>
                        <article>
                            <p className="main-title Bold">Proyectos</p>
                            <div className="projectDashboard">
                                <div className="projectDashboard-projectCard"></div>
                                <div className="projectDashboard-projectCard"></div>
                                <div className="projectDashboard-projectCard"></div>
                                <div className="projectDashboard-projectCard"></div>
                                <div className="projectDashboard-projectCard"></div>
                                <div className="projectDashboard-projectCard"></div>
                                <div className="projectDashboard-projectCard"></div>
                                <div className="projectDashboard-projectCard"></div>
                                <div className="projectDashboard-projectCard"></div>
                                <div className="projectDashboard-projectCard"></div>
                                <div className="projectDashboard-projectCard"></div>
                                <div className="projectDashboard-projectCard"></div>
                            </div>
                        </article>
                    </section>
                    <form>
                        <div className="row">
                            <div className="col">
                                <input type="text" placeholder="correo"/>
                            </div>
                            <div className="col">
                                <input type="text" placeholder="asunto"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <textarea cols={30} rows={10} placeholder="mensaje"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button >Enviar</button>
                            </div>
                        </div>
                    </form>
                </main>
                <footer>
                    <div className="footer-top">
                        <div className="footer-top-left">
                            <p>Encuentrame en</p>
                            <nav>
                                <ul>
                                    <li>Linkedin</li>
                                    <li>Github</li>
                                    <li>Domestika</li>
                                </ul>
                            </nav>
                        </div>
                        <div className="separationLine"/>
                        <div className="footer-top-right">
                            
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <nav>
                            <ul>
                                <li className="Bold">Inicio</li>
                                <li className="Bold">Proyectos</li>
                                <li className="Bold">Contacto</li>
                            </ul>
                        </nav>
                        <p className="Bold">@2019 Juan Bautista Gasparino Benitez</p>
                    </div>
                </footer>
            </BrowserRouter>
        )
    }
}