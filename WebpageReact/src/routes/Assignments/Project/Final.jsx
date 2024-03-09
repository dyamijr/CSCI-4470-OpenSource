import React, { useEffect, useState } from "react";
import pdf from "../../../../../Assignments/Term Project/Final Report.pdf"

function Final(){
    return(
        <>
           <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Final;