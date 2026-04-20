import { Box } from "@chakra-ui/react";
import { Header } from "./Layout/Header";
import { Main } from "./Layout/Main";

export default function Home() {
	return (
		<Box bg="brandPurple.700">
			<Header />
			<Main />
		</Box>
	);
}
