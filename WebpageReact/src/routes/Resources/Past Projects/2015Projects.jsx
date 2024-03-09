import React, { useEffect, useState } from "react";
import pdf from "../../../../../Resources/Fall2015Projects.pdf";
function Projects2015(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Projects2015;