import React from 'react';
import './App.css';

//This is the old way to add default props for children. Not adviseable to use this code as it is commented out.
//const HeadingFC: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;
//The above code would be for DefaultProps.

//Conventional Props
//list of the different properties you'vegot then {title: string} the different data types that you have associated with those properties.
function Heading({ title }: { title: string }) {
  return (
    <h1>{title}</h1>
  );
}

//children should be a ReactNode. Checkout define ReactNode, you can see the different types there
function HeadingWithContent({ children }: { children: ReactNode }): ReactElement { 
  return (
    <h1>{children}</h1>
  );
}

//Default props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps; //here we let defaultContainerProps define itself with `typeof`

function Container({heading, children}: { children: ReactNode } & typeof defaultContainerProps): ReactElement {
  return <div><h1>{heading}</h1>{children}</div>;
}

//Here we set the defaultcontainerprops as the default props
Container.defaultProps = defaultContainerProps;

export default App;
