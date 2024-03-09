import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/06.ScientificComputing/Lab-ScientificComputing.pdf"

function Lab6(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Lab6;