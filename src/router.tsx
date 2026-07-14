import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { Dashboard } from './features/dashboard/Dashboard'
import { LiturgyHub } from './features/liturgy/LiturgyHub'
import { MassView } from './features/liturgy/MassView'
import { ImportedMassView } from './features/liturgy/ImportedMassView'
import { BreviaryHub } from './features/breviary/BreviaryHub'
import { HourView } from './features/breviary/HourView'
import { RosaryPage } from './features/rosary/RosaryPage'
import { NovenaPage } from './features/novena/NovenaPage'
import { MeditationPage } from './features/meditation/MeditationPage'
import { CalendarPage } from './features/calendar/CalendarPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'brevier', element: <BreviaryHub /> },
      { path: 'brevier/:hourId', element: <HourView /> },
      { path: 'liturgie', element: <LiturgyHub /> },
      { path: 'liturgie/messe/:form', element: <MassView /> },
      { path: 'liturgie/formular/:id', element: <ImportedMassView /> },
      { path: 'rosenkranz', element: <RosaryPage /> },
      { path: 'novene', element: <NovenaPage /> },
      { path: 'meditation', element: <MeditationPage /> },
      { path: 'kalender', element: <CalendarPage /> },
      { path: '*', element: <Dashboard /> },
    ],
  },
])
