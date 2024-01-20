import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function SkeletonLoading() {
  const arraySkeleton = Array(5).fill(5);
  return (
    <div className="mt-[56px] flex flex-col space-y-2">
      {arraySkeleton.map((skeleton, index) => (
        <div
          key={index}
          className=" flex w-full flex-row items-center justify-between space-x-2"
        >
          <Skeleton className="h-[60px] w-[500px]" />

          <Skeleton className="h-[60px] w-full" />

          <Skeleton className="h-[60px] w-full" />

          <Skeleton className="h-[60px] w-full" />

          <Skeleton className="h-[60px] w-full" />
        </div>
      ))}
    </div>
  );
}
