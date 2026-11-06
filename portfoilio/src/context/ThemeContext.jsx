import React, { createContext, useContext, useLayoutEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Read initial theme from localStorage (already applied to <html> by the
  // blocking inline script in index.html, so there is no FOUC).
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) return savedTheme;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  });

  /*
   * useLayoutEffect fires synchronously AFTER React has updated the DOM but
   * BEFORE the browser has painted. This means the .dark class change on
   * <html> and the CSS-variable gradient update happen in the SAME paint
   * frame as the React render — no intermediate frame, no rectangle flash.
   *
   * Compare to useEffect (old code) which fires AFTER paint, leaving a frame
   * where isDark is already false but .dark is still on <html>, causing the
   * gradient CSS-var to be "dark" while React renders with "light" styles.
   */
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      root.setAttribute("data-theme", "dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      root.setAttribute("data-theme", "light");
      root.style.colorScheme = "light";
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === "dark", toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
