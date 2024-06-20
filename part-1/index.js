
function FirstComponent() {
    return <h1>My very first component</h1>;
}

// NamedComponent
function NamedComponent({ name }) {
    return <p>My name is {name}.</p>;
  }

// App component
function App() {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="John Doe" />
        </div>
    );
}

// Render the App component into the 'root' div
ReactDOM.render(<App />, document.getElementById('root'));