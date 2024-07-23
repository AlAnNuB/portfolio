import {
  ProjectorScreenChart,
  IdentificationBadge,
  StackPlus,
  AddressBook,
  House
} from '@phosphor-icons/react'
import { Container, Content } from './styles'
import { useCallback, useEffect, useMemo } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Navbar } from '@/components/navbar'
import { SidebarButtonProps } from '@/types/ISidebarButtonProps'

export const Default = () => {
  const navigate = useNavigate()

  const activePath = useLocation().pathname

  const sections: SidebarButtonProps[] = useMemo(
    () => [
      {
        id: 1,
        title: 'Inicio',
        icon: House,
        path: '/'
      },
      {
        id: 2,
        title: 'Sobre',
        icon: IdentificationBadge,
        path: '/sobre'
      },
      {
        id: 3,
        title: 'Tecnologias',
        icon: StackPlus,
        path: '/technologies'
      },
      {
        id: 4,
        title: 'Projetos',
        icon: ProjectorScreenChart,
        path: '/projects'
      },
      {
        id: 5,
        title: 'Contato',
        icon: AddressBook,
        path: '/contact'
      }
    ],
    []
  )

  const pathIndex = sections
    .map(item => item.path === activePath)
    .findIndex(item => item)

  const listenScrollEvent = useCallback(
    (e: WheelEvent) => {
      if (e.deltaY > 0 && pathIndex >= 0 && pathIndex < sections.length - 1) {
        // scroll down
        navigate(sections[pathIndex + 1].path)
      }
      if (e.deltaY < 0 && pathIndex > 0 && pathIndex < sections.length) {
        //scroll up
        navigate(sections[pathIndex - 1].path)
      }
      return
    },
    [navigate, pathIndex, sections]
  )

  useEffect(() => {
    window.addEventListener('wheel', listenScrollEvent)

    return () => window.removeEventListener('wheel', listenScrollEvent)
  }, [listenScrollEvent])

  return (
    <Container>
      <Navbar sections={sections} />
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}
