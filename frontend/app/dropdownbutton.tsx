import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";

interface DropdownButtonProps {
  onClick?: () => void;
  onDelete?: () => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  onClick,
  onDelete,
}) => {
  return (
    <div className="flex items-center justify-between space-x-2 my-3 group">
      <button
        className="flex items-center justify-between rounded outline outline-offset-0 outline-gray-200 shadow-md text-lg hover:text-blue-500 w-full py-2 px-2"
        onClick={onClick}
      >
        <div className="text-left w-full">test</div>
        <ChevronDownIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
      </button>
      <button
        className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-blue-500"
        onClick={onDelete}
      >
        <TrashIcon className="" />
      </button>
    </div>
  );
};

export default DropdownButton;
