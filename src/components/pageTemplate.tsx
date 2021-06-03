import { ReactNode } from "react";

type PageTemplate = {
  children: ReactNode;
};

const PageTemplate: React.FC = ({ children }: PageTemplate) => {
  return <>{children}</>;
};

export default PageTemplate;
