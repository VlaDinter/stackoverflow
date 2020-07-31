import React from 'react';

const LoadButton = ({ isLoading, changeSize }) => (
    <button
        className="my-3 btn btn-outline-warning"
        type="button"
        disabled={isLoading}
        onClick={changeSize}
    >
        {isLoading && <span className="spinner-border spinner-border-sm"></span>}
        {isLoading ? 'Loading...' : 'Load More'}
    </button>
);

export default LoadButton;