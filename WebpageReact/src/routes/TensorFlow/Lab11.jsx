import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/11.TensorFlow/Lab-TensorFlow.pdf"

function Lab11(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Lab11;