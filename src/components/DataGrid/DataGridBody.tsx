import { Avatar, CardBody, Chip, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { TABLE_HEAD, TABLE_ROWS } from "../../data/data";
import { PencilIcon } from "@heroicons/react/20/solid";
import { useStateDispatchContext } from "../../hooks/useStateDispatchHook";

type Props = {};

const DataGridBody = ({}: Props) => {
  const { currentColor } = useStateDispatchContext();
  return (
    <CardBody
      placeholder=""
      className="lg:overflow-y-scroll lg:overflow-x-hidden p-0 h-460 lg:h-460 overflow-x-auto"
    >
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 dark:bg-gray-900 dark:border-blue-gray-900"
              >
                <Typography
                  placeholder=""
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none opacity-70"
                  style={{ color: currentColor }}
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ img, name, email, job, org, online, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast
              ? "p-4 border-b dark:border-gray-800"
              : "p-4 py-2 border-b border-blue-gray-50 dark:border-gray-800";

            return (
              <tr key={index}>
                <td className={classes}>
                  <div className="flex items-center gap-3">
                    <Avatar placeholder="" src={img} alt={name} size="sm" />
                    <div className="flex flex-col">
                      <Typography
                        placeholder=""
                        variant="small"
                        color="blue-gray"
                        className="font-normal dark:text-main-dark-text"
                      >
                        {name}
                      </Typography>
                      <Typography
                        placeholder=""
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70 dark:text-gray-500"
                      >
                        {email}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex flex-col">
                    <Typography
                      placeholder=""
                      variant="small"
                      color="blue-gray"
                      className="font-normal dark:text-main-dark-text"
                    >
                      {job}
                    </Typography>
                    <Typography
                      placeholder=""
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70 dark:text-gray-500"
                    >
                      {org}
                    </Typography>
                  </div>
                </td>
                <td className={classes}>
                  <div className="w-max">
                    <Chip
                      variant="ghost"
                      size="sm"
                      value={online ? "online" : "waiting"}
                      style={{ backgroundColor: online ? "green" : "orange", color: "white" }}
                    />
                  </div>
                </td>
                <td className={classes}>
                  <Typography
                    placeholder=""
                    variant="small"
                    color="blue-gray"
                    className="font-normal dark:text-main-dark-text"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Tooltip content="Edit User">
                    <IconButton
                      placeholder=""
                      variant="text"
                      className="dark:text-white border-2 border-gray-300 dark:border-gray-800"
                      id="my-element"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </CardBody>
  );
};

export default DataGridBody;
