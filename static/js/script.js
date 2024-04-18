let init = async () => {
    let data = await d3.csv('static/Resources/highlighted_data.csv');

    let columns = Object.keys(data[0]);
    let values = data.map(obj => Object.values(obj));

    columns.forEach(col => {
        d3.select('tr').append('th').text(col);
    });

    values.forEach(arr => {
        let row = d3.select('tbody').append('tr');

        arr.forEach(val => {
            row.append('td').text(val);
        });
    });
};

init();