import { useLanguage } from "@/contexts/language-context";
import { useCampus } from "@/contexts/campus-context";
import { useTheme } from "@/contexts/theme-context";
import { useEffect, useState } from "react";

export function useAppLoading() {
  const { isLoading: languageLoading } = useLanguage();
  const { isLoading: campusLoading } = useCampus();
  const [isReady, setIsReady] = useState(false);

  const isLoading = languageLoading || campusLoading;

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return {
    isLoading,
    isReady,
  };
}
