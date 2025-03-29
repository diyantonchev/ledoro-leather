import { Skeleton } from "~/components/ui/skeleton"

export default function HeaderSkeleton() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 grid grid-cols-3 h-16 items-center">
        <div className="flex items-center">
          <div className="md:hidden">
            <Skeleton className="h-10 w-10" />
          </div>
          <div className="hidden md:flex md:gap-10">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-20" />
          </div>
        </div>

        <div className="justify-self-center">
          <Skeleton className="h-7 w-32" />
        </div>

        <div className="flex items-center gap-4 justify-self-end">
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </header>
  )
} 