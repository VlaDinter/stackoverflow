import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import QuestionsList from './components/QuestionsList/QuestionsList';
import Error from './components/Error/Error';
import LoadButton from './components/LoadButton/LoadButton';
import { changeSize, changeTags, changeFilters, loadQuestions } from './reducer';

const App = (props) => {
    const {
        questions,
        searchParams,
        isLoading,
        isError,
        changeSize,
        changeTags,
        changeFilters,
        loadQuestions
    } = props;

    useEffect(() => {
        loadQuestions(searchParams);
    }, [searchParams]);

    if (isError) {
        return <Error />;
    }

    return (
        <>
            <Header
                searchParams={searchParams}
                isLoading={isLoading}
                changeTags={changeTags}
                changeFilters={changeFilters}
            />
            {
                questions.length === 0
                    ? <p className="mt-3">Don't have questions :(</p>
                    : <QuestionsList questions={questions} />
            }
            <LoadButton isLoading={isLoading} changeSize={changeSize} />
        </>
    );
};

const mapStateToProps = state => ({
    questions: state.questions,
    searchParams: state.searchParams,
    isLoading: state.isLoading,
    isError: state.isError,
});

const mapDispatchToProps = dispatch => ({
    changeSize: () => dispatch(changeSize()),
    changeTags: (tags) => dispatch(changeTags(tags)),
    changeFilters: (filters) => dispatch(changeFilters(filters)),
    loadQuestions: (searchParams) => dispatch(loadQuestions(searchParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
