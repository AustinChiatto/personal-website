import { ListCardProps } from '@/components/ListCard/ListCard';
import { componentMap } from './component-map';
// project-data imports
import { MarketMaestroData } from './project-data/market-maestro-data';
import { ArticleProps, ExternalLinkProps, TechStackProps } from './project-data/types';

type IntroProps = {
    title: string;
    desc?: string;
};

type PanelComponentProps = {
    image?: string;
    cardDesc?: string;
    externalLinks?: ExternalLinkProps[];
    listCards?: ListCardProps[];
    article?: ArticleProps[];
    techStack?: TechStackProps[];
    categoryButtonList?: Array<Record<string, string>>;
};

export type PanelProps = {
    id: string;
    level: number;
    intro: IntroProps;
    panelComponent: keyof typeof componentMap;
    panelComponentProps?: PanelComponentProps;
    childPanels?: PanelProps[];
    panelRef?: React.RefObject<HTMLDivElement>;
};

export const panelData = {
    id: 'landing',
    level: 1,
    intro: {
        title: 'Austin Chiatto',
        desc: 'Developer'
    },
    panelComponent: 'LandingPanel',
    panelComponentProps: {
        categoryButtonList: [
            {
                icon: '/icons/work-icon.svg',
                alt: 'Squiggly doodle of a star',
                title: 'Work',
                caption: "Websites I've built for others or as part of my career."
            },
            {
                icon: '/icons/projects-icon.svg',
                alt: 'Squiggly doodle of a diamond',
                title: 'Projects',
                caption: 'Self-directed projects that taught me something new.'
            },
            {
                icon: '/icons/about-icon.svg',
                alt: 'Squiggly asterisk doodle',
                title: 'About Me',
                caption: 'Who I am and what I love to do.'
            }
        ]
    },
    childPanels: [
        // Work
        {
            id: 'work',
            level: 2,
            intro: {
                title: 'Work',
                desc: 'Developer'
            },
            panelComponent: 'ProjectList',
            // work - Market Maestro
            childPanels: [
                {
                    id: 'marketMaestro',
                    level: 3,
                    intro: {
                        title: 'Market Maestro',
                        desc: 'This project involved transforming Figma design documents into a functional site and a set of themed MUI components.'
                    },
                    panelComponent: 'ProjectDetails',
                    panelComponentProps: {
                        image: '/images/market-maestro_work-thumbnail.png',
                        cardDesc:
                            'Responsive Next.js site that I built as part of my internship with Dovetail Digital.',
                        externalLinks: MarketMaestroData.externalLinks,
                        listCards: [
                            {
                                cardTitle: 'Team Members',
                                cardType: 'grid',
                                cardContents: MarketMaestroData.teamMembers
                            },
                            {
                                cardTitle: 'Tech Stack',
                                cardType: 'list',
                                buttonLabel: 'All Tools',
                                buttonChildIdRef: 'projectTechStack',
                                cardContents: MarketMaestroData.techStack
                            }
                        ],
                        article: MarketMaestroData.article
                    },
                    // work - Market Maestro Technology
                    childPanels: [
                        {
                            id: 'projectTechStack',
                            level: 4,
                            intro: {
                                title: 'Project Stack',
                                desc: 'The languages, tools, and methodologies behind the construction of this project, as well as how and why I chose to implement them over others.'
                            },
                            panelComponent: 'ProjectTechStack',
                            panelComponentProps: {
                                techStack: MarketMaestroData.techStack
                            }
                        }
                    ]
                }
            ]
        },
        // Projects
        {
            id: 'projects',
            level: 2,
            intro: {
                title: 'Projects',
                desc: 'Projects Description'
            },
            panelComponent: 'ProjectList',
            // projects - level 2
            childPanels: [
                {
                    id: 'AsteroidRun',
                    level: 3,
                    intro: {
                        title: 'Asteroid Run',
                        desc: 'A browser-based game I built to teach myself object-oriented programming with JavaScript.'
                    },
                    panelComponent: 'ProjectDetails',
                    panelComponentProps: {
                        image: '/images/asteroid-run_project-thumbnail.png',
                        cardDesc:
                            'A responsive landing page using Next.js for my frontend development internship at Dovetail Digital.',
                        listCards: [
                            {
                                cardTitle: 'Tech Stack',
                                cardType: 'list',
                                buttonLabel: 'All Tools',
                                buttonChildIdRef: 'projectTechStack',
                                cardContents: MarketMaestroData.techStack
                            }
                        ],
                        externalLinks: [
                            { label: 'Play Game', href: '#', favicon: '/images/mm-favicon.jpeg' },
                            { label: 'Source Code', href: '#', favicon: '/images/mm-favicon.jpeg' }
                        ]
                    },
                    childPanels: [
                        {
                            id: 'projectTechStack',
                            level: 4,
                            intro: {
                                title: 'Project Technology',
                                desc: 'testing'
                            },
                            panelComponent: 'ProjectTechStack'
                        }
                    ]
                },
                {
                    id: 'Code2Image',
                    level: 3,
                    intro: {
                        title: 'Code2Image',
                        desc: 'Create beautiful images of your code snippets using this app I built to learn more about React, specifically the useRef hook.'
                    },
                    panelComponent: 'ProjectDetails',
                    panelComponentProps: {
                        image: '/images/code2image_project-thumbnail.png',
                        cardDesc:
                            'A responsive landing page using Next.js for my frontend development internship at Dovetail Digital.',
                        listCards: [
                            {
                                cardTitle: 'Tech Stack',
                                cardType: 'list',
                                buttonLabel: 'All Tools',
                                buttonChildIdRef: 'projectTechStack',
                                cardContents: MarketMaestroData.techStack
                            }
                        ]
                    }
                },
                {
                    id: 'Shallot',
                    level: 3,
                    intro: {
                        title: 'Shallot',
                        desc: 'Create beautiful images of your code snippets using this app I built to learn more about React, specifically the useRef hook.'
                    },
                    panelComponent: 'ProjectDetails',
                    panelComponentProps: {
                        image: '/images/market-maestro_work-thumbnail.png',
                        cardDesc:
                            'A responsive landing page using Next.js for my frontend development internship at Dovetail Digital.',
                        listCards: [
                            {
                                cardTitle: 'Tech Stack',
                                cardType: 'list',
                                buttonLabel: 'All Tools',
                                buttonChildIdRef: 'projectTechStack',
                                cardContents: MarketMaestroData.techStack
                            }
                        ]
                    }
                },
                {
                    id: 'ReactDeploymentChecklist',
                    level: 3,
                    intro: {
                        title: 'React Deployment Checklist',
                        desc: 'Create beautiful images of your code snippets using this app I built to learn more about React, specifically the useRef hook.'
                    },
                    panelComponent: 'ProjectDetails',
                    panelComponentProps: {
                        image: '/images/code2image_project-thumbnail.png',
                        cardDesc:
                            'A responsive landing page using Next.js for my frontend development internship at Dovetail Digital.',
                        listCards: [
                            {
                                cardTitle: 'Tech Stack',
                                cardType: 'list',
                                buttonLabel: 'All Tools',
                                buttonChildIdRef: 'projectTechStack',
                                cardContents: MarketMaestroData.techStack
                            }
                        ]
                    }
                }
            ]
        },
        // About Me
        {
            id: 'about',
            level: 2,
            intro: {
                title: 'Hello',
                desc: "It's nice to meet you."
            },
            panelComponent: 'AboutContent'
        }
    ]
};
