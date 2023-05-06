import TypewriterComponent from "typewriter-effect";
import "./typewriter.css";
const TypeWriter = () => {
    return ( 
        <TypewriterComponent
        options={{
            strings: [
            "Frontend Developer",
            "React.JS Developer",
            "Software Engineering Student",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
        />
    );
}

export default TypeWriter;