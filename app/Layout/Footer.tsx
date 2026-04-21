import { HStack, Text, VStack } from "@chakra-ui/react";

export function Footer() {
	return (
		<VStack
			// py="10xl"
			maxW="3xl"
			marginInline="auto"
			border="1px solid white"
			as="footer"
			alignItems="flex-start"
		>
			<Text color="white" fontSize="display-xs">
				Contact
			</Text>
			<Text maxW="700px" mt="73px" mb="2xl" color="white" fontSize="text-md">
				I'm currently looking to join a cross-functional team that values
				improving people's lives through accessible design. or have a project in
				mind? Let's connect.
			</Text>
			<Text color="white" fontSize="text-md">
				nurinail2003@gmail.com
			</Text>
			<HStack></HStack>
		</VStack>
	);
}
