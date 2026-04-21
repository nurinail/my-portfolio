import { Box } from "@chakra-ui/react";
import { Footer } from "./Layout/Footer";
import { Header } from "./Layout/Header";
import { Main } from "./Layout/Main";

export default function Home() {
	return (
		<Box bg="brandPurple.700">
			<Header />
			<Main />
			<Footer />
		</Box>
	);
}
