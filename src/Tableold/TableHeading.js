import React from 'react';

function TableHeading(props ) {
  // const headings = props.headings || [];

  if (!props.headings) {
    return null;
  }

  return (
    <thead>
      <tr>
        {props.headings.map((heading) => (
          <th key={heading}>{heading}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeading;
