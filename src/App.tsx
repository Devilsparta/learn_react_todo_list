import * as React from "react";
import "./App.css";
import Footer from "./footer";

const CONSTANT_KEYS = {
  ENTER_KEY: 13
};

class App extends React.Component {
  // public state = {//   obj: {
  //     hello: "world",
  //     world: "hello"
  //   }
  // };

  private inputRef: React.RefObject<HTMLInputElement>;
  public constructor(props: Readonly<{}>) {
    super(props);
    this.inputRef = React.createRef<HTMLInputElement>();
    // setInterval(() => {
    //   const obj = {
    //     ...this.state.obj,
    //     hello: this.state.obj.hello + "1"
    //   };
    //   this.setState({ obj });
    // }, 1000);
  }
  public render() {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input
              ref={this.inputRef}
              className="new-todo"
              autoFocus={true}
              placeholder="Anything to Add?"
              onKeyDown={
                // tslint:disable-next-line
                this.handleEnterKey.bind(this)
              }
            />
          </header>
          <Footer />
        </section>
      </div>
    );
  }
  private handleEnterKey(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode !== CONSTANT_KEYS.ENTER_KEY) {
      return;
    }
    // const inputRef = this.inputRef.current;
    // let value: string = "";
    // if (inputRef) {
    //   value = inputRef.value;
    // }
  }
}

export default App;
