import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/05.BuildSystems/BuildSystems.pdf"

function LectureSlidesBS(){
    return(
        <>
            <iframe src={pdf} width="80%" height="1150px" />
        </>
    )
}
export default LectureSlidesBS;


