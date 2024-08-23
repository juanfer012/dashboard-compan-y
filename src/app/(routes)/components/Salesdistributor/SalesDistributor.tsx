import { CustomIcon } from "@/components/CustomIcon";
import { BarChart } from "lucide-react";
import React from "react";
import { GraphicsSuscribers } from "../GraphicsSuscribers";

export function SalesDistributor() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
      <div className="flex gap-x-2 items-center">
        <CustomIcon icon={BarChart} />
        <p className="text-xl">Sales distribution</p>
      </div>
      <GraphicsSuscribers />
    </div>
  );
}
