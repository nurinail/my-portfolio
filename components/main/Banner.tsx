import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { ArrowDownIcon } from "../../public/icons";

export function Banner() {
	return (
		<VStack w="full">
			<HStack w="full" h="380px" justifyContent="flex-start">
				<Box position="relative">
					<Image h="380px" src="/RadialEllipse.png" alt="Radial Ellipse" />
					<Image
						src="/image.png"
						w="165px"
						h="223px"
						alt="Profile Image"
						position="absolute"
						top="50%"
						left="50%"
						transform="translate(-50%, -50%)"
					/>
				</Box>
				<VStack
					justifyContent="space-between"
					h="full"
					maxW="480px"
					gap="85px"
					alignItems="flex-start"
					position="relative"
				>
					<Box position="absolute" top="-8%" translate="-4% 0" left="-27%">
						<ArrowDownIcon boxSize="150px" color="white" />
					</Box>
					<Text color="white" fontSize="text-lg" fontStyle="italic">
						Hello! I Am <span style={{ color: "#7127BA" }}>Nail Nuri</span>
					</Text>
					<VStack alignItems="flex-start">
						<Text fontStyle="italic" fontSize="text-md" color="white">
							A Frontend Developer who
						</Text>
						<Text color="white" fontSize="display-lg" lineHeight="1.4">
							Builds scalable, high-performance{" "}
							<Box
								ml="10px"
								as="span"
								position="relative"
								display="inline-block"
							>
								<Text as="span" color="#7127BA" position="relative" zIndex={1}>
									apps
								</Text>

								<Box
									as="svg"
									position="absolute"
									left="-30px"
									top="-10px"
									width="200%"
									height="200%"
									fill="none"
									pointerEvents="none"
								>
									<ellipse
										cx="100"
										cy="40"
										rx="90"
										ry="28"
										stroke="white"
										strokeWidth="1.5"
										transform="rotate(-6 100 40)"
									/>
								</Box>
							</Box>
							<Box as="span" ml="30px">
								...
							</Box>
						</Text>
						<Text color="white" fontSize="text-xs" fontWeight="300">
							Because if the cover does not impress you what else can?
						</Text>
					</VStack>
				</VStack>
			</HStack>
		</VStack>
	);
}
