import * as React from "react";

class Footer extends React.Component {
	public constructor(props: Readonly<{}>) {
		super(props);
	}
	public render() {
		return (
			<div>
				<footer className="footer">
					<span className="todo-count">
						<strong>1 {1 === 1 ? "item" : "items"}</strong> left
					</span>
				</footer>
			</div>
		);
	}
}

export default Footer;
