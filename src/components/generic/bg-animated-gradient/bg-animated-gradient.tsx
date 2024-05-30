import styles from "./bg-animated-gradient.module.css"

export const BgAnimatedGradient = ({
  children
}: {
  children: React.ReactNode
}) => (
  <div className={styles.bg_black}>
    <div className={styles.animate}>{children}</div>
  </div>
)
