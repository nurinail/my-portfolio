import { Box } from "@chakra-ui/react";
import { Header } from "./Layout/Header";
import { Main } from "./Layout/Main";

export default function Home() {
	return (
		<Box h="100dvh" bg="brandPurple.700">
			<Header />
			<Main />
		</Box>
	);
}
