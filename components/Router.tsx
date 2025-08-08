import { useState, useEffect } from "react";

export function useRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return { currentPath, navigate };
}

interface RouterProps {
  children: React.ReactNode;
}

export function Router({ children }: RouterProps) {
  return <>{children}</>;
}

interface RouteProps {
  path: string;
  component: React.ComponentType;
  currentPath: string;
}

export function Route({ path, component: Component, currentPath }: RouteProps) {
  if (currentPath === path) {
    return <Component />;
  }
  return null;
}