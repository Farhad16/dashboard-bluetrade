import Dashboard from "./components/dashboard";
import useThemeMode from "./components/hooks/useThemeMode";

function App() {
  useThemeMode();
  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
