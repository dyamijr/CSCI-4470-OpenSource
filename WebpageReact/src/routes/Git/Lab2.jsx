import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/02.Git/Lab-Git.pdf"

function Lab2(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Lab2;