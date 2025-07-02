import React from 'react';
import {Projects} from '../components/Projects';
import {Search} from "../components/Search";


export const Portfolio: React.FC = () => {
    return (
        <div>
            <Search/>
            <Projects/>
        </div>
    )
}

