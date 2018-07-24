import React from 'react';

import '../hoc/UI/Table.css';

export const pointAsTableRow = (name, v1, v2, v3) => {
    return (
        <tr>
            <td className="ColumnPointName">{name}</td>
            <td className="ColumnPointValue">{v1}</td>
            <td className="ColumnPointValue">{v2}</td>
            <td className="ColumnPointValue">{v3}</td>
        </tr>
    )
}
