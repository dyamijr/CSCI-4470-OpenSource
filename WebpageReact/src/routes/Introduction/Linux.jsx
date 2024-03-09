import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import pdf from "../../../../Modules/01.Introduction/Linux/source/index.pdf"

function Linux(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Linux;


