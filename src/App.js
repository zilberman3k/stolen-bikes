import React, {useState} from 'react';
import Filters from "./components/Filters";
import {useFetch} from "./hooks";
import Footer from "./components/Footer";
import Incidents from "./components/Incidents";
import Loading from "./components/Loading";
import Header from "./components/Header";
import './styles.scss'

function App() {

    const [allQueryParams, setAllQueryParams] = useState ({
        page: 1,
        per_page: 4,
        query: '',
        occurred_after: '',
        occurred_before: ''
    });

    const {data, updateParams, isLoading} = useFetch (allQueryParams);

    const changeParam = (key, value) => {
        allQueryParams[key] = value;
    };


    const triggerSearch = (text, from, to) => {
        changeParam ('query', text);
        changeParam ('occurred_after', from);
        changeParam ('occurred_before', to);
        changeParam ('page', 1);
        updateParams ({...allQueryParams})
    };

    const loadNextPage = (toPage) => {
        changeParam ('page', toPage || (allQueryParams.page + 1));
        setAllQueryParams ({...allQueryParams});
        updateParams ({...allQueryParams})
    };


    return (
        <div className="main-app">
            <Header/>
            <Filters onClick={triggerSearch}/>
            {isLoading ?
                <Loading/>
                :
                <Incidents data={data}/>
            }

            <Footer loadNextPage={loadNextPage} page={allQueryParams.page}/>
        </div>
    );
}

export default App;
