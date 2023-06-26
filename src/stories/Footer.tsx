import React from "react";

export default function Footer ({ children}){
    console.log('children',children)
    return <h1><div>This is footer component</div><div>{children}</div></h1>
}
