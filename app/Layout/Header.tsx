"use client";
import { Button, HStack, Image, Link } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";

export const routerLink = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Lab", href: "/lab" },
];

export function Header() {
	const navigate = useNavigate();
	return (
		<HStack id="header" as="header" bg="brandPurple.500">
			<HStack
				w="full"
				justifyContent="space-between"
				marginInline="auto"
				maxW="3xl"
				pr="3xl"
			>
				<Button
					onClick={() => navigate({ to: "/" })}
					cursor="pointer"
					variant="ghost"
				>
					<Image
						w="70px"
						objectFit="contain"
						h="70px"
						alt="Logo"
						src="./images/logoNN.png"
					/>
				</Button>
				<HStack gap={{ base: "md", md: "11xl" }}>
					{routerLink.map((link) => (
						<Link
							_hover={{ textDecoration: "none" }}
							color="white"
							key={link.href}
							href={link.href}
						>
							{link.label}
						</Link>
					))}
				</HStack>
			</HStack>
		</HStack>
	);
}
