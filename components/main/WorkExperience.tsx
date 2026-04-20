import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { WorkItem } from "../common/WorkItem";
import { workItemUtil } from "./utils";

export function WorkExperience() {
	return (
		<HStack position="relative" mt="7xl" w="full">
			<Box marginInline="auto">
				<Image src="./images/workRadialImg.png" alt="photo" />
			</Box>
			<VStack
				alignItems="flex-start"
				w="full"
				gap="50px"
				position="absolute"
				left="0"
				top="20%"
			>
				<Text color="white" fontSize="48px">
					Work Experience
				</Text>
				<Grid templateColumns="repeat(2, 1fr)" w="full" gap="20px">
					{workItemUtil.map((item) => (
						<WorkItem
							key={item.workName}
							title={item.workName}
							description={item.description}
							imageSrc={item.image}
						/>
					))}
				</Grid>
			</VStack>
		</HStack>
	);
}
