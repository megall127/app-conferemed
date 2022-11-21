import styled from "styled-components/native";

export const ViewBody = styled.ScrollView`
    background-color: white;
    flex: 1;
`
export const ImageBack = styled.View`
    z-index: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 150px;
    background-color: #085769;
    border-bottom-left-radius: 40px;


`
export const SpaceBack = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
`

export const PhotoSelfie = styled.View`
    margin-top: 70px;
    height: 130px;
    width: 130px;
    background-color: #c4c4c4;
    border-radius: 80px;
    justify-content: center;
    align-items: center;
    align-self: center;

`

export const ImageSelfie = styled.Image`
    width: 90%;
    height: 90%;
    border-radius: 80px;
`
export const ButtonEdit = styled.TouchableOpacity`
    margin-top: 10px;
    align-self: center;

`
export const TextButtonEdit = styled.Text`
    font-size: 20px;
    color: black;
`
export const TextInput = styled.Text`
    font-size: 15px;
    color: #c4c4c4;
`
export const InputsContainer = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
`
export const InputProfile = styled.View`
    width: 300px;
    height: 50px;
    border: 1px solid #000000;
    border-radius: 5px;
    font-size: 18px;
    justify-content: center;
`
export const InputProfileText = styled.Text`
    font-size: 18px;
    color: #c4c4c4;
    margin-left: 10px;
`

export const BackButton = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    background-color: white;
    border-radius: 50px;
    align-self: flex-start;
    margin-left: 20px;
    justify-content: center;
    align-items: center;

`
export const IconBackButton = styled.Image`
    height: 5px;
    width: 30px;

`