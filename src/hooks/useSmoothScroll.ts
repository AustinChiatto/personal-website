import { PanelProps } from '@/data/panel-data';
import { MutableRefObject, useRef } from 'react';

export const useSmoothScroll = ({
    scrollContainerRef
}: {
    scrollContainerRef: MutableRefObject<HTMLDivElement | null>;
}) => {
    const ongoingAnimation = useRef<number | null>(null);

    const handleTabClick = (index: number) => {
        const scrollContainer = scrollContainerRef.current;
        const viewportWidth = window.innerWidth;

        if (ongoingAnimation.current) {
            cancelAnimationFrame(ongoingAnimation.current);
            ongoingAnimation.current = null;
        }

        if (!scrollContainer) return;

        const currentPanel = scrollContainer?.children[index] as HTMLElement;
        const nextPanel = scrollContainer?.children[index + 1] as HTMLElement;

        console.log(scrollContainer.scrollLeft);
        console.log(currentPanel.getBoundingClientRect().right);
        console.log(
            'newScrollTarget: ' +
                (currentPanel.getBoundingClientRect().right -
                    viewportWidth +
                    scrollContainer.scrollLeft)
        );

        if (!currentPanel || !nextPanel) return;

        const panelWidth = currentPanel.offsetWidth;

        // target scroll for panels that are off screen to the right
        // const rightTargetScroll =
        //     currentPanel.getBoundingClientRect().right - viewportWidth + scrollContainer.scrollLeft;

        // target scroll for panels being covered by sequential panels
        const targetScroll =
            scrollContainer.scrollLeft -
            nextPanel.offsetLeft +
            nextPanel.getBoundingClientRect().left +
            index * panelWidth -
            currentPanel.getBoundingClientRect().left;

        const duration: number = 2000;
        let startTime: number = Date.now();

        const scrollSmoothly = () => {
            if (scrollContainer.scrollLeft <= targetScroll) return;

            const time: number = (Date.now() - startTime) / duration;
            const difference = targetScroll - scrollContainer.scrollLeft;
            const perTick = difference * time;

            scrollContainer.scrollLeft += perTick;

            ongoingAnimation.current = requestAnimationFrame(scrollSmoothly);
        };

        startTime = Date.now();
        scrollSmoothly();

        setTimeout(() => {
            cancelAnimationFrame(ongoingAnimation.current!);
            ongoingAnimation.current = null;
        }, duration);
    };

    return handleTabClick;
};
