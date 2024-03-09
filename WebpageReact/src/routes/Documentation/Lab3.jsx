import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/03.DocumentationAndCommunity/Lab-DocumentationAndCommunity.pdf"

function Lab3(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Lab3;