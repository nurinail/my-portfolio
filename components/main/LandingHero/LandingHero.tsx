import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { landingHeroLogoUtil } from "../utils";
import { StackItem } from "./StackItem";

export function LandingHero() {
	return (
		<VStack gap="133px" mt="20" w="full">
			<VStack w="full">
				<Text fontStyle="italic" color="white" fontSize="display-xs">
					Frontend Developer focused on scalable and high-performance web
					applications
				</Text>
				<Text fontWeight="300" color="white" fontSize="text-lg">
					Creating modern, performant, and user-focused interfaces using React
					and TypeScript
				</Text>
			</VStack>
			<VStack gap="0" position="relative">
				<HStack
					top="-12%"
					position="absolute"
					maxW="380px"
					flexWrap="wrap"
					gap="11px"
					justifyContent="center"
				>
					{landingHeroLogoUtil.map((item) => (
						<StackItem key={item.id} image={item.image} />
					))}
				</HStack>
				<Image
					w="895px"
					h="571px"
					objectFit="contain"
					src="/images/landingHero.png"
					alt="Landing Hero Image"
				/>
			</VStack>
		</VStack>
	);
}
