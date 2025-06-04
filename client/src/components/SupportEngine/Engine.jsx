import React, {useRef, useEffect, useState} from "react";
import Avatar from "./Avatar"
import Window from "./Window/Window";


const Engine = () => {
    const [visible,setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setVisible(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
       
    },[ref]);

    return (
        <div ref={ref}>
            <Window visible = {visible}/>
            <Avatar 
            onClick = {() => setVisible(true)}
            style={{position: "fixed", bottom: "24px", right: "24px"}}/>
        </div>
    )
}

export default Engine;
