import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/10.Databases/MongoDB_Shell_Cheat_Sheet.pdf"

function CheatSheetD(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default CheatSheetD;


