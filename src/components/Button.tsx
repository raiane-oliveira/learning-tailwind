import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 shadow-sm text-sm font-semibold outline-none',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
    'transition-colors duration-200',
  ],

  variants: {
    variant: {
      primary:
        'bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-600 text-white hover:bg-violet-700',
      ghost:
        'rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500 dark:hover:bg-white/5 dark:text-zinc-400',
      outline:
        'border border-zinc-300 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 text-zinc-700 hover:bg-zinc-50',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}

// Children já será passado graças a {...props}
