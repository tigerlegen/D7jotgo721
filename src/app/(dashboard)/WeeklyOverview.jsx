'use client'

import React, { useState, useEffect } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Components Imports
import OptionsMenu from '@core/components/option-menu'

// Styled Component Imports

const WeeklyOverview = () => {
  // Hooks
  const theme = useTheme()

  // Vars
  const divider = 'var(--mui-palette-divider)'
  const disabled = 'var(--mui-palette-text-disabled)'

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 7,
        distributed: true,
        columnWidth: '40%'
      }
    },
    stroke: {
      width: 2,
      colors: ['var(--mui-palette-background-paper)']
    },
    legend: { show: false },
    grid: {
      xaxis: { lines: { show: false } },
      strokeDashArray: 7,
      padding: { left: -9, top: -20, bottom: 13 },
      borderColor: divider
    },
    dataLabels: { enabled: false },
    colors: [
      'var(--mui-palette-customColors-trackBg)',
      'var(--mui-palette-customColors-trackBg)',
      'var(--mui-palette-customColors-trackBg)',
      'var(--mui-palette-primary-main)',
      'var(--mui-palette-customColors-trackBg)',
      'var(--mui-palette-customColors-trackBg)'
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      tickPlacement: 'on',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetY: 2,
        offsetX: -17,
        style: { colors: disabled, fontSize: theme.typography.body2.fontSize },
        formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
      }
    }
  }

 const [countdown, setCountdown] = useState(24 * 60 * 60) // 24 hours in seconds
 const [isMining, setIsMining] = useState(false)

 // Function to format time into "HH : MM : SS"
 const formatTime = secs => {
   const hours = Math.floor(secs / 3600)
   const minutes = Math.floor((secs % 3600) / 60)
   const seconds = secs % 60
   return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`
 }

 useEffect(() => {
   let timer
   if (isMining && countdown > 0) {
     timer = setInterval(() => {
       setCountdown(prevCountdown => prevCountdown - 1)
     }, 1000)
   }
   return () => clearInterval(timer)
 }, [isMining, countdown])

 useEffect(() => {
   if (countdown <= 0) {
     setIsMining(false)
   }
 }, [countdown])

 const handleStartMining = () => {
   setIsMining(true)
 }

 // Different bar heights and colors
 const bars = [
   { height: 80, color: 'var(--mui-palette-customColors-trackBg)' },
   { height: 100, color: 'var(--mui-palette-customColors-trackBg)' },
   { height: 65, color: 'var(--mui-palette-customColors-trackBg)' },
   { height: 130, color: 'var(--mui-palette-primary-main)' }, // Special bar
   { height: 96, color: 'var(--mui-palette-customColors-trackBg)' },
   { height: 68, color: 'var(--mui-palette-customColors-trackBg)' },
   { height: 120, color: 'var(--mui-palette-customColors-trackBg)' }
 ]

  return (
    <Card>
      <CardHeader title='Mining' />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <div className='relative mb-4 w-full overflow-x-hidden'>
          {/* background div */}
          <div className=' flex flex-col w-full  gap-4  item'>
            <div
              className=' border-dashed border-b flex w-full h-[20px] '
              style={{ borderBottom: '2px dashed var(--mui-palette-customColors-trackBg)' }}
            ></div>
            <div
              className=' border-dashed border-b flex w-full h-[20px] '
              style={{ borderBottom: '2px dashed var(--mui-palette-customColors-trackBg)' }}
            ></div>
            <div
              className=' border-dashed border-b flex w-full h-[20px] '
              style={{ borderBottom: '2px dashed var(--mui-palette-customColors-trackBg)' }}
            ></div>
            <div
              className=' border-dashed border-b flex w-full h-[20px] '
              style={{ borderBottom: '2px dashed var(--mui-palette-customColors-trackBg)' }}
            ></div>
            <div
              className=' border-dashed border-b flex w-full h-[20px] '
              style={{ borderBottom: '2px dashed var(--mui-palette-customColors-trackBg)' }}
            ></div>
          </div>
          <div className=' absolute bottom-1 left-0 flex justify-around w-full'>
            {/* Mining indicator bars */}
            <div className='mining-bars-container'>
              {bars.map((bar, index) => (
                <div key={index} className='bar-wrapper'>
                  <div
                    className={`mining-bar ${isMining ? 'active' : ''}`}
                    style={{
                      height: `${bar.height}px`,
                      backgroundColor: bar.color
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='flex items-center mbe-4 gap-4'>
          <Typography variant='h4'>0.3/hr</Typography>
          <Typography>Your mining rate is 0.3/hr 😎 </Typography>
        </div>
        <Button onClick={handleStartMining} fullWidth variant='contained'>
          {isMining ? formatTime(countdown) : 'Start mining'}
        </Button>
      </CardContent>
    </Card>
  )
}

export default WeeklyOverview
