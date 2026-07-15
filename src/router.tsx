import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { Dashboard } from './features/dashboard/Dashboard'
import { LiturgyHub } from './features/liturgy/LiturgyHub'
import { MassView } from './features/liturgy/MassView'
import { ImportedMassView } from './features/liturgy/ImportedMassView'
import { BreviaryHub } from './features/breviary/BreviaryHub'
import { HourView } from './features/breviary/HourView'
import { OfficePropersView } from './features/breviary/OfficePropersView'
import { RosaryPage } from './features/rosary/RosaryPage'
import { RosarySetView } from './features/rosary/RosarySetView'
import { RosaryMysteryView } from './features/rosary/RosaryMysteryView'
import { PrayersHub } from './features/prayers/PrayersHub'
import { NovenaPage } from './features/novena/NovenaPage'
import { MeditationPage } from './features/meditation/MeditationPage'
import { CalendarPage } from './features/calendar/CalendarPage'
import { KyrialePage } from './features/kyriale/KyrialePage'

export const router = createBrowserRouter(
  [
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'brevier', element: <BreviaryHub /> },
      { path: 'brevier/proprium/:id', element: <OfficePropersView /> },
      { path: 'brevier/:hourId', element: <HourView /> },
      { path: 'liturgie', element: <LiturgyHub /> },
      { path: 'liturgie/messe/:form', element: <MassView /> },
      { path: 'liturgie/formular/:id', element: <ImportedMassView /> },
      { path: 'kyriale', element: <KyrialePage /> },
      { path: 'gebete', element: <PrayersHub /> },
      { path: 'rosenkranz', element: <RosaryPage /> },
      { path: 'rosenkranz/:setId', element: <RosarySetView /> },
      { path: 'rosenkranz/:setId/:mysteryId', element: <RosaryMysteryView /> },
      { path: 'novene', element: <NovenaPage /> },
      { path: 'meditation', element: <MeditationPage /> },
      { path: 'kalender', element: <CalendarPage /> },
      { path: '*', element: <Dashboard /> },
    ],
  },
  ],
  // Basispfad aus Vite (dev: '/', Build für GitHub Pages: '/Oremus/').
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') },
)
