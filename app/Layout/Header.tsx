import { Button, HStack, Link } from "@chakra-ui/react";
import { LogoIcon } from "../assets/icons";

export const routerLink = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Lab", href: "/lab" },
];

export function Header() {
	return (
		<HStack as="header" py="4xl" bg="brandPurple.500">
			<HStack
				w="full"
				justifyContent="space-between"
				marginInline="auto"
				maxW="3xl"
			>
				<Button cursor="pointer" variant="ghost">
					<LogoIcon color="white" />
				</Button>
				<HStack gap="11xl">
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
