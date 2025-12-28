import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"
import Link from "next/link"
import styles from "./Button.module.css"

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline"
type ButtonSize = "sm" | "md" | "lg"

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button"
    href?: never
  }

type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a"
    href: string
    external?: boolean
  }

type ButtonAsLink = BaseButtonProps & {
  as: "link"
  href: string
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  leftIcon,
  rightIcon,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const buttonClasses = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
    ${fullWidth ? styles.fullWidth : ""}
    ${className}
  `

  const content = (
    <>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </>
  )

  if (props.as === "link") {
    const { as: _, href, ...linkProps } = props
    return (
      <Link href={href} className={buttonClasses} {...linkProps}>
        {content}
      </Link>
    )
  }

  if (props.as === "a") {
    const { as: _, external, ...anchorProps } = props
    return (
      <a
        className={buttonClasses}
        {...(external && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        {...anchorProps}
      >
        {content}
      </a>
    )
  }

  const { as: _, ...buttonProps } = props as ButtonAsButton
  return (
    <button className={buttonClasses} {...buttonProps}>
      {content}
    </button>
  )
}
