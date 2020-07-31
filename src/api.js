const getQuestions = ({ size, tags, filters }) => {
    const parseDate = (date) => {
        return date === '' ? '' : Date.parse(date) / 1000;
    };

    return fetch(`https://api.stackexchange.com/2.2/questions?pagesize=${size}&fromdate=${parseDate(filters.fromDate)}&todate=${parseDate(filters.toDate)}&order=${filters.order}&sort=${filters.sort}&tagged=${tags.join(';')}&site=stackoverflow`)
        .then(response => response.json())
        .then(response => {
            if (response.error_id !== undefined) {
                throw new Error();
            }

            return response.items;
        });
};

export default getQuestions;