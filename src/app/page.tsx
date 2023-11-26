import Typography from '@/components/Typography/Typography';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section
        className={styles.basePanel}
        style={{ left: 0 }}
      >
        <div className={styles.panelIntro}>
          <Typography
            level={2}
            variant={'title'}
          >
            👋 Hey
          </Typography>
          <Typography
            variant={'body'}
            color={'secondary'}
          >
            I&apos;m Austin, a frontend JavaScript developer who loves using code, animation, and
            interactivity to solve problems.
          </Typography>
        </div>
        <div className={styles.panelContent}>content</div>
        <div className={styles.panelFooter}>footer</div>
      </section>
      <section
        className={styles.panel}
        style={{ left: '100px' }}
      >
        <Typography
          level={2}
          variant={'title'}
        >
          2
        </Typography>
      </section>
      <section
        className={styles.panel}
        style={{ left: '200px' }}
      >
        <Typography
          level={2}
          variant={'title'}
        >
          3
        </Typography>
      </section>
      <section
        className={styles.panel}
        style={{ left: '300px' }}
      >
        <Typography
          level={2}
          variant={'title'}
        >
          4
        </Typography>
      </section>
      <section
        className={styles.panel}
        style={{ left: '400px' }}
      >
        <Typography
          level={2}
          variant={'title'}
        >
          5
        </Typography>
      </section>
    </main>
  );
}

// panel logic

// 1 panel: centered in vp
// 2 panels: both centered in vp
// 3 panels:
// panel 1: left 0
// panel 2: right 0 + panel width
// panel 3: right 0

// width of tab == x
// new panels: left i * x

// panel components
