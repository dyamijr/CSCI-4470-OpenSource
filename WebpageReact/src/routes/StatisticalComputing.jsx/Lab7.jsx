import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/07.StatisticalComputing/Lab-StatisticalComputing.pdf"

function Lab7(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Lab7;