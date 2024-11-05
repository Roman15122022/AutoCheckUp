import { cn } from 'src/utils'

import { ContainerProps } from 'src/components/Container/types'

const Container = ({ classes, children }: ContainerProps): JSX.Element => {
  return <div className={cn('mx-4 mt-8', classes)}>{children}</div>
}

export default Container
