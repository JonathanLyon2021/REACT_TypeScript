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

//Function props
//We're sending a function instead of an array or a react node. Functional props send functions that will in turn CREATE React noodes. 
//here we defiune the api signature of the function that we're sending in. then the output is reactNode. Directly below these are props that are functions. ie{header, children}
function TextWithNumber({ header, children }: { header: (num: number) => ReactNode; children: (num: number) => ReactNode;} //this is a container managing state[in this case num]
) {
const [state, stateSet] = React.useState<number>(1); //you can also do or like <number | null>
return(
  <div>
    {header &&<h2>{header?.(state)}</h2>}
    <div>
      {children(state)}
    </div>
    <div>
      <button onClick={() => stateSet(state + 1)}>Add</button>
    </div>
  </div>
) 
}








export default App;
