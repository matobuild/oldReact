function ReactBasicForm({ onSubmit }) {
  return (
    <form id="form" onSubmit={onSubmit}>
      <div className="form_field" >
        <label>FirstName :</label>
        <input type="text" name="firstName"></input>
      </div>
      <div className="form_field">
        <label>LastName :</label>
        <input type="text" name="lastName"></input>
      </div>
      <div className="form_submit">
        <button type="submit">Submit</button>
      </div>
      
    </form>
  );
}

function App() {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log(event); 
    const formData = new FormData(event.target)

    let formValues = {}

    for (const [name, value] of formData) {
      formValues = {
        ...formValues,
        [name] : value,
      };
    }
console.log(formValues);
const fullname = `${formValues.firstName} ${formValues.lastName} `
alert(`HELLO ${fullname}`);

  };
  return (
    
    <div>
      <ReactBasicForm onSubmit={handleOnSubmit} />
    </div>
  );
}

// create root element
const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);
