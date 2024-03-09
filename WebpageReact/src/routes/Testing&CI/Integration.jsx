import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/08.TestingAndCI/Integration.pdf";

function LectureSlidesIntegration(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    );
}
export default LectureSlidesIntegration;