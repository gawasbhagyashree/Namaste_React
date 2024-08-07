
// {} inside this object we give attributes to the tag
const heading = React.createElement(
    "h1", { id: "heading" },
    "Hello World From React"
)

console.log(heading.props)

// React.createRoot comes from the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"))

// rendering the heading inside of root. This converts the heading object into h1 tag or html and injects itinto the DOM
root.render(heading)