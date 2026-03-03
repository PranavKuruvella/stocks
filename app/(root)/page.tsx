import TradingViewWidget from '@/components/TradingViewWidget'
import { Button } from '@/components/ui/button'
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from '@/lib/constants'
import React from 'react'

//root -- home page folder
const page = () => {
  const scriptUrl = 'https://s3.tradingview.com/external-embedding/embed-widget-'
  return (
    <div className='flex min-h-screen home-wrapper'>
      <section className='grid w-full gap-8 home-section'>
        {/* market overview */}
        <div className='md:col-span-1 xl:col-span-1'>
          <TradingViewWidget
            title='Market Overview'
            scriptUrl={scriptUrl + 'market-overview.js'}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            height={600}
            className='' />
        </div>

        {/* stock heatmap */}
        <div className='md:col-span xl:col-span-2'>
          <TradingViewWidget
            title='Stock Heatmap'
            scriptUrl={scriptUrl + 'stock-heatmap.js'}
            config={HEATMAP_WIDGET_CONFIG}
            height={600}
            className='' />
        </div>
      </section>


      <section className='grid w-full gap-8 home-section'>
        {/* top stories */}
        <div className=' h-full md:col-span-1 xl:col-span-1'>
          <TradingViewWidget
            title=''
            scriptUrl={scriptUrl + 'timeline.js'}
            config={TOP_STORIES_WIDGET_CONFIG}
            height={600}
            className='custom-chart' />
        </div>

        {/* market quotes */}
        <div className='h-full md:col-span-1 xl:col-span-2'>
          <TradingViewWidget
            title=''
            scriptUrl={scriptUrl + 'market-quotes.js'}
            config={MARKET_DATA_WIDGET_CONFIG}
            height={600}
            className='' />
        </div>
      </section>
    </div>
  )
}

export default page