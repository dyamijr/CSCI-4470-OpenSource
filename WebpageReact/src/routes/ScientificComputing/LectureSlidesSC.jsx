import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/06.ScientificComputing/index.pdf";

function LectureSlidesSC(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    );
}
export default LectureSlidesSC;