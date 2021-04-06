import React, {useEffect} from "react";
import "./style.css";

function Button({ text, click, load }) {

    useEffect(()=>{
        console.log(load)
    },[])

  return (
    <button className="btn-hover" onClick={click} disabled={load}>
      {load ? "Loading" : text}
    </button>
  );
}

export default Button;
