import {useState,useEffect} from "react"
import { Container,Row,Col } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"


export const Banner = () =>{
    const [loopNum,setloopNum] = useState(0);
    const [isDeleting, set_isdeleting] = useState(false);
    const toRotate = ["Web Developer","Software Developer","Back-end Engineer"];
    const [text, set_text]= useState('');
    const [delta, set_delta]= useState(300 - Math.random() * 100);
    const period = 500;

    const scrollToContact = () => {
        const contactSection = document.getElementById('connect');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta )

        return () =>{clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let full_text = toRotate[i];
        let updated_text = isDeleting ? full_text.substring(0, text.length -1 ) : full_text.substring(0,text.length + 1);

        set_text(updated_text);

        if (isDeleting){
            set_delta(prev_delta => prev_delta/2.5);
        }

        if(!isDeleting && updated_text === full_text){
            set_isdeleting(true);
            set_delta(period);
        }else if(isDeleting && updated_text === ''){
            set_isdeleting(false);
            setloopNum(loopNum+1);
            set_delta(300);
        }


    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center" >
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Mehar, "}<br></br><span className="wrap">{text}</span></h1>
                        <button onClick={scrollToContact}>Let's connect <ArrowRightCircle size={25} /></button>
                        
                    
                    </Col>
                    {/* <Col xs={12} md={6} xl={5}>
                        <img src = {header_Img} alt="hello"/>
                    </Col> */}
                </Row>
            </Container>
        </section>

    )
}