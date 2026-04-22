import {
	Box,
	Button,
	GridItem,
	HStack,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";

export interface WorkItemProps {
	title: string;
	workName: string;
	imageSrc: string;
	description?: string;
}

export function WorkItem({
	title,
	workName,
	description,
	imageSrc,
}: WorkItemProps) {
	return (
		<GridItem
			background="linear-gradient(to right,  #38126D,#130428, #251043, #261045, #220d41ff)"
			p="0"
			borderTopWidth="10px"
			borderTopColor="#4F228D"
			borderRadius="30px"
			transition=".4s ease-in-out"
			_hover={{
				transform: "scale(1.05)",
			}}
		>
			<HStack py="36px" px="50px" w="full">
				<Box flexShrink={0} w="121px" h="111px">
					<Image
						w="full"
						h="full"
						objectFit="contain"
						src={imageSrc}
						alt="photo"
					/>
				</Box>
				<VStack alignItems="flex-start">
					<Text lineHeight="1" color="white" fontSize="30px">
						{workName}
					</Text>
					<Text color="white" fontSize="10px" fontWeight="400">
						{title}
					</Text>
					{description && (
						<Button
							cursor="pointer"
							borderWidth="1px"
							borderColor="#693B93"
							bg="#2C1250"
							fontSize="text-xs"
							variant="ghost"
							transition=".4s ease-in-out"
							_hover={{
								transform: "scale(1.05)",
							}}
							color="white"
							py="10px"
							px="20px"
							borderRadius="10px"
						>
							Learn More
						</Button>
					)}
				</VStack>
			</HStack>
		</GridItem>
	);
}
