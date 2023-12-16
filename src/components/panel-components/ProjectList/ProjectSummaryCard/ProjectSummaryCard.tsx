import { useContext } from 'react';
import Chip from '../../../Chip/Chip';
import Typography from '../../../Typography/Typography';
import styles from './ProjectSummaryCard.module.css';
import PanelsContext from '@/context/PanelsContext';
import Image from 'next/image';
import { ListCardProps } from '../../../ListCard/ListCard';
import { PanelProps } from '@/data/panel-data';
import { TechStackProps } from '@/data/project-data/types';

type ProjectSummaryCardProps = {
    title: string;
    index: number;
    desc: string;
    image: string;
    cardData: PanelProps;
};

const ProjectSummaryCard = ({ title, desc, image, cardData }: ProjectSummaryCardProps) => {
    const { createPanel } = useContext(PanelsContext);
    const listCardArray = cardData?.panelComponentProps?.listCards ?? [];

    const techStackListCard =
        listCardArray &&
        listCardArray.find((lc: ListCardProps) => lc.buttonChildIdRef == 'projectTechStack');

    const techStackContents: TechStackProps[] = techStackListCard?.cardContents ?? [];

    return (
        <article
            className={styles.ProjectSummaryCard}
            onClick={() =>
                createPanel({
                    id: cardData.id,
                    level: cardData.level,
                    intro: cardData.intro,
                    panelComponent: cardData.panelComponent,
                    panelComponentProps: cardData.panelComponentProps,
                    childPanels: cardData.childPanels
                })
            }
        >
            <div>
                <Typography level={3}>{title}</Typography>
                <Typography color={'secondary'}>{desc}</Typography>
            </div>
            <div className={styles.picture}>
                <Image
                    src={image}
                    alt="testing"
                    width={1174}
                    height={660}
                    className={styles.image}
                />
            </div>
            <ul className={styles.chipList}>
                {techStackContents &&
                    techStackContents.slice(0, 4).map((e, i) => (
                        <li key={i}>
                            <Chip chipLabel={e.label} />
                        </li>
                    ))}
            </ul>
        </article>
    );
};

export default ProjectSummaryCard;
