import React, { Component } from "react";
import ImageGroup from "./imageGroup";
import Grid from "./grid";
import { storeFront, cropped } from "../images";

/**
 * @class ContactSection
 * @extends {Component}
 *
 * COMPONENT PURPOSE:
 * 	Render the CONTACT SECTION
 *
 * ADDITIONALY FUNCTIONS:
 * 	mobileRender
 *
 * CHILD COMPONENTS:
 * 	ImageGroup
 * 	Grid
 */
class ContactSection extends Component {
	state = {};
	mobileRender = () => {
		return (
			<Grid columns="auto" rows="auto" id="contactSection">
				<div className="hours" style={{ alignSelf: "end" }}>
					<p>HOURS</p>
					<p>MON-THUR / 11-9</p>
					<p>FRI / 11-10</p>
					<p>SAT / 12-10</p>
				</div>
				<ImageGroup
					start={1}
					end={4}
					containerStyles={{
						display: "flex",
						justifyContent: "space-evenly",
						alignItems: "center"
					}}
				/>
				<div className="address" style={{ alignSelf: "start" }}>
					<p>1825 SE 164TH AVE</p>
					<p>SUITE 101</p>
					<p>VANCOUVER, WA 98683</p>
					<p>(360) 882-8887</p>
				</div>
			</Grid>
		);
	};

	desktopRender = () => {
		return (
			<Grid
				columns="25% 25% 25% 25%"
				rows="30% 30% 30%"
				id="contactSection"
				alignItems="center"
			>
				<img
					src={cropped[0]}
					alt="food"
					className="img-left-lg"
					style={{
						gridRowStart: 1,
						gridRowEnd: 2
					}}
				/>
				<img
					src={cropped[1]}
					alt="food"
					className="img-left-lg"
					style={{
						gridRowStart: 2,
						gridRowEnd: 3
					}}
				/>
				<img
					src={cropped[2]}
					alt="food"
					className="img-left-lg"
					style={{
						gridRowStart: 3,
						gridRowEnd: 4
					}}
				/>
				<div className="hours hoursDesktop">
					<p>HOURS</p>
					<p>MON-THUR / 11-9</p>
					<p>FRI / 11-10</p>
					<p>SAT / 12-10</p>
				</div>
				<div className="address addressDesktop">
					<p>1825 SE 164TH AVE</p>
					<p>SUITE 101</p>
					<p>VANCOUVER, WA 98683</p>
					<p>(360) 882-8887</p>
				</div>
				<img
					src={cropped[0]}
					alt="food"
					className="img-right-lg"
					style={{
						gridRowStart: 1,
						gridRowEnd: 2,
						gridColumnStart: 4
					}}
				/>
				<img
					src={cropped[1]}
					alt="food"
					className="img-right-lg"
					style={{
						gridRowStart: 2,
						gridRowEnd: 3,
						gridColumnStart: 4
					}}
				/>
				<img
					src={cropped[2]}
					alt="food"
					className="img-right-lg"
					style={{
						gridRowStart: 3,
						gridRowEnd: 4,
						gridColumnStart: 4
					}}
				/>

				<img
					src={storeFront}
					alt="storefront"
					style={{
						gridRowStart: 2,
						gridRowEnd: 4,
						gridColumnStart: 2,
						gridColumnEnd: 4,
						justifySelf: "center",
						borderRadius: "50%",
						maxWidth: "100%"
					}}
				/>
			</Grid>
		);
	};

	render() {
		return this.props.mobile ? this.mobileRender() : this.desktopRender();
	}
}

export default ContactSection;
