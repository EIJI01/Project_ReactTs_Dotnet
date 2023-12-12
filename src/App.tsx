import { Outlet } from "react-router-dom";
import LayoutPage from "./components/Layouts/LayoutPage";
import { useStateDispatchContext } from "./hooks/useStateDispatchHook";
export default function App() {
  const { currentMode } = useStateDispatchContext();
  return (
    <div className={`${currentMode.modes === "Dark" ? "dark" : ""}`}>
      <LayoutPage>
        <Outlet />
      </LayoutPage>
    </div>
  );
}
