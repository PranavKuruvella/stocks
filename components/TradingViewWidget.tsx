// TradingViewWidget.jsx
'use client'
import React, { useRef, memo } from 'react';
import useTradingViewWidget from './hooks/useTradingViewWidget';
import { cn } from '@/lib/utils';

//this is a component that will be used to display the tradingview widget -- taken from tradingview docs
interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

function TradingViewWidget({ title, scriptUrl, config, height = 600, className }: TradingViewWidgetProps) {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);


  return (
    <div className='w-full'>
      {title && <h3 className='font-bold text-2xl text-gray-100 mb-5'>{title}</h3>}

      {/* the chart container */}

      <div className="tradingview-widget-container" ref={containerRef} style={{ height: "100%", width: "100%" }}>
        <div className={cn("tradingview-widget-container__widget", className)} style={{ height: height, width: "100%" }} />
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
