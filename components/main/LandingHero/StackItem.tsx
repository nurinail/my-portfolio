import { Box, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface StackItemProps extends BoxProps {
	children: ReactNode;
	wrapperProps?: BoxProps;
}

export function StackItem({ children, wrapperProps, ...rest }: StackItemProps) {
	return (
		<Box
			position="absolute"
			{...rest} // top, left və s burdan gəlir
		>
			<Box
				w="60px"
				h="60px"
				borderRadius="full"
				bg="rgba(255,255,255,0.05)"
				display="flex"
				alignItems="center"
				justifyContent="center"
				{...wrapperProps}
			>
				{children}
			</Box>
		</Box>
	);
}
