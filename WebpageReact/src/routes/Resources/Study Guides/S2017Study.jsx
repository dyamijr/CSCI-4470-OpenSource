import React, { useEffect, useState } from "react";
import pdf from "../../../../../Resources/Backups/Spring2017StudyGuide.pdf";
function StudyS2017(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default StudyS2017;