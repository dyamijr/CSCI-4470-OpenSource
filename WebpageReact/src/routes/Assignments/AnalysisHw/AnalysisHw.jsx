import React, { useEffect, useState } from "react";
import pdf from "../../../../../Assignments/Analysis Homework/Analysis Homework.pdf"

function AnalysisHw(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default AnalysisHw;