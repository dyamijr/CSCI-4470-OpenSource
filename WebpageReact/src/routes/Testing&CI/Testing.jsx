import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/08.TestingAndCI/Testing.pdf";

function LectureSlidesTesting(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    );
}
export default LectureSlidesTesting;