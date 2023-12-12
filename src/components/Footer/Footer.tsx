import { Typography } from "@material-tailwind/react";
import { useStateDispatchContext } from "../../hooks/useStateDispatchHook";

export default function FooterWithLogo() {
  const { currentColor } = useStateDispatchContext();
  document.documentElement.style.setProperty("--hover-footer", currentColor);
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img
          src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
          alt="logo-ct"
          className="w-10"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              placeholder={""}
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors footer"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              placeholder={""}
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors footer"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              placeholder={""}
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors footer"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              placeholder={""}
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors footer"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography placeholder={""} color="blue-gray" className="text-center font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
  );
}
