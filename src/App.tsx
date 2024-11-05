import AppSidebar from 'src/features/AppSidebar'
import AppRoutes from 'src/features/AppRoutes'

import { SidebarProvider, SidebarTrigger } from 'src/components/shadcn/sidebar'

function App(): JSX.Element {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <AppRoutes />
      </main>
    </SidebarProvider>
  )
}

export default App
