import React, { useEffect, useState } from "react";
import pdf from "../../../../../Resources/Fall2016Projects.pdf";
function ProjectsF2016(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default ProjectsF2016;