import React, { useEffect, useState } from "react";
import pdf from "../../../../Modules/03.DocumentationAndCommunity/Community.pdf";

function Community(){
    return(
        <>
            <iframe src={pdf} width="75%" height="1150px" />
        </>
    );
}
export default Community;