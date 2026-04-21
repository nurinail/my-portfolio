import { Text, VStack } from "@chakra-ui/react";

export function LandingHero() {
	return (
		<VStack mt="20" border={"1px solid red"} w="full">
			<VStack w="full">
				<Text fontStyle="italic" color="white" fontSize="display-xs">
					I'm currently looking to join a cross-functional team
				</Text>
				<Text fontWeight="300" color="white" fontSize="text-lg">
					that values improving people's lives through accessible design{" "}
				</Text>
			</VStack>
		</VStack>
	);
}
