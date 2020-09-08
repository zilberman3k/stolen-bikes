import React from "react";

const Footer = ({loadNextPage,page})=><footer>
    <div onClick={()=>loadNextPage(1)}>{'<<'}first</div>
    <div onClick={()=>loadNextPage(page-1)}>{'<'}prev</div>
    <div>{`Page ${page}`}</div>
    <div onClick={()=>loadNextPage()}>next</div>
</footer>;

export default Footer;
