import DashboardSkeleton from "@/components/ui/skeleton";

export default async function Loading() {
  // return <DashboardSkeleton />;
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <DashboardSkeleton />; // Output:

  // this is the third message
  // this is the second message
  // this is the first message
}
