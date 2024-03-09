import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/08.TestingAndCI/Lab-TestingAndCI.pdf"

function Lab8(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Lab8;