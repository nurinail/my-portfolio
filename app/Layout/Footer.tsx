"use client";
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
			<Text color="white" fontSize="40px">
				Contact
			</Text>
			<Text maxW="700px" mt="10" mb="2xl" color="white" fontSize="text-md">
				Always open to interesting ideas and collaborations. Feel free to reach
				out if you'd like to build something together.
			</Text>
			<HStack gap="30px">
				{contactMeUtil.map((item, index) => (
					<Link
						as={NextLink}
						key={index as number}
						href={item.href}
						target="_blank"
						_hover={{ transform: "scale(1.2) rotate(10deg)" }}
						transition="0.4s ease-in-out"
					>
						{item.icon({ color: "white", size: "24px" })}
					</Link>
				))}
			</HStack>
		</VStack>
	);
}
