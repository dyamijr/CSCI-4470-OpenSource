import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/01.Introduction/Lab-Introduction.pdf"



function Lab(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Lab;