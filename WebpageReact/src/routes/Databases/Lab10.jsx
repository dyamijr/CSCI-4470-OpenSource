import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/10.Databases/Lab-Databases.pdf"

function Lab10(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Lab10;