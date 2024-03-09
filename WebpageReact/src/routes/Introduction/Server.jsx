import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/01.Introduction/WSL-XServer-Install.pdf"



function Server(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    )
}
export default Server;