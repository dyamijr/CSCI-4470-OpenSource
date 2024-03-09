import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/04.Licensing/Licensing-S2021-RPI-PatrickMasson-Shortform-RCOS.pdf"

function LectureSlidesL(){
    return(
        <>
            <iframe src={pdf} width="80%" height="1150px" />
        </>
    )
}
export default LectureSlidesL;


