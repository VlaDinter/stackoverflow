import React, { useState, useCallback } from 'react';

const Filters = ({ searchParams, changeFilters }) => {
    const [order, setOrder] = useState(searchParams.filters.order);
    const [sort, setSort] = useState(searchParams.filters.sort);
    const [fromDate, setFromDate] = useState(searchParams.filters.fromDate);
    const [toDate, setToDate] = useState(searchParams.filters.toDate);

    const onOrderChange = useCallback((evt) => {
        setOrder(evt.target.value);
    }, []);

    const onSortChange = useCallback((evt) => {
        setSort(evt.target.value);
    }, []);

    const onFromDateChange = useCallback((evt) => {
        setFromDate(evt.target.value);
    }, []);

    const onToDateChange = useCallback((evt) => {
        setToDate(evt.target.value);
    }, []);

    const onSaveClick = (evt) => {
        evt.preventDefault();

        changeFilters({
            order,
            sort,
            fromDate,
            toDate,
        });
    };

    return (
        <section className="modal fade" id="myModal">
            <div className="modal-dialog">
                <form className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Filters</h2>
                        <button
                            className="close"
                            data-dismiss="modal"
                            type="button"
                        >
                            &times;
                        </button>
                    </div>

                    <div className="row modal-body">
                        <div className="col">
                            <label>
                                From date:
                                <input
                                    className="form-control"
                                    type="date"
                                    value={fromDate}
                                    onChange={onFromDateChange}
                                />
                            </label>

                            <select
                                className="mt-3 custom-select"
                                value={order}
                                onChange={onOrderChange}
                            >
                                <option value="desc">desc</option>
                                <option value="asc">asc</option>
                            </select>
                        </div>

                        <div className="col">
                            <label>
                                To date:
                                <input
                                    className="form-control"
                                    type="date"
                                    value={toDate}
                                    onChange={onToDateChange}
                                />
                            </label>

                            <select
                                className="mt-3 custom-select"
                                value={sort}
                                onChange={onSortChange}
                            >
                                <option value="activity">activity</option>
                                <option value="votes">votes</option>
                                <option value="creation">creation</option>
                                <option value="hot">hot</option>
                                <option value="week">week</option>
                                <option value="month">month</option>
                            </select>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            className="btn btn-outline-warning"
                            type="submit"
                            data-dismiss="modal"
                            onClick={onSaveClick}
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Filters;