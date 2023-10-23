function buttonElement() {
    const btnProps = {
        onclick: () => {
        console.log("already click me");
        }
    }

    return React.createElement('button', btnProps, [
        'CLick me'
    ])
}

function app() {
    return React.createElement('div', {},[
        'Welcome to Re act With API',
        'My name is mmato',
        buttonElement()
    ])
}

const rootElement = document.querySelector('#root')
const root = ReactDOM.createRoot(rootElement)

root.render(app())





































































