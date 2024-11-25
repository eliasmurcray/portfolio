import React from "react";
import "../styles/scroll-animation-component.sass";

interface ScrollAnimationProps {
	children: React.JSX.Element[];
	className: string;
}

export default class ScrollAnimationComponent extends React.Component<ScrollAnimationProps> {
	private sectionRef: React.RefObject<HTMLDivElement>;

	constructor(props: ScrollAnimationProps) {
		super(props);
		this.sectionRef = React.createRef();
	}

	#onScroll = () => {
		const section = this.sectionRef.current;
		if (section) {
			if (section.getBoundingClientRect().top + 90 < window.innerHeight) {
				section.classList.add("in-view");
			} else {
				section.classList.remove("in-view");
			}
		}
	};

	override componentDidMount(): void {
		const section = this.sectionRef.current;
		if (section) {
			document.body.addEventListener("scroll", this.#onScroll);
			this.#onScroll();
		}
	}

	override render(): React.JSX.Element {
		return (
			<section ref={this.sectionRef} className={this.props.className}>
				{this.props.children}
			</section>
		);
	}
}
