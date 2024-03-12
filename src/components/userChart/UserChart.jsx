import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  Category,
  Tooltip,
  DataLabel,
} from "@syncfusion/ej2-react-charts";
import { data } from "../../data/dummy";
import { IoCloseSharp } from "react-icons/io5";

const UserChart = ({ onClose }) => {
  return (
    <div
      style={{ direction: "ltr" }}
      className=" fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-[rgba(0,0,0,0.4)] "
    >
      <div className="p-8 bg-white dark:bg-slate-400 rounded-lg w-[32rem] relative">
        <div
          className="absolute top-2 left-2 text-2xl cursor-pointer transition-all duration-150 hover:scale-150"
          onClick={onClose}
        >
          <IoCloseSharp />
        </div>
        <ChartComponent
          primaryXAxis={{ valueType: "Category", title: "ماه سال" }}
          title="داده هاي کاربر"
          primaryYAxis={{ title: "دفعات ورود کاربر" }}
          legendSettings={{ visible: true }}
          tooltip={{ enable: true }}
        >
          <Inject
            services={[LineSeries, Category, DataLabel, Tooltip]}
          ></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data}
              xName="month"
              yName="count"
              type="Line"
              marker={{ dataLabel: { visible: true }, visible: true }}
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default UserChart;
