import React from 'react';
import {
	Box,
	Heading,
	Link,
	Image,
	Text,
	Divider,
	HStack,
	Tag,
	Wrap,
	WrapItem,
	SpaceProps,
	useColorModeValue,
	Container,
	VStack,
	List,
	ListItem,
	ListIcon,
} from '@chakra-ui/react';
import { MdCheckCircle, MdSettings } from 'react-icons/md';

interface IBlogTags {
	tags: Array<string>;
	marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = props => {
	return (
		<HStack spacing={2} marginTop={props.marginTop}>
			{props.tags.map(tag => {
				return (
					<Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
						{tag}
					</Tag>
				);
			})}
		</HStack>
	);
};

interface BlogAuthorProps {
	date: Date;
	name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = props => {
	return (
		<HStack marginTop="2" spacing="2" display="flex" alignItems="center">
			<Image
				borderRadius="full"
				boxSize="40px"
				src="/IMG_3406 Small.jpeg"
				alt={`Avatar of ${props.name}`}
			/>
			<Text fontWeight="medium">{props.name}</Text>
			<Text>—</Text>
			<Text>{props.date.toLocaleDateString()}</Text>
		</HStack>
	);
};

const ArticleList = () => {
	return (
		<Container maxW={'7xl'} p="12">
			<Heading as="h1">My Work Experience</Heading>
			<Box
				marginTop={{ base: '1', sm: '5' }}
				display="flex"
				flexDirection={{ base: 'column', sm: 'row' }}
				justifyContent="space-between"
			>
				<Box
					display="flex"
					flex="1"
					marginRight="3"
					position="relative"
					alignItems="center"
				>
					<Box
						width={{ base: '100%', sm: '85%' }}
						zIndex="2"
						marginLeft={{ base: '0', sm: '5%' }}
						marginTop="5%"
					>
						<Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
							<Image
								borderRadius="lg"
								src="/sapImage.jpeg"
								alt="some good alt text"
								objectFit="contain"
							/>
						</Link>
					</Box>
					<Box zIndex="1" width="100%" position="absolute" height="100%">
						<Box
							bgGradient={useColorModeValue(
								'radial(orange.600 1px, transparent 1px)',
								'radial(orange.300 1px, transparent 1px)'
							)}
							backgroundSize="20px 20px"
							opacity="0.4"
							height="100%"
						/>
					</Box>
				</Box>
				<Box
					display="flex"
					flex="1"
					flexDirection="column"
					justifyContent="center"
					marginTop={{ base: '3', sm: '0' }}
				>
					<BlogTags tags={['Software Development']} />
					<Heading marginTop="1">
						<Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
							SAP Canada
						</Link>
					</Heading>
					<Heading size="md" as="i">
						Agile Developer Intern
					</Heading>
					<Text as="b">What I do:</Text>
					<List spacing={3}>
						<ListItem>
							<ListIcon as={MdCheckCircle} color="green.500" />
							Build novel features and perform bug fixes through practical
							programming design using JavaScript , HTML, and CSS to deliver
							clients an improved product.
						</ListItem>
						<ListItem>
							<ListIcon as={MdCheckCircle} color="green.500" />
							Develop, maintain and implement automated unit testing using
							Jasmine and Cypress frameworks
						</ListItem>
						<ListItem>
							<ListIcon as={MdCheckCircle} color="green.500" />
							Adopt lean and agile software development principles by
							collaborating in a team setting and using online tools such as
							GitHub, Gerrit and JIRA to organize workflow
						</ListItem>
						{/* You can also use custom icons from react-icons */}
						<ListItem>
							<ListIcon as={MdSettings} color="green.500" />
							Reduce 25% bug count by working on a codebase using debugging tool
							and end-to-end software development principle
						</ListItem>
					</List>
					<BlogAuthor
						name="Chia-Sheng Lin"
						date={new Date('2022-11-01T19:01:27Z')}
					/>
				</Box>
			</Box>
		</Container>
	);
};

export default ArticleList;
