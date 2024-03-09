import React, { useEffect, useState } from "react";
import pdf from "../../../../../Resources/Summer2022Projects.pdf";
function ProjectsSU2022(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default ProjectsSU2022;