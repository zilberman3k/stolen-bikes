import React from "react";
import {articleDate} from "../utils";
import Loading from "./Loading";

const Incidents = ({data, loading}) => {

    return <section className="incidents">
        {loading && <Loading/>}
        {!loading && !data.length && <div className="empty">No Results</div>}
        {!loading && data.length>0 && data.map (record => <article  key={`art${record.id}`}>
            <div className="thumb">
                <img src={record?.media?.image_url_thumb} alt=''/>
            </div>
            <div className="content">
                <a href={record?.source?.html_url + '#'} className="title">{record.title}</a>
                <div className="description">{record.description}</div>
                <div className="address">{`${articleDate (record.occurred_at)} - ${record.address}`}</div>
            </div>
        </article>)}
    </section>;
}
export default Incidents;
