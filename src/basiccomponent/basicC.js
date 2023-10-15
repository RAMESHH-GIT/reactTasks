import React from 'react';

const ParentComponent = () => {
  const title = 'Hello World';

  return (
    <ChildComponent title={title}>
      <p>This is the child component's content.</p>
    </ChildComponent>
  );
};

const ChildComponent = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
