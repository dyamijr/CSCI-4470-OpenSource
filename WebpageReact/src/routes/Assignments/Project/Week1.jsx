import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import lab from "../../../../../Assignments/Term Project/Project Week 1.md"

function Week1(){

  let [ content, setContent] = useState("");

  useEffect(() => {
    fetch(lab)
      .then((res) => res.text())
      .then((text) => {
        setContent(text)
    });
  }, []);
    return(
        <>
            <ReactMarkdown>{content}</ReactMarkdown>
        </>
    )
}
export default Week1;