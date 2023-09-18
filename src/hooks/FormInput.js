import React, {useState} from "react";

export const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const inputProps = {
        value,
        onChangeText: setValue,
        secureTextEntry: !isVisible,
        isVisible,
        toggleVisibility,
    };

    return inputProps;
}