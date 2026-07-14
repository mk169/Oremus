import type { ReactNode } from 'react'
import './PageHeader.css'

interface Props {
  title: string
  subtitle?: string
  latin?: string
  children?: ReactNode
}

/** Kapitelkopf mit Goldlinie und optionalem lateinischem Motto. */
export function PageHeader({ title, subtitle, latin, children }: Props) {
  return (
    <header className="page-header">
      {latin && <p className="page-header__latin smallcaps">{latin}</p>}
      <h1 className="page-header__title">{title}</h1>
      {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      <hr className="gold-rule" />
      {children}
    </header>
  )
}
