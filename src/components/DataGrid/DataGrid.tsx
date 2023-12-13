import { Card } from "@material-tailwind/react";
import DataGridHeader from "./DataGridHeader";
import DataGridBody from "./DataGridBody";
import DataGridFooter from "./DataGridFooter";

type Props = {};

const DataGrid = ({}: Props) => {
  return (
    <div className="lg:px-20 px-4 py-4">
      <Card placeholder="" className="h-full w-full dark:bg-black">
        <DataGridHeader />
        <DataGridBody />
        <DataGridFooter />
      </Card>
    </div>
  );
};

export default DataGrid;
