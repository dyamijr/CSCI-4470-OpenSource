import React, { useEffect, useState } from "react";
import pdf from "../../../../../Assignments/Analysis Homework/rubric.pdf"

function Rubric(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Rubric;


