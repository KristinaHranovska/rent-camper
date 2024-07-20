import { useTheme } from "context/useThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Поточна тема: {theme === "light" ? "Світла" : "Темна"}
    </button>
  );
};

export default ThemeToggle;
