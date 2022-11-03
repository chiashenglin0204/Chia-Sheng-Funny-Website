import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { DarkModeButton } from "../DarkModeButton";
import { NavLink } from "../NavLink";

export const DesktopNavBar = () => {
  const router = useRouter();
  return (
		<Box
			display="flex"
			position="relative"
			as="nav"
			w="100%"
			bg={useColorModeValue('#fad0f7d3', '#6a96dae8')}
			css={{ backdropFilter: 'blur(10px)' }}
			zIndex={10}
		>
			<Container
				display="flex"
				maxW="container.md"
				wrap="wrap"
				align="center"
				justify="space-between"
			>
				<Center width="100%">
					<Flex align="center" mr={5}>
						<Link href="/">
							<Heading as="h1" size="md">
								Chia-Sheng Lin
							</Heading>
						</Link>
					</Flex>

					<NavLink
						href={'/playground'}
						toggleOn={router.pathname === '/playground'}
					>
						Cat-Playground
					</NavLink>

					<NavLink
						href={'/workExperience'}
						toggleOn={router.pathname === '/workExperience'}
					>
						Work Experience
					</NavLink>
					<DarkModeButton />
				</Center>
			</Container>
		</Box>
	);
};
