import React from 'react';

const Table = (props) => {
  const { head = [], data = [] } = props;
  return (
    <table>
      <thead>
        <tr>
          {head.map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr key={index}>
            {Object.keys(data).map((key) => (
              <td key={key}>{data[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
