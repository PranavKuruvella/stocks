import Header from '@/components/Header'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen text-gray-400'>

      {/* we add header here */}
    <Header/>
      <div className='container py-10'>
        {children}
      </div>
    </main>
  )
}

export default layout
