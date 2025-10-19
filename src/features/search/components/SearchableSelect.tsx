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
        <p className="mb-1">{INTERESTS_SELECT_DESCRIPTION}</p>
        <CustomSelect
          selectedItems={selectedInterests}
          onChange={onSelectionChange}
          placeholder={INTERESTS_SELECT_PLACEHOLDER}
          options={options || []}
        />
      </div>

      {selectedInterests.length > 0 && (
        <CustomButton
          color="default"
          variant="solid"
          onClick={handleClearFilters}
        >
          {CLEAR_FILTER_BUTTON_LABEL}
        </CustomButton>
      )}
    </div>
  );
}
