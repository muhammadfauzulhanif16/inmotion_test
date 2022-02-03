export const List = ({ name, id, pS, pC, outline, isNotif, isActive }) => {
  return (
    <li className="mb-8 relative">
      {isNotif ? (
        <i class="bg-white w-6 h-6 rounded-full absolute bottom-32 left-20 z-10 text-white outline outline-4 outline-262a41" />
      ) : (
        ""
      )}
      <div
        className={`${outline} relative p-8 rounded-2xl flex items-center justify-center overflow-hidden ${
          isActive ? "outline" : "hover:outline"
        } outline-offset-8 outline-3 cursor-pointer`}
        id={id}
      >
        <i
          class={`border-16 border-transparant p-6 absolute rounded-full ${pC}`}
        />
        <p className="text-white font-bold text-xl">{id}</p>
        <i class={`border-16 border-transparant p-6 absolute ${pS}`} />
      </div>

      <p className="text-slate-400 mt-6 text-center">{name}</p>
    </li>
  );
};
