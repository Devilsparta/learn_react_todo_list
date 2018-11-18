import classNames from "classnames";
import * as React from "react";

class Footer extends React.Component {
	private static SELECT_STATE = {
		ALL: "ALL",
		ACTIVE: "ACTIVE",
		COMPLETED: "COMPLETED",
	};
	public state = {
		selected: Footer.SELECT_STATE.ALL,
	};
	public constructor(props: Readonly<{}>) {
		super(props);
		// tslint:disable-next-line
	}
	public onClick(state: { selected: string }) {
		this.setState(state);
	}
	public render() {
		return (
			<div>
				<footer className="footer">
					<span className="todo-count">
						<strong>1 {1 === 1 ? "item" : "items"}</strong> left
					</span>
					<ul className="filters">
						<li>
							<a
								href="#"
								className={classNames({ selected: this.state.selected === Footer.SELECT_STATE.ALL })}
								onClick={this.onClick.bind(this, { selected: Footer.SELECT_STATE.ALL })}
							>
								All
							</a>
						</li>
						<li>
							<a
								href="#"
								className={classNames({ selected: this.state.selected === Footer.SELECT_STATE.ACTIVE })}
								onClick={this.onClick.bind(this, { selected: Footer.SELECT_STATE.ACTIVE })}
							>
								Active
							</a>
						</li>
						<li>
							<a
								href="#"
								className={classNames({ selected: this.state.selected === Footer.SELECT_STATE.COMPLETED })}
								onClick={this.onClick.bind(this, { selected: Footer.SELECT_STATE.COMPLETED })}
							>
								Completed
							</a>
						</li>
					</ul>
				</footer>
			</div>
		);
	}
}

export default Footer;
