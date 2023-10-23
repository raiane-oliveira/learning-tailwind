'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

interface TabItemProps {
  title: string
  value: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none transition-colors hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span className="rounded px-1 group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}

/**
 * CSS :focus VS CSS :focus-visible
 *
 * :focus irá aplicar a estilização no elemento tanto pelo click quanto pelo teclado
 * já o :focus-visible aplica apenas quando o usuário está navegando pelo teclado
 */
