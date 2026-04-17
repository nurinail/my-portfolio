import { Button, HStack, Image, Link, VStack } from "@chakra-ui/react";

export const routerLink = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Lab", href: "/lab" },
];

export function Header() {
	return (
		<HStack
			as="header"
			// border="1px solid red"
			bg="brandPurple.500"
		>
			<HStack
				w="full"
				justifyContent="space-between"
				marginInline="auto"
				maxW="3xl"
				border={"1px solid red"}
			>
				<Button variant="ghost">
					<Image src="/logo.png" alt="Logo" width={35} height={39} />
				</Button>
				<HStack>
					{routerLink.map((link) => (
						<Link key={link.href} href={link.href}>
							{link.label}
						</Link>
					))}
				</HStack>
			</HStack>
		</HStack>
	);
}
