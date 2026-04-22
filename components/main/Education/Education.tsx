import { Grid, Text, VStack } from "@chakra-ui/react";
import { WorkItem } from "../../common/WorkItem";
import { educationItemUtil } from "../utils";

export function Education() {
	return (
		<VStack alignItems="flex-start" w="full" gap="50px">
			<Text color="white" fontSize="48px">
				Education
			</Text>
			<Grid templateColumns="repeat(2, 1fr)" w="full" gap="20px">
				{educationItemUtil.map((item, index) => (
					<WorkItem
						key={index as number}
						workName={item.workName}
						title={item.title}
						imageSrc={item.image}
					/>
				))}
			</Grid>
		</VStack>
	);
}
