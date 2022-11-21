import React from "react";
import { ButtonBody, ImgButton } from "./styled";
import seta from "../../assets/icons/seta1.png"
import { Text } from "react-native";




const BackButton = ({label, marginTops,onPress,disabled}) => {

    return(
        <ButtonBody style={{marginTop: marginTops}}
        onPress={onPress}
        disabled={disabled}
        >
            <Text style={{color: "black"}}>Voltar</Text>
        </ButtonBody>
    )
}

export default BackButton;