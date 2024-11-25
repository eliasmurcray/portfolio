import React from "react";
import ScrollAnimationComponent from "./scroll-animation-component";
import "../styles/hero.sass";

export default class Hero extends React.Component {
	constructor(props: object) {
		super(props);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	private handleMouseEnter(ev: React.MouseEvent<HTMLDivElement>): void {
		const container = ev.currentTarget as HTMLDivElement;
		container.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
	}

	private handleMouseMove(ev: React.MouseEvent<HTMLDivElement>): void {
		const container = ev.currentTarget as HTMLDivElement;
		const { width, height, left, top } = container.getBoundingClientRect();
		const x = (ev.clientX - left) / width;
		const y = (ev.clientY - top) / height;
		const rotationX = (y - 0.5) * 20;
		const rotationY = (x - 0.5) * -20;
		container.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(1.1)`;
		container.style.setProperty("--x", `${x * 100}%`);
		container.style.setProperty("--y", `${y * 100}%`);
	}

	private handleMouseLeave(ev: React.MouseEvent<HTMLDivElement>): void {
		const container = ev.currentTarget as HTMLDivElement;
		container.style.transition = "transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out";
		container.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
	}

	override render(): React.JSX.Element {
		return (
			<ScrollAnimationComponent className="hero">
				<header className="hero-header">
					<nav>
						<ul>
							<li>
								<a href="#projects">Projects</a>
							</li>
							<li>
								<a href="#experience">Experience</a>
							</li>
							<li>
								<a href="/blog">Blog</a>
							</li>
						</ul>
					</nav>
				</header>
				<div className="inner-content">
					<div className="content">
						<div className="greeting">Hey there,</div>
						<h2>
							My name is Elias Murcray. I&apos;m a <span>software engineer</span> with
							over {new Date().getFullYear() - 2020} years of experience
						</h2>
						<p>
							I&apos;m a versatile programmer with a passion for web development, Vim,
							and C programming. I also love cats!
						</p>
						<a href="#projects">Check out my work</a>
						<a href="/blog" target="_blank">
							<span>Read my blog</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								version="1.1"
								viewBox="15 15 70 75"
								width="16"
								height="16"
							>
								<path d="M28.8,84.1h36l0,0c7.2,0,13-5.8,13-13v-22c0-1.7-1.3-3-3-3l0,0c-1.7,0-3,1.3-3,3v22c0,3.9-3.1,7-7,7l0,0h-36  c-3.9,0-7-3.1-7-7v-36c0-3.9,3.1-7,7-7l0,0h22l0,0c1.7,0,3-1.3,3-3s-1.3-3-3-3h-22l0,0c-7.2,0-13,5.8-13,13l0,0v36  C15.8,78.3,21.6,84.1,28.8,84.1z" />
								<path d="M84.2,37.2V18.9c0-0.2,0-0.4-0.1-0.6c0-0.1,0-0.2-0.1-0.2c0-0.1-0.1-0.2-0.1-0.3c0-0.1-0.1-0.2-0.2-0.3  c0-0.1-0.1-0.2-0.1-0.2c-0.2-0.3-0.5-0.6-0.8-0.8l-0.2-0.1C82.4,16.1,82.2,16,82,16l-0.3-0.1c-0.2,0-0.4-0.1-0.6-0.1l0,0H62.8l0,0  c-1.7,0-3,1.3-3,3s1.3,3,3,3h11.1L46.4,49.4c-1.2,1.2-1.2,3.1,0,4.2c1.2,1.2,3.1,1.2,4.2,0l27.6-27.5v11.1c0,1.7,1.3,3,3,3l0,0  C82.8,40.2,84.1,38.8,84.2,37.2z" />
							</svg>
						</a>
					</div>
					<div
						className="shadow-wrapper"
						onMouseEnter={this.handleMouseEnter}
						onMouseMove={this.handleMouseMove}
						onMouseLeave={this.handleMouseLeave}
					>
						<img
							src="gigachad.webp"
							alt="Elias Murcray wearing a cool white hoodie"
							width="300"
						/>
						<div className="hover-light"></div>
					</div>
				</div>
			</ScrollAnimationComponent>
		);
	}
}
