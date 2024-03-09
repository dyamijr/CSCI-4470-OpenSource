import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/01.Introduction/History/source/index.pdf"

function History(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default History;


