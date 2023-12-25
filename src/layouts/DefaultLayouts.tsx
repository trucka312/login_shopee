import { ChildrenProps } from '../utils/childrenProps'

const DefaultLayout = ({ children }: ChildrenProps) => {
  return (
    <div className='wrapper'>
      <>{children}</>
    </div>
  )
}

export default DefaultLayout
