import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/07.StatisticalComputing/index.pdf";

function LectureSlidesSTC(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    );
}
export default LectureSlidesSTC;