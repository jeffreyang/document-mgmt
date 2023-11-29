"use client"

import * as React from "react"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HomePage from "@/app/sidebar1/home/page"

export default function Sidebar({ 
  children,
 }: {children: React.ReactNode}) {
  const [open, setOpen] = React.useState(false)
  return (
        <div>
        {children}
        </div>
  )
}