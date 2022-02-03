import { List } from "../common/Todo/List";
import { Team } from "./Team";
import { TodoList } from "../common/Todo/TodoList";
import { TodayList } from "../../data/todayList";
import { UpcomingList } from "../../data/upcomingList";

export const Todo = () => {
  return (
    <div className="z-10 bg-white rounded-2xl pt-4 sm:pt-16 pl-4 sm:pl-16">
      <Team />

      <div className="flex flex-col">
        <TodoList title="Today">
          {TodayList.map(({ content, status, isChecked }, id) => (
            <List
              key={id}
              content={content}
              status={status}
              isChecked={isChecked}
            />
          ))}
        </TodoList>

        <TodoList title="Upcoming">
          {UpcomingList.map(({ content, status, isChecked }, id) => (
            <List
              key={id}
              content={content}
              status={status}
              isChecked={isChecked}
            />
          ))}
        </TodoList>
      </div>

      <div className="flex justify-end">
        <i class="cursor-pointer bx bx-plus bx-sm right-0 bottom-0 bg-violet-700 shadow-lg shadow-violet-700/50 text-white p-3 rounded-2xl mb-4 mr-4"></i>
      </div>
    </div>
  );
};
