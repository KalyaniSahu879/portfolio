import './about.css'
const About = () =>{
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://www.skild.com/hubfs/_img/how-we-help/impact-on-individual.svg" className='a.img'/>
                    
                </div>

            </div>
            <div className='a-right'>
                

                <h1 className='a-title'>What I Do</h1>
                <p className='a-sub'>
                CRAZY FULL STACK WEB DEVELOPER WHO KNOW THESE TECH STACKS
                </p>
                
                {/* <div className="a-skills">
                    <img src={html}/>
                    <img src={css}/>
                    <img src={js}/>
                    <img src={db}/>
                    <img src={reac}/>
                    <img src={node}/>
                    
                    


                </div> */}
                <p>⚡ Able to work successfully in a deadline-driven, fast paced environment and effectively multi-task priorities while being flexible and adapting to change </p>
                <p>⚡ Technical problem solving and strong debugging skills</p>
                <div>
                <ul>
                    <li>
                        <a href="#">
                        <i class="fab fa-html5"></i>
                        
                        </a>
                        <p>HTML</p>
                    </li>
                    <li>
                        <a href="#">
                        <i class="fab fa-css3-alt"></i>
                        </a>
                        <p>CSS</p>
                    </li>
                    <li>
                        <a href="#">
                        <i class="fab fa-js"></i>
                    </a>
                    <p>JS</p>
                    </li>
                    <li>
                        <a href="#">
                        <i class="fab fa-react"></i>
                        </a> 
                        <p>React</p>
                    </li>
                    <li>
                        <a href="#">
                        <i class="fab fa-node"></i>
                        </a>
                        <p>NodeJS</p> 
                    </li>
                    <li>
                        <a href="#">
                        <i class="fas fa-database"></i>
                        </a> 
                        <p>MongoDB</p>
                    </li>
                    <li>
                        <a href="#">
                        <i class="fab fa-github-alt"></i>
                        </a>
                        <p>GitHub</p> 
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}
export default About;