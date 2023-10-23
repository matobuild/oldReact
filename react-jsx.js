function Button() {
  const handleOnClick = () => {
    console.log("click already");
  };

  return <button onClick={() => handleOnClick}>Click me</button>;
}

function App() {
  return (
    <div>
      Welcome React with JSX
      <Button />
    </div>
  );
}

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
   
root.render(<App />);
