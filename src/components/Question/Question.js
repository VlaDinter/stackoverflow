import React from 'react';

const Question = ({ question }) => (
    <li>
        <a
            className="list-group-item list-group-item-action list-group-item-warning"
            href={question.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            {question.title}
        </a>
    </li>
);

export default Question;