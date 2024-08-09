
/**
 * 1) Creating React Element using JSX
 * 2) Creating Functional Component
 * 3) Component Composition => one component inside of another => TitleComponent inside of   HeadingComponent : 
 * 4) using { } to write any JS expression inside of a component => variable number
 * 5) inserting React Element inside of Component 
*/

import './App.css';


//? REACT ELEMENT  => JS Object

const jsxHeading = (
  <h1 id='heading' className='h1'> This is react Element using JSX</h1>
)


const TitleComponent = () => {

  return <h1>This is the title </h1>

}

const number = 1000;


//? REACT COMPONENT  => JS Function

const HeadingComponent = () => (
  <div id='container'>

    <TitleComponent />

    {TitleComponent()}     {/* OR Component inside componentn  using {}  */}


    {jsxHeading}            {/* Element inside component using {}  */}
    <h1>Namaste react Functional Component </h1>

    {number}


  </div>

)



export default (<HeadingComponent />)