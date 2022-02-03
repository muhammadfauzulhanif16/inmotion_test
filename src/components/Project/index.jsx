import { ProjectList } from "../common/Project/ProjectList";

export const Project = () => {
  return (
    <div className="py-16 lg:pt-0 flex justify-center items-center relative flex flex-col">
      <i class="bx bx-menu-alt-left absolute left-0 top-0 bg-slate-700 text-white p-2 rounded-xl sm:m-4"></i>

      <div>
        <div className="mb-16">
          <h5 className="text-white text-4xl font-medium mb-2">Hi Samantha</h5>
          <p className="text-slate-400">
            Welcome back to the workspace, we missed you!
          </p>

          <div className="bg-slate-700 p-3 rounded-2xl flex items-center text-slate-300 mt-8">
            <i class="bx bx-search pr-3"></i>
            <input
              type="text"
              className="bg-slate-700 outline-0"
              placeholder="Search Task or Project..."
            />
          </div>
        </div>

        <ProjectList />
      </div>
    </div>
  );
};
