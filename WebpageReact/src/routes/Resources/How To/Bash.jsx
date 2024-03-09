import React, { useEffect, useState } from "react";
import pdf from "../../../../../Resources/How-To/InstallingBashonWindows.pdf";
function Bash(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Bash;