import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Breadcrumbs from "./breadcrumbs";

const breadcrumbsMain = [
  { label: "Home", href: "/dashboard" },
  { label: "Subscribers", href: "/dashboard/subscribers" },
  { label: "Players", href: "/dashboard/players" },
];

export default function BreadcrumbMain() {
  return <Breadcrumbs breadcrumbs={breadcrumbsMain}></Breadcrumbs>;
}
