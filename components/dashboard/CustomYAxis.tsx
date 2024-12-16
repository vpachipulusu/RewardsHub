import React from "react";
import { YAxis as OriginalYAxis, YAxisProps } from "recharts";

const CustomYAxis: React.FC<YAxisProps> = ({ tickCount = 5, ...props }) => {
  return <OriginalYAxis tickCount={tickCount} {...props} />;
};

export default CustomYAxis;
