import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

function Loading() {
  return (
    <div className='w-full min-h-screen'>
        <Skeleton/>
    </div>
  )
}

export default Loading