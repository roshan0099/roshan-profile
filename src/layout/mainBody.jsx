import { useEffect } from "react"
import "../style/mainBody.css"

export function MainBody() {
    var elm = []
    useEffect((e)=>{

        elm = Array.from(document.getElementsByClassName("col"))
        // console.log('i fire once : ', elm);
  },[]);

    return (

        <>
            <div id="main-container">
                <div id="intro">
                    <div id="revolving">

                        <div className="square">
                            
                        </div>
                        <div className="square">
                            
                        </div>
                        <div className="square">
                            
                        </div>
                        <div className="square">
                            
                        </div>
                        <div className="square">
                            
                        </div>
                        

                    </div>
                    <div className="main-content">

                        <h1>Hi,this is <i>Roshan </i> </h1>

                        <p id="intro-para"> And I am on the journey of trying out different techs
                            in the market. I am a web developer, designer who likes to integrate existing designs and has keen
                            interests in data analytics, cyber and stocks. I love exploring different technologies and picking up new
                            skills as I believe it helps me to expand my arsenal.
                        </p>
                    </div>

                </div>

                <div id="display-work">
                    <div className="cols">
                        <div className="col" id="1"    >
                            <h1>Easedementia</h1>
                            <a href="https://easedementia.com/" className="linkhub"><img src="/github.png" alt="" height="90px" width="90px" /></a>
                           <p>
                            A web application for a start-up
                            that focuses on the well being of
                            dementia patients
                            </p> 
                        </div>

                        <div className="col" id="2"    >
                            <h1> Confab</h1>
                            <a href="https://github.com/roshan0099/spaceWeb" className="linkhub"><img src="/github.png" alt="" height="90px" width="90px" /></a>
                            <p>
                                Trying to get my hands on socketio and its different possibilites by creating
                                an application where you can cht as well as draw with other people real time (work in progress).

                            </p>
                        </div>


    
                        <div className="col" id="3"    >
                            <h1> Musik </h1>
                            <a href="https://github.com/roshan0099/musik-nodejs" className="linkhub"><img src="/github.png" alt="" height="90px" width="90px" /></a>
                            <p>
                                A web application uses spotify api and web-scraping to get video id from the
                                youtube

                            </p>
                        </div>
                        <div className="col" id = "4"    >
                            <h1> SpaceWeb</h1>
                            <a href="https://roshan0099.github.io/spaceWeb/" className="linkhub"><img src="/github.png" alt="" height="90px" width="90px" /></a>
                            <p>
                                Space is a simple yet a complex esolang with just 6 symbols. It’s one of
                                the smallest interpreted programming language out there
                            </p>

                        </div>


                    </div>
                </div>
            </div>

            <div className="footer">
                <span className="github footer-element"><a href="https://github.com/roshan0099">Github</a></span>
                <span className="mail footer-element"><a href="mailto: roshan09ka@gmail.com">Email</a></span>
                <span className="linkedin footer-element"><a href="https://www.linkedin.com/in/mohamed-roshan-k/">Linkedin</a></span>
                <span className="twitter footer-element"><a href="https://twitter.com/mroshanka">Twitter/X</a></span>
            </div>
        </>
    )
}