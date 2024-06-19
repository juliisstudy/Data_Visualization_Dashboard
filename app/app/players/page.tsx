import LoginForm from "@/app/ui/login-form";
export default function page() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col ">
        <div className="flex h-20 w-full items-end rounded-lg">
          <div className="flex h-20 w-full items-end rounded-lg"></div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
