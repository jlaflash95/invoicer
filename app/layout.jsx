"use client"
import './globals.css'
import { QueueListIcon, PlusIcon } from '@heroicons/react/24/outline'
export default function RootLayout({ children }) {

    const viewCurrent = window.location.pathname === '/'
    const createCurrent = window.location.pathname === '/create'

    const navigation = [
        { name: 'View All', icon: QueueListIcon, href: '/', current: viewCurrent },
        { name: 'Create', icon: PlusIcon, href: '/create', current: createCurrent },
    ]
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

  return (
    <html lang="en">
      <head />
      <body className={"flex"}>

      {/*Nav*/}
      <div className={"basis-1/12"}>

          <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4 min-h-screen">
              <div className="flex flex-shrink-0 items-center space-y-5 px-4">
                  <div
                      className={"h-16 w-16 bg-gray-200 rounded-lg shadow-xl mx-auto flex justify-center items-center mb-4"}>
                      <p className={"text-4xl font-light tracking-tightest text-yellow-500 drop-shadow-lg"}>ED</p>
                  </div>
              </div>
              <div className="mt-5 flex flex-grow flex-col">
                  <nav className="flex-1 space-y-1 bg-white" aria-label="Sidebar">
                      {navigation.map((item) => (
                          <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                  item.current
                                      ? 'bg-blue-100 border-blue-600 text-gray-600 hover:text-gray-900'
                                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                  'group flex items-center px-3 py-2 text-sm font-medium border-l-4'
                              )}
                          >
                              <item.icon
                                  className={classNames(
                                      item.current ? 'text-blue-800' : 'text-gray-400 group-hover:text-gray-500',
                                      'mr-3 flex-shrink-0 h-6 w-6'
                                  )}
                                  aria-hidden="true"
                              />
                              {item.name}
                          </a>
                      ))}
                  </nav>
              </div>
          </div>

      </div>

      {/*Main*/}
      <div className={"flex-1"}>
          {children}
      </div>

      </body>
    </html>
  )
}


