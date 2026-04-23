import { Box, Image } from "@chakra-ui/react";

export function StackItem({ image }: { image: string }) {
	return (
		<Box
			w="44px"
			h="44px"
			borderRadius="full"
			transition=".4s ease-in"
			_hover={{ transform: "scale(1.2) rotate(10deg)" }}
			bg="#251C31"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<Image objectFit="contain" src={image} alt="Stack Icon" boxSize="20px" />
		</Box>
	);
}
