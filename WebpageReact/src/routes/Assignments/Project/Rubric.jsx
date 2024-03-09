import React, { useEffect, useState } from "react";
import pdf from "../../../../../Assignments/Term Project/GradingRubric-for-Projects.pdf"

function ProRubric(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default ProRubric;