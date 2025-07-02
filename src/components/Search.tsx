import React from 'react';
import {atom} from 'jotai'
import {searchKeyword} from "../atom/SearchKeyword";
import {SearchKeywordsSelect} from "./SearchKeywordsSelect"
export const Search: React.FC = () => {
    return (
        <div>
            <SearchKeywordsSelect/>
        </div>
    )
}
