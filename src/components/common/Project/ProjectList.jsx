import { Projects } from "../../../data/projectList";
import "./index.css";
import { List } from "./List";

export const ProjectList = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <h3 className="text-slate-200 font-medium text-xl">Projects</h3>
        <span className="text-slate-400 ml-4">(13)</span>
      </div>

      <ul className="grid grid-cols-3 gap-8">
        {Projects.map(
          ({ name, init, pS, pC, outline, isNotif, isActive }, id) => (
            <List
              key={init}
              name={name}
              id={init}
              pS={pS}
              pC={pC}
              outline={outline}
              isNotif={isNotif}
              isActive={isActive}
            />
          )
        )}

        <li className="mb-8">
          <div className="p-8 bg-slate-700 rounded-2xl flex items-center justify-center cursor-pointer">
            <p className="text-white font-bold text-xl">8+</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
