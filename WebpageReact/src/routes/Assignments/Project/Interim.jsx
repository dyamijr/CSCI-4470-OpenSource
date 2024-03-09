import React, { useEffect, useState } from "react";
import pdf from "../../../../../Assignments/Term Project/Interim Report.pdf"

function Interim(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Interim;