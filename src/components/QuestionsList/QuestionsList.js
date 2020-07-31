import React from 'react';

import Question from '../Question/Question';

const QuestionsList = ({ questions }) => (
    <ul className="list-group">
        {questions.map(question => (
            <Question key={question.question_id} question={question} />
        ))}
    </ul>
);

export default QuestionsList;