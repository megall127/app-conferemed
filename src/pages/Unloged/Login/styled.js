
import { Dimensions} from "react-native";
import styled from "styled-components/native";

const {height , width} = Dimensions.get("window")

export const ViewBody = styled.View`
    background-color: white;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const ImageBack = styled.Image`
    height: 70px;
    width: 290px;
    z-index: 1;
    margin-bottom: 20px;
`
export const BoxInfos = styled.View`
    width: 300;
    background-color: white;
    align-self: center;
    z-index: 0;
    border-radius: 30px;
    align-items: center;
    padding-bottom: 30px;
`
export const TittleText = styled.Text`
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    color: black;
    margin-top: 20px;

`
export const TittleSubText = styled.Text`
    width:${width / 1.7};
    text-align: center;
    color: #A9A9A9;
`
export const ButtonForgetText = styled.Text`
    width:${width / 1.7};
    text-align: center;
    text-decoration: underline; 
    margin-top: 15px;
    color: #BA984A;
`
export const InputLogin = styled.TextInput`
    width: 80%;
    height: 50px;
    border: 1px solid #c4c4c4 ;
    border-radius: 5px;
`
export const ButtonForget = styled.TouchableOpacity`

`

