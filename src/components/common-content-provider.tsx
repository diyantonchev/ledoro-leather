"use client"

import { createContext, useContext } from "react"
import type { CommonContent } from "~/app/content-data"

const CommonContentContext = createContext<CommonContent | null>(null)

export function CommonContentProvider({
  children,
  content,
}: {
  children: React.ReactNode
  content: CommonContent
}) {
  return (
    <CommonContentContext.Provider value={content}>
      {children}
    </CommonContentContext.Provider>
  )
}

export function useCommonContent() {
  const context = useContext(CommonContentContext)
  if (!context) {
    throw new Error("useCommonContent must be used within a CommonContentProvider")
  }
  return context
} 