import React, { useEffect, useState } from "react";
import pdf from '../../../../Modules/02.Git/Git-Introduction-Part-I/index.pdf'

function GitIntro1(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    );
}
export default GitIntro1;