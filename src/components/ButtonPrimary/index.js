import React from "react";
import { ButtonBody, TextButton } from "./styled";




const PrimaryButton = ({label, marginTops,onPress,disabled, radius , widthValue}) => {


    const checkWidth = () => {
        if(widthValue != null || undefined){
            return widthValue
        } else {
            return '80%'
        }
    }

    return(
        <ButtonBody style={{marginTop: marginTops, borderRadius: radius, width: checkWidth()}}
        onPress={onPress}
        disabled={disabled}
        >
            <TextButton>{label}</TextButton>
        </ButtonBody>
    )
}

export default PrimaryButton;