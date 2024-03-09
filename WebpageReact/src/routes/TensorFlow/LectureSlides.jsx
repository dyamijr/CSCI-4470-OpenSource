import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/11.TensorFlow/source/index.pdf"

function LectureSlideTF(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default LectureSlideTF;