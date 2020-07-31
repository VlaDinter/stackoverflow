import React, { useState, useCallback } from 'react';

const Search = ({ isLoading, changeTags }) => {
    const [inputValue, setInputValue] = useState('');

    const onChangeValue = useCallback((evt) => {
        setInputValue(evt.target.value);
    }, []);

    const onEnterPress = (evt) => {
        if (evt.key === 'Enter') {
            changeTags(inputValue.trim().split(' '));
        }
    };

    return (
        <label htmlFor="search">
            Search by tags:
            <input
                className="form-control"
                type="text"
                placeholder="html css javascript"
                id="search"
                disabled={isLoading}
                value={inputValue}
                onChange={onChangeValue}
                onKeyPress={onEnterPress}
            />
        </label>
    );
};

export default Search;