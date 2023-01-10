import { BsPencil, BsTrash } from "react-icons/bs";

function Task({ title, handleDeletion }) {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-start-3">
        <input
          type={"checkbox"}
          onChange={handleDeletion}
          className={"cursor-pointer"}
        />
      </div>
      <div className="col-start-4 col-span-2 flex">
        <p>{title}</p>
      </div>
      <div className="col-start-11 flex">
        <div className="mr-2">
          <BsPencil />
        </div>
        <div onClick={handleDeletion} className={"cursor-pointer"}>
          <BsTrash />
        </div>
      </div>
    </div>
  );
}

export default Task;
