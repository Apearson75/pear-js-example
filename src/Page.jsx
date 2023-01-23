import Pear from "js-pear";
import './index.css'

const Component = () => {
    const buttonState = new Pear.State("Click Me");
    const countState = new Pear.State(0)
    const textState = new Pear.State("padding-left: 5px; padding-right: 5px;");

    function click() {
        buttonState.setState("You Clicked Me");
        textState.setState("padding-left: 5px; padding-right: 5px; font-weight: bold; color: red");
    }

    return (
        <div id="page">
            <h1>Hello World</h1>
            <div style="display: flex; align-items: center;">
                <button onclick={() => countState.setState(countState.val - 1)}>-</button>
                <p style={textState}>{countState}</p>
                <button onclick={() => countState.setState(countState.val + 1)}>+</button>
            </div>
            <button onclick={click}>{buttonState}</button>
            <p>{countState}</p>
        </div>
    );
}

const Page = () => {
    return (
        <div>
            <Component/>
            <a href="https://github.com/Phoneguytech75/pear-js">Made with Pear JS</a>
        </div>
    );
}


export default Page;