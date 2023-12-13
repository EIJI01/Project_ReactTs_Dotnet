import { UserPlusIcon } from "@heroicons/react/20/solid";
import { CardHeader, Typography } from "@material-tailwind/react";
import { ButtonCustom } from "..";
import { useStateDispatchContext } from "../../hooks/useStateDispatchHook";

type Props = {};

const DataGridHeader = ({}: Props) => {
  const { currentColor } = useStateDispatchContext();
  return (
    <CardHeader
      placeholder=""
      floated={false}
      shadow={false}
      className="rounded-none mb-4 bg-inherit"
    >
      <div className="flex items-center justify-between gap-8 relative">
        <div>
          <Typography placeholder="" variant="h5" color="blue-gray" style={{ color: currentColor }}>
            Members list
          </Typography>
          <Typography placeholder="" color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row ">
          <ButtonCustom variant="outlined" size="sm" className="dark:text-main-dark-text">
            view all
          </ButtonCustom>
          <ButtonCustom
            className="flex items-center gap-3 text-main-dark-text"
            size="sm"
            color={currentColor}
          >
            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
          </ButtonCustom>
        </div>
      </div>
    </CardHeader>
  );
};

export default DataGridHeader;
