import React from 'react';

import Search from '../Search/Search';
import Filters from '../Filters/Filters';

const Header = ({ searchParams, isLoading, changeTags, changeFilters }) => (
    <header className="d-flex justify-content-around bg-dark text-warning">
        <Search isLoading={isLoading} changeTags={changeTags} />
        <button
            className="btn btn-outline-warning my-3"
            data-toggle="modal"
            data-target="#myModal"
            type="button"
            disabled={isLoading}
        >
            Filters
        </button>
        <Filters searchParams={searchParams} changeFilters={changeFilters} />
    </header>
);

export default Header;