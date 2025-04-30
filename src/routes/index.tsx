import { createFileRoute } from '@tanstack/react-router'
import "../index.css"
export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='bg-red-900 min-h-screen'>Helloefew "/"!</div>
}
