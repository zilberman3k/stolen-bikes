import React from "react";

/**
 * Footer with next, prev, show page and goto page 1
 * @param loadNextPage - callback from host component.
 * @param page
 * @returns {*}
 * @constructor
 */
const Footer = ({loadNextPage,page})=><footer>
    <div onClick={()=>loadNextPage(1)}>{'<<'}first</div>
    <div onClick={()=>loadNextPage(page-1)}>{'<'}prev</div>
    <div>{`Page ${page}`}</div>
    <div onClick={()=>loadNextPage()}>next</div>
</footer>;

export default Footer;
