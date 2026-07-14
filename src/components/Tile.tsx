import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import './Tile.css'

interface Props {
  to: string
  title: string
  latin?: string
  description?: string
  icon?: ReactNode
}

/** Dashboard-Kachel im Missale-Stil. */
export function Tile({ to, title, latin, description, icon }: Props) {
  return (
    <Link to={to} className="tile">
      <div className="tile__frame">
        {icon && <span className="tile__icon">{icon}</span>}
        <span className="tile__body">
          {latin && <span className="tile__latin smallcaps">{latin}</span>}
          <span className="tile__title">{title}</span>
          {description && <span className="tile__desc">{description}</span>}
        </span>
      </div>
    </Link>
  )
}
