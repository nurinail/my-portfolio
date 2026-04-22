import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { ArrowDownIcon } from "../../../public/icons";

export function Banner() {
	return (
		<VStack w="full">
			<HStack w="full" h="380px" justifyContent="flex-start">
				<Box
					transition="0.4s ease-in-out"
					_hover={{
						transform: "scale(1.2)",
					}}
					position="relative"
				>
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
					<Text
						transition="0.4s ease-in-out"
						_hover={{
							transform: "scale(1.1)",
						}}
						color="white"
						fontSize="text-lg"
						fontStyle="italic"
					>
						Hello! I'm <span style={{ color: "#7127BA" }}>Nail Nuri</span>
					</Text>
					<VStack gap="0" alignItems="flex-start">
						<Text
							transition="0.4s ease-in-out"
							_hover={{
								transform: "scale(1.1)",
							}}
							fontStyle="italic"
							fontSize="text-md"
							color="white"
						>
							A Frontend Developer who
						</Text>
						<Text
							transition="0.4s ease-in-out"
							_hover={{
								transform: "scale(1.1)",
							}}
							color="white"
							fontSize="display-lg"
							lineHeight="1.4"
						>
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
						<Text
							transition="0.4s ease-in-out"
							_hover={{
								transform: "scale(1.1)",
							}}
							color="white"
							fontSize="text-xs"
							fontWeight="300"
						>
							I design and develop user-centric digital products with a strong
							focus on performance and scalability.
						</Text>
					</VStack>
				</VStack>
			</HStack>
			<VStack alignItems="flex-start" w="full">
				<Text
					transition="0.4s ease-in-out"
					_hover={{
						transform: "scale(1.01)",
					}}
					lineHeight="1"
					fontSize="display-lg"
					color="white"
				>
					Frontend Developer with a passion for building modern, scalable, and
					user-focused applications.
				</Text>
				<HStack
					transition="0.4s ease-in-out"
					_hover={{
						transform: "scale(1.05)",
					}}
					mt="10px"
					alignItems="center"
				>
					<Text color="white" fontSize="text-xl" fontWeight="300">
						Currently working as a Frontend Developer at
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
				<Text
					transition="0.4s ease-in-out"
					_hover={{
						transform: "scale(1.05)",
					}}
					fontSize="22px"
					mt="40px"
					fontWeight="300"
					color="white"
				>
					I design and develop user-centric digital products with a strong focus
					on performance and scalability.
				</Text>
			</VStack>
		</VStack>
	);
}
