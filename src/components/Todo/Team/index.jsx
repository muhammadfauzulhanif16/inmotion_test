import { Member } from "./Member";

export const Team = () => {
  return (
    <div className="mb-16 sm:mr-14 grid sm:grid-cols-3 grid-cols-1">
      <div className="col-span-2">
        <h4 className="text-3xl font-medium mb-4">Cyber Punk</h4>

        <p className="text-slate-400 mr-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>

      <Member display="block sm:hidden" />

      <Member display="hidden sm:block" />
    </div>
  );
};
