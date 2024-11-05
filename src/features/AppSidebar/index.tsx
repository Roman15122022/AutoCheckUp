import { createElement } from 'react'

import { APP_NAME } from 'src/constants'

import { useAppSidebar } from 'src/features/AppSidebar/useAppSidebar'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from 'src/components/shadcn/sidebar'

const AppSidebar = (): JSX.Element => {
  const { listOfRoutes } = useAppSidebar()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{APP_NAME}</SidebarGroupLabel>
          <SidebarMenu>
            {listOfRoutes.map(({ title, onClick, isActive, icon }) => (
              <SidebarMenuItem className="cursor-pointer" key={title}>
                <SidebarMenuButton
                  className=" rounded-sm"
                  isActive={isActive}
                  onClick={onClick}
                  asChild
                >
                  <a>
                    {createElement(icon, { size: 16, strokeWidth: 2 })}
                    <span className="text-md font-normal">{title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
