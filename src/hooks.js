import {useState, useEffect} from 'react'

const URL = 'http://bikewise.org/api/v2/incidents?';

export const useFetch = (initialParams = {}) => {
    const [params, updateParams] = useState (initialParams);
    const [data, setData] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);
    const queryString = Object.keys (params)
        .filter (k => !!params[k])
        .map ((key) => encodeURIComponent (key) + '=' +
            encodeURIComponent (params[key])).join ('&');
    useEffect (() => {
        const fetchData = async () => await fetch (`${URL}${queryString}`).then (q => q.json ());
        setIsLoading(true);
        fetchData ().then (({incidents})=>setData(incidents)).then(()=>setIsLoading(false))
    }, [params,queryString]);

    return {data, updateParams,isLoading}
}
export default useFetch;