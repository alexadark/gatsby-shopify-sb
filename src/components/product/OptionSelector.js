import React from "react";

export const OptionSelector = ({
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  return (
    <div className="flex gap-5 mt-5">
      {options.map((option) => {
        const { name, values, shopifyId } = option;
        return (
          <div key={shopifyId}>
            <label htmlFor="options" className="block mb-1 font-bold">
              {name}
            </label>
            <form action="">
              <select
                name="options"
                id="options"
                onChange={(e) =>
                  setSelectedOptions({
                    ...selectedOptions,
                    [name]: e.target.value,
                  })
                }
              >
                {values.map((value, i) => (
                  <option value={value} key={i}>
                    {value}
                  </option>
                ))}
              </select>
            </form>
          </div>
        );
      })}
    </div>
  );
};
