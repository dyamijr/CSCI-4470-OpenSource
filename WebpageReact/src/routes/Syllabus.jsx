import React, { useEffect, useState } from "react";
import pdf from '../../../Syllabus.pdf';

function Syllabus(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Syllabus;


