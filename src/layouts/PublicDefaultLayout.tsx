import { ChildrenProps } from '../utils/childrenProps'

const PublicDefaultLayout = ({ children }: ChildrenProps) => {
  return (
    <div className='wrapper'>
      <>hihi</>
      <>{children}</>
    </div>
  )
}

export default PublicDefaultLayout
