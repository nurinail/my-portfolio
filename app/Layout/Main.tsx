import { VStack } from "@chakra-ui/react";
import { Banner, LandingHero, WorkExperience } from "../../components/main";
import { Education } from "../../components/main/Education/Education";

export function Main() {
	return (
		<VStack py="10xl" maxW="3xl" marginInline="auto">
			<Banner />
			<WorkExperience />
			<LandingHero />
			<Education />
		</VStack>
	);
}
