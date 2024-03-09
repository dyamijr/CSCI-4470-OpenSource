import React, { useEffect, useState } from "react";
import pdf from "../../../../../Resources/Spring2022Projects.pdf";
function ProjectsS2022(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default ProjectsS2022;