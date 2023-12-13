import { FooterWithLogo } from "../../components";
import { UseUserContext } from "../../contexts/ContextProvider";
import { useStateDispatchContext } from "../../hooks/useStateDispatchHook";

type Props = {};

export default function HomePage({}: Props) {
  const { setModes, currentMode, isOpenThemeSettings, setIsSettings, currentColor } =
    useStateDispatchContext();
  const { currentUser } = UseUserContext();

  return (
    <>
      <div>{currentMode.modes}</div>
      <div>
        <button onClick={() => setModes("Dark")}>Click Dark</button>
      </div>
      <div>
        <button onClick={() => setModes("Light")}>Click Light</button>
      </div>
      <div>{isOpenThemeSettings === true ? "True" : "false"}</div>
      <div>
        <button onClick={() => setIsSettings(true)}>Click Open Settings</button>
      </div>
      <div>{currentUser ? currentUser.name : null}</div>
      <div className={`bg-[${currentColor}]`}>{currentColor}</div>
      <FooterWithLogo />
    </>
  );
}
