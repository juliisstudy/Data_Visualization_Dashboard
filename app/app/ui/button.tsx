import clsx from "clsx";
import { Button } from "@/components/ui/button";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonUI({ children, className, ...rest }: ButtonProps) {
  return (
    <Button
      {...rest}
      className={clsx(
        "flex h-10 items-center dark:bg-sky-600 text-gray-50 ",
        className
      )}
    >
      {children}
    </Button>
  );
}
