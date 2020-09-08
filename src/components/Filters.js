import React, {useRef} from "react";

const Filters = ({onClick}) => {
    const searchText = useRef ('');
    const from = useRef ('');
    const to = useRef ('');

    const triggerClick = () => {
        const _text = searchText.current.value;
        let _from = new Date (from.current.value).getTime () / 1000;
        let _to = new Date (to.current.value).getTime () / 1000;
        _from = _from || '';
        _to = _to || '';
        onClick && onClick (_text, _from, _to);
    };

    return <section className="filters">
        <div className="search-text">
            <input type="text" ref={searchText} placeholder={`Search case descriptions`}/>
        </div>
        <div className="date-text">
            <input type="date" ref={from} placeholder="from"/>
        </div>
        <div className="date-text">
            <input type="date" ref={to} placeholder="to"/>
        </div>
        <div className="trigger-search">
            <button onClick={triggerClick}>Find Cases</button>
        </div>
    </section>


};
export default Filters