import { fetchCardData } from "@/app/lib/data";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default async function CardWrapper() {
  const {
    numberOfPlayers,
    numberOfSubscriptions,
    numberOfActiveSubscriptions,
    totalRevenues,
  } = await fetchCardData();
  const cardStyle =
    "bg-white bg-opacity-80 dark:bg-slate-900 dark:bg-opacity-80 ";

  return (
    <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      <Card className={cardStyle} x-chunk="dashboard-05-chunk-0">
        <CardHeader className="pb-3">
          <CardDescription>Number of players</CardDescription>
          <CardTitle className="text-4xl">{numberOfPlayers}</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            This is an educational game platform dashboard
          </CardDescription>
        </CardHeader>

        <CardFooter></CardFooter>
      </Card>
      <Card className={cardStyle} x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>Number of Subscriptions</CardDescription>
          <CardTitle className="text-4xl">{numberOfSubscriptions}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            +22% from last week
          </div>
        </CardContent>
        <CardFooter>
          {/* <Progress value={25} aria-label="25% increase" /> */}
        </CardFooter>
      </Card>
      <Card className={cardStyle} x-chunk="dashboard-05-chunk-2">
        <CardHeader className="pb-2">
          <CardDescription>Active Subscriptions</CardDescription>
          <CardTitle className="text-4xl">
            {numberOfActiveSubscriptions}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            +19% from last month
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>

      <Card className={cardStyle} x-chunk="dashboard-05-chunk-3">
        <CardHeader className="pb-2">
          <CardDescription>Total Revenues</CardDescription>
          <CardTitle className="text-4xl">{totalRevenues}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            +12% from last month
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
