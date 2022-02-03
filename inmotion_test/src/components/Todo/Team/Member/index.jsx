import { Icon } from "../../../common/Icon";

export const Member = ({ display }) => {
  return (
    <div className={`w-max ${display} mt-4 sm:mt-0`}>
      <div className="flex justify-between">
        <div className="flex -space-x-1">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white z-20"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white z-10"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
        </div>

        <Icon cN="bx-plus-circle bx-md flex items-center ml-4" />
      </div>
    </div>
  );
};
