import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { ArrowDownIcon } from "../../public/icons";

export function Banner() {
	return (
		<VStack w="full">
			<HStack w="full" h="380px" justifyContent="flex-start">
				<Box position="relative">
					<Image src="/images/RadialEllipse.png" alt="Radial Ellipse" />
					<Image
						src="/images/faceImg.png"
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
					justifyContent="flex-start"
					h="full"
					maxW="480px"
					gap="92px"
					alignItems="flex-start"
					position="relative"
				>
					<Box position="absolute" top="-8%" translate="-4% 0" left="-27%">
						<ArrowDownIcon boxSize="150px" color="white" />
					</Box>
					<Text color="white" fontSize="text-lg" fontStyle="italic">
						Hello! I Am <span style={{ color: "#7127BA" }}>Nail Nuri</span>
					</Text>
					<VStack gap="0" alignItems="flex-start">
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
			<VStack alignItems="flex-start" w="full">
				<Text fontSize="display-lg" color="white">
					I'm a Frontend Developer.|
				</Text>
				<HStack mt="10px" alignItems="center">
					<Text color="white" fontSize="text-xl" fontWeight="300">
						Currently, I'm a Frontend Developer at{" "}
					</Text>
					<HStack>
						<Image
							src="/images/iktexLogo.png"
							fontSize="text-xl"
							alt="IKTEX"
							w="20px"
							h="20px"
						/>
						<Text color="white" fontWeight="bold">
							IKTEX
						</Text>
					</HStack>
				</HStack>
				<Text fontSize="22px" mt="69px" fontWeight="300" color="white">
					A self-taught UI/UX designer, functioning in the industry for 3+ years
					now. I make meaningful and delightful digital products that create an
					equilibrium between user needs and business goals.
				</Text>
			</VStack>
		</VStack>
	);
}
