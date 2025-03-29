/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client"

import { useDebouncedCallback } from 'use-debounce'
import { Search } from "lucide-react"
import { Input } from "./input"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

const SEARCH_QUERY = "search"

export function SearchInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleSearch = useDebouncedCallback(async (term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set(SEARCH_QUERY, term)
    } else {
      params.delete(SEARCH_QUERY)
    }

    router.replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search products..."
        className="pl-9 focus-visible:ring-0 focus-visible:ring-offset-0"
        defaultValue={searchParams.get('search')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        {...props}
      />
    </div>
  )
} 