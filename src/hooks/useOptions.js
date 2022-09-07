import { useState } from "react";

export const useOptions = (options, variants) => {
  const optionsObject = options.reduce((acc, option) => {
    acc[option.name] = option.values[0];
    return acc;
  }, {});

  const [selectedOptions, setSelectedOptions] = useState(optionsObject);

  const optionsValues = Object.values(selectedOptions);

  const selectedVariant = variants.find((variant) => {
    const arrayFromTitle = variant.title.split("/").map((item) => item.trim());
    return arrayFromTitle.every((item) => optionsValues.includes(item));
  });

  return {
    selectedOptions,
    setSelectedOptions,
    selectedVariant,
  };
};
