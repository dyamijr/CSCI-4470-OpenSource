import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import lab from "../../../../../Assignments/Analysis Homework/Analysis Homework.md"

function AnalysisHw(){

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
export default AnalysisHw;