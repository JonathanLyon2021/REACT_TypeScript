import React from 'react';
import './App.css';


function Heading({ title }: { title: string }) {
  return (
    <h1>{title}</h1>
  );
}

function HeadingWithContent({ children }: { children: ReactNode }): ReactElement { //ReactElement somehow helps define this??? Ask Jason
  return (
    <h1>{children}</h1>
  );
}

export default App;
