import { VStack } from "@chakra-ui/react";
import { Banner } from "../../components/main";

export function Main() {
	return (
		<VStack py="10xl" maxW="3xl" marginInline="auto">
			<Banner />
		</VStack>
	);
}
