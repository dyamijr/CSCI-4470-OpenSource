import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/05.BuildSystems/Lab-BuildSystems.pdf"

function Lab5(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Lab5;