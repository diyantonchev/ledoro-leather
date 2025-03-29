import { Skeleton } from "~/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Skeleton className="h-8 w-48 mx-auto mb-8" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="group">
            <Skeleton className="aspect-square mb-4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-5 w-1/4" />
          </div>
        ))}
      </div>
    </div>
  )
}