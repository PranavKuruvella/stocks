'use client'
import { NAV_ITEMS } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchCommand from './SearchCommand'

function NavItems({initialStocks}: {initialStocks: StockWithWatchlistStatus[]}) {
  const pathname = usePathname()
  const isActive = (href: string) => {
    if (pathname === href) return pathname === '/'
    return pathname.startsWith(href)
  }
  return (
    <ul className='flex flex-col sm:flex-row gap-3 sm:gap-10 font-medium'>
      {
        NAV_ITEMS.map((item) => {
          if (item.label == 'Search') return (
            <li key='search-trigger'>
              <SearchCommand
                renderAs='text'
                initialStocks={initialStocks}
                label='Search' />
            </li>
          )


          return <li key={item.href}>
            <Link href={item.href} className={`hover:text-yellow-500 transition-colors ${isActive(item.href) ? 'text-gray-200' : ''}`}>{item.label}</Link>
          </li>
        })
      }
    </ul>
  )
}

export default NavItems
