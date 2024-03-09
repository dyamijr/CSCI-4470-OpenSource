import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/09.Virtualization/source/index.pdf"

function LectureSlideV(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default LectureSlideV;