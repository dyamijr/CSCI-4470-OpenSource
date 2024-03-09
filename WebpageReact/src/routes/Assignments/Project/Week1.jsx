import React, { useEffect, useState } from "react";
import pdf from "../../../../../Assignments/Term Project/Project Week 1.pdf"

function Week1(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Week1;