import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/04.Licensing/Lab-Licensing.pdf"

function Lab4(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Lab4;