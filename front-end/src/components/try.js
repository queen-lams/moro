import React from "react";

const name = "Lamisi";
const currentDate = new Date();


function Hello(){
    return(

    <div>

        <p>Created by {name}</p>
        <p>Copyright {currentDate.getFullYear()}</p>

    </div>
    )

}
export default Hello