import { Icon } from "../Icon";

export const TodoList = ({ title, children }) => {
  return (
    <section className="mb-4 sm:mb-16 mr-4 sm:mr-16">
      <div className="flex justify-between">
        <h3 className="text-xl font-medium mb-4">{title}</h3>
        <Icon cN="bx-dots-horizontal-rounded bx-md" />
      </div>

      <hr className="mb-6" />

      <ul>{children}</ul>
    </section>
  );
};
