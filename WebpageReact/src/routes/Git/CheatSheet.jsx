import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/02.Git/cheat_sheet_git_final.pdf"

function CheatSheet(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default CheatSheet;


