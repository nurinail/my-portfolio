import { Box, Button, Image } from "@chakra-ui/react";

export function Header() {
	return (
		<Box as="header" maxW="3xl" marginInline="auto" border="1px solid red">
			<Button variant="ghost">
				<Image src="/logo.png" alt="Logo" width={35} height={39} />
			</Button>
		</Box>
	);
}
