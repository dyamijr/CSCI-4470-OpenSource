import React, { useEffect, useState } from "react";
import pdf from "../../../../../Assignments/Term Project/ProjectProposalTemplate.pdf"

function Proposal(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Proposal;