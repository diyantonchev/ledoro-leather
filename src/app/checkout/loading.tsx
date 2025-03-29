import { Skeleton } from "~/components/ui/skeleton"
import { Separator } from "~/components/ui/separator"

export default function CheckoutLoadingSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back link placeholder */}
      <div className="mb-8">
        <Skeleton className="h-5 w-40" />
      </div>

      {/* Title placeholder */}
      <Skeleton className="h-10 w-40 mx-auto mb-8" />

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </div>

            <Separator />

            {/* Shipping Address */}
            <div>
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-12" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-28" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Payment Method */}
            <div>
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-5 w-32" />
                </div>
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-5 w-24" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Skeleton className="h-12 w-full" />
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <Skeleton className="h-6 w-40 mb-4" />

            <div className="space-y-4 mb-6">
              {/* Order Items (3 placeholders) */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex justify-between">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-5 w-16" />
                </div>
              ))}
            </div>

            <Separator />

            <div className="space-y-4 mt-4">
              <div className="flex justify-between">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-16" />
              </div>

              <div className="flex justify-between">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-20" />
              </div>

              <Separator />

              <div className="flex justify-between">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 