// import { Timeline } from "@mui/lab";
// import React from "react";
// import TimelineCard from "./TimelineCard";

// const TimelineLayout = () => {
//   return (
//     <Timeline position="alternate">
//       <TimelineCard />
//     </Timeline>
//   );
// };

// export default TimelineLayout;
// components/HorizontalTimeline.js
import React from "react";

const events = [
  { date: "2023-01-01", description: "Event 1" },
  { date: "2023-02-01", description: "Event 2" },
  { date: "2023-03-01", description: "Event 3" },
  // Add more events as needed
];

const TimelineLayout = () => {
  return (
    <div className="relative py-4">
      <div className="absolute inset-x-0 top-12 h-1 bg-red-700"></div>
      <div className="flex overflow-x-auto px-8 space-x-8 relative z-10">
        {events.map((event, index) => (
          <div key={index} className="flex-shrink-0 text-center relative">
            <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded-full border-4 border-white shadow-lg">
              {event.date}
            </div>
            <p className="mt-2 text-gray-700 font-semibold">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineLayout;
