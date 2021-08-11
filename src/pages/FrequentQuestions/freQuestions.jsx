import React from 'react';
import './freQuestions.css';
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'

class freQuestions extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="frequentQ">
                <div className="sensors__content">
                     <Navbar theme={"Navbar"}></Navbar>  
                     </div>
                    <div className="Landing__content">
                        <h1 className="Frequent__title">PREGUNTAS FRECUENTES</h1>
                        <div className="Topics">
                            <div className="Topics__content">
                                <h3 className="topic__title">Topic 1</h3>
                                <h3 className="topic__title">Topic 2</h3>
                                <h3 className="topic__title">Topic 3</h3>
                                <h3 className="topic__title">Topic 4</h3>
                                <h3 className="topic__title">Topic 5</h3>
                                <h3 className="topic__title">Topic 6</h3>
                            </div>
                        </div>
                        <div className="Questions">
                                <div className="questions__content">
                                    <h3>Pregunta 1</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quisquam excepturi facilis nam possimus deleniti illo dolor voluptatibus, delectus, distinctio labore minus blanditiis praesentium, veniam totam eum quod nemo? Mollitia.</p>
                                    <hr />
                                    <h3>Pregunta 2</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quisquam excepturi facilis nam possimus deleniti illo dolor voluptatibus, delectus, distinctio labore minus blanditiis praesentium, veniam totam eum quod nemo? Mollitia.</p>
                                    <hr />
                                    <h3>Pregunta 3</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quisquam excepturi facilis nam possimus deleniti illo dolor voluptatibus, delectus, distinctio labore minus blanditiis praesentium, veniam totam eum quod nemo? Mollitia.</p>
                                    <hr />
                                    <h3>Pregunta 4</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quisquam excepturi facilis nam possimus deleniti illo dolor voluptatibus, delectus, distinctio labore minus blanditiis praesentium, veniam totam eum quod nemo? Mollitia.</p>
                                    
                                    <h3>Pregunta 5</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quisquam excepturi facilis nam possimus deleniti illo dolor voluptatibus, delectus, distinctio labore minus blanditiis praesentium, veniam totam eum quod nemo? Mollitia.</p>
                                </div>
                        </div>
                    </div>
                </div>
                <Navbar theme={"Navbar"}></Navbar>
                <div className="footer__Content">
                    <Footer s={{bottom:0}}></Footer>
                </div>
            </React.Fragment>
        )
    }
}

export default freQuestions