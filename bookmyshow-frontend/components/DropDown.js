import React, { useState } from "react";

const DropDown = ({
    deafultOption = "",
    label = "",
    options = [],
    handleTheChange = () => { },
    selectedOptions = [],
    alwaysShowDefault = false
}) => {

    const [selectedOption, setSelectedOption] = useState(deafultOption);

    const onSelectOption = (event) => {
        setSelectedOption(event.target.value);
        handleTheChange(event.target.value);
    }

    return (
        <div>
            <label for="cars">{label}</label>
            <select
                selected={alwaysShowDefault ? '' : selectedOption}
                onSelect={(event) => onSelectOption(event)}
            >
                <option value=''>{deafultOption}</option>
                {options.map((opt, index) => {
                    return <option key={index} value={opt}>{opt}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown;
