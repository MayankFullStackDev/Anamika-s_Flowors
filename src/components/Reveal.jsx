import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  ...props
}) {
  const reducedMotion = useReducedMotion()
  const offset = direction === 'left' ? { x: 22 } : direction === 'right' ? { x: -22 } : { y: 22 }

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reducedMotion ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
