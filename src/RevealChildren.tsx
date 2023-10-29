// courtesy of @MKRhere

import React from "react";
import { motion } from "framer-motion";

const RevealChildren: React.FC<{
	type: "div" | "span" | "li";
	children: (
		| string
		| number
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
	)[];
	show: boolean;
}> = ({ type, children: items, show = false, ...props }) => {
	const Comp = motion[type];
	const opacity = show ? 1 : 0;
	const y = show ? 0 : -10;

	return (
		<>
			{items.map((item, i) => (
				<Comp
					key={i}
					initial={{ opacity: 0, y: -10 }}
					animate={{
						opacity,
						y: y * i,
						transition: {
							delay: i * 0.1,
						},
					}}
					{...props}>
					{item}
				</Comp>
			))}
		</>
	);
};

export default RevealChildren;
