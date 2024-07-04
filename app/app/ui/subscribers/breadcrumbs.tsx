import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
type Breadcrumb = {
  label: string;
  href: string;
  active?: boolean;
};

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <div className="pl-0  sm:mt-2 sm:px-6 py-4">
      <div>
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={index}>
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? <BreadcrumbSeparator /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <Breadcrumb className="pl-0  sm:mt-2 sm:px-6 py-4">
  <BreadcrumbList>
    {breadcrumbs.map((breadcrumb, index) => (
      <BreadcrumbItem key={index}>
        <BreadcrumbLink href={breadcrumb.href}>
          {breadcrumb.label}
        </BreadcrumbLink>
        {index < breadcrumbs.length - 1 ? <BreadcrumbSeparator /> : null}
      </BreadcrumbItem>
    ))}
  </BreadcrumbList>
</Breadcrumb>; */
}
