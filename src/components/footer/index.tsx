import { APP_NAME } from "@/lib/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="flex-center py-5">
        <p className="text-center">
          {currentYear} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
