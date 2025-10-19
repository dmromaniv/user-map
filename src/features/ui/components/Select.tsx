import { useMemo } from "react";
import { Select, type SelectProps } from "antd";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps extends SelectProps<string[]> {
  selectedItems: string[];
  options: Option[];
}

const CustomSelect = ({
  options,
  selectedItems,
  ...selectProps
}: CustomSelectProps) => {
  const filteredOptions = useMemo(
    () => options.filter((o) => !selectedItems.includes(o.value)),
    [options, selectedItems]
  );

  return (
    <Select
      mode="multiple"
      value={selectedItems}
      style={{ width: "100%" }}
      options={filteredOptions.map((item) => ({
        value: item.value,
        label: item.label,
      }))}
      {...selectProps}
    />
  );
};

export default CustomSelect;
