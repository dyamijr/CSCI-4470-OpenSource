import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/09.Virtualization/Lab-Virtualization.pdf"

function Lab9(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Lab9;