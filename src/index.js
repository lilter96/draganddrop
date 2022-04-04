import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import initialData from './initial-data';
import Column from './column';

import 'modern-css-reset'

const App = () => {
    const [data, setData] = useState(initialData);
    return data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

        return <Column key = { column.id }
        column = { column }
        tasks = { tasks }
        />;
    });
}

ReactDOM.render( < App / > , document.querySelector("#root"));