import CustomButton from "../../ui/components/Button";
import CustomSelect from "../../ui/components/Select";

import {
  CLEAR_FILTER_BUTTON_LABEL,
  INTERESTS_SELECT_DESCRIPTION,
  INTERESTS_SELECT_PLACEHOLDER,
} from "../../../config/ui";

interface SearchableSelectProps {
  options: { value: string; label: string }[];
  selectedInterests: string[];
  onSelectionChange: (selected: string[]) => void;
}

export default function SearchableSelect({
  options,
  selectedInterests,
  onSelectionChange,
}: SearchableSelectProps) {
  const handleClearFilters = () => {
    onSelectionChange([]);
  };

  return (
    <div className="flex gap-x-6 items-end py-5">
      <div className="w-[50%]">
        <p className="mb-1 dark:text-gray-400">
          {INTERESTS_SELECT_DESCRIPTION}
        </p>
        <CustomSelect
          selectedItems={selectedInterests}
          className="dark:[&_.ant-select-selector]:!bg-teal-900 dark:[&_.ant-select-selector]:!border-teal-900 dark:[&_.ant-select-selector]:!text-white [&_.ant-select-selection-placeholder]:!text-gray-400"
          classNames={{
            popup: {
              root: "dark:!bg-teal-900 rounded-xl shadow-lg [&_.ant-select-item-option]:!text-white",
            },
          }}
          onChange={onSelectionChange}
          placeholder={INTERESTS_SELECT_PLACEHOLDER}
          options={options || []}
        />
      </div>

      {selectedInterests.length > 0 && (
        <CustomButton
          color="default"
          variant="solid"
          className="dark:!bg-teal-900"
          onClick={handleClearFilters}
        >
          {CLEAR_FILTER_BUTTON_LABEL}
        </CustomButton>
      )}
    </div>
  );
}
