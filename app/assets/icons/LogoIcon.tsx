"use client";
import { createIcon } from "@chakra-ui/react";

export const LogoIcon = createIcon({
	displayName: "LogoIcon",
	viewBox: "0 0 35 43",
	defaultProps: {
		boxSize: "35px",
	},
	path: (
		<>
			<path d="M0 2H35" stroke="currentColor" strokeWidth="4" />
			<path d="M0 40.5518H35" stroke="currentColor" strokeWidth="4" />
			<path
				d="M21.4375 2L7 20.8276L21.4375 41"
				stroke="currentColor"
				strokeWidth="4"
			/>
		</>
	),
});
