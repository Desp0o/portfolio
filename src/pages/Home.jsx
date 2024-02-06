import { React, useRef } from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import FristSection from "../components/homePageComponents/fristSection";
import SecondSection from "../components/homePageComponents/secondSection";
import ThirdSection from "../components/homePageComponents/thirdSection";
import FourthSection from "../components/homePageComponents/fourthSection";
import '../styles/contact.css'


function Home(props) {
const homeRef = useRef(null)
const projectRef = useRef(null)

const handleClick = (refname) => {
    refname.current?.scrollIntoView({ behavior: 'smooth' });
};

    
return (
    <div>

        <Navbar refing={props.refing} refcontact={props.refcontact} />

        {/* ჰიუმ ფეიჯი */}
        <span ref={homeRef} style={{height:"40px"}}></span>
        <FristSection handler={()=>handleClick(projectRef)}/>

        {/* ებაუთ ფეიჯი */}
        <span ref={props.refing} />
        <SecondSection handler={()=>handleClick(props.refcontact)}/>

        {/* პროექტები ფეიჯი */}
        <span ref={projectRef} />
        <ThirdSection />

        {/* კონტაქტი */}
        <span ref={props.refcontact} />
        <FourthSection />

        {/* footer */}
        <Footer/>
        
    </div>
)
}

export default Home;


