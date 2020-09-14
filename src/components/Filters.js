import React, {useRef, useState} from "react";

/**
 * Text Search, Dates from and to
 * @param onClick
 * @returns {*}
 * @constructor
 */
const Filters = ({onClick}) => {
    const searchText = useRef ('');
    const from = useRef ('');
    const to = useRef ('');
    const [error, setErrorMessage] = useState ('');

    const triggerClick = (e) => {
        e && e.preventDefault();
        const _text = searchText.current.value;
        let _from = new Date (from.current.value).getTime () / 1000;
        let _to = new Date (to.current.value).getTime () / 1000;

        _from = _from || '';
        _to = _to || '';
        const dateFrom = Number.isInteger (_from);
        const dateTo = Number.isInteger (_to);

        // simple dates validation - todo : export to validation util file
        const _now = new Date ().getTime () / 1000;
        if (dateFrom && dateTo && (_from > _to ||_from>_now || _to>_now )) {
            setErrorMessage ('please correct dates!')
        }else {
            onClick && onClick (_text, _from, _to);
        }
    };

    const clearError = () => setErrorMessage ('');

    return <form onSubmit={triggerClick}>
        <section className="filters">
            <div className="search-text">
                <input type="text" ref={searchText} placeholder={`Search case descriptions`}/>
            </div>
            <div className={`date-text${!!error ? ' error' : ''}`}>
                <input type="date" ref={from} placeholder="from" onFocus={clearError}/>
                {error && <label>{error}</label>}
            </div>
            <div className={`date-text${!!error ? ' error' : ''}`}>
                <input type="date" ref={to} placeholder="to" onFocus={clearError}/>
                {error && <label>{error}</label>}
            </div>
            <div className="trigger-search">
                <button onClick={triggerClick}>Find Cases</button>
            </div>
        </section>

    </form>


};
export default Filters