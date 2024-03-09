import React, { useEffect, useState } from "react";
import pdf from "../../../../../Resources/How-To/BootUbuntu.pdf";
function Ubuntu(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Ubuntu;