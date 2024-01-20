import SkeletonLoading from "@/components/skeletons/skeletonLoading";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div>
      <Skeleton className="my-[20px] h-[50px] w-full" />
      <Skeleton className="my-[20px] h-[50px] w-full" />
      <SkeletonLoading />
    </div>
  );
}
