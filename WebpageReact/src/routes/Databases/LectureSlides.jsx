import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/10.Databases/source/index.pdf"

function LectureSlideD(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default LectureSlideD;