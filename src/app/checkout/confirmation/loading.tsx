import { Skeleton } from "~/components/ui/skeleton"

export default function ConfirmationLoadingSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
      {/* Icon placeholder */}
      <Skeleton className="h-16 w-16 mx-auto mb-6 rounded-full" />

      {/* Title placeholder */}
      <Skeleton className="h-10 w-1/2 mx-auto mb-4" />

      {/* Subtitle placeholder */}
      <Skeleton className="h-6 w-3/4 mx-auto mb-8" />

      {/* Order details box */}
      <div className="bg-muted/30 p-6 rounded-lg mb-8">
        <Skeleton className="h-8 w-1/3 mx-auto mb-4" />

        <div className="space-y-2 text-left">
          <div className="flex justify-between">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-5 w-1/4" />
          </div>

          <div className="flex justify-between">
            <Skeleton className="h-5 w-1/4" />
            <Skeleton className="h-5 w-1/3" />
          </div>

          <div className="flex justify-between">
            <Skeleton className="h-5 w-1/5" />
            <Skeleton className="h-5 w-1/2" />
          </div>
        </div>
      </div>

      {/* Additional text placeholder */}
      <Skeleton className="h-4 w-5/6 mx-auto mb-8" />

      {/* Button placeholder */}
      <Skeleton className="h-10 w-48 mx-auto" />
    </div>
  )
} 