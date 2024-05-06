'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const param=useParams<{username:string}>()
  return (
    <div>
       {param.username}
    </div>
  )
}

export default page
