import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { contactMeUtil } from "../../components/main/utils";

export function Footer() {
	return (
		<VStack
			maxW="3xl"
			pb="60px"
			marginInline="auto"
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
			<HStack gap="30px" mt="30px">
				{contactMeUtil.map((item) => (
					<NextLink passHref key={item.href} href={item.href} target="_blank">
						<Link
							_hover={{ transform: "scale(1.2)" }}
							transition="0.4s ease-in-out"
						>
							{item.icon({ color: "white" })}
						</Link>
					</NextLink>
				))}
			</HStack>
		</VStack>
	);
}
