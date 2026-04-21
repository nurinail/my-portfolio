import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { landingHeroLogoUtil } from "../utils";
import { StackItem } from "./StackItem";

export function LandingHero() {
	return (
		<VStack gap="133px" mt="20" w="full">
			<VStack w="full">
				<Text fontStyle="italic" color="white" fontSize="display-xs">
					I'm currently looking to join a cross-functional team
				</Text>
				<Text fontWeight="300" color="white" fontSize="text-lg">
					that values improving people's lives through accessible design{" "}
				</Text>
			</VStack>
			<VStack gap="0" position="relative">
				<HStack
					top="-15%"
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
