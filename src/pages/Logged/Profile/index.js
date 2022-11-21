import React, { useContext } from "react";
import { BackButton, ButtonEdit, IconBackButton, ImageBack, ImageSelfie, InputProfile, InputProfileText, InputsContainer, PhotoSelfie, SpaceBack, TextButtonEdit, TextInput, ViewBody } from "./styled";
import fundo from "../../../assets/imgs/FundoHome.png"
import profile from "../../../assets/icons/profilee.png"
import { Text, View } from "react-native";
import GlobalStateContext from "../../../GlobalState/GlobalStateContext";
import seta from "../../../assets/icons/setaPreta.png"
import { useNavigation } from "@react-navigation/native";




const Profile = () => {

    const {setUsersInfos,userInfos, setOpenMenu } = useContext(GlobalStateContext);
    const navigation = useNavigation();

    const backButton = () => {
        setOpenMenu(false)
        navigation.navigate("HOMEPAGE")
    }

    return(
        <ViewBody>
            <ImageBack></ImageBack>
            <SpaceBack>
            <BackButton onPress = {() => backButton()}>
            <Text style={{color: "black"}}>Voltar</Text>
            </BackButton>
            </SpaceBack>
            <PhotoSelfie>
                <ImageSelfie source={profile}></ImageSelfie>
            </PhotoSelfie>
            <ButtonEdit>
                <TextButtonEdit>Editar</TextButtonEdit>
            </ButtonEdit>
            <InputsContainer>
                <View style={{marginTop: 40}}>
                <TextInput>Nome</TextInput>
                <InputProfile placeholderTextColor="#000">
                <InputProfileText>{userInfos.name}</InputProfileText>
                </InputProfile>
                </View>
                <View style={{marginTop: 30}}>
                <TextInput>Telefone</TextInput>
                <InputProfile placeholderTextColor="#000">
                <InputProfileText>{userInfos.tell}</InputProfileText>
                </InputProfile>
                </View>
                {/* <View style={{marginTop: 30}}>
                <TextInput>Data de Nascimento</TextInput>
                <InputProfile></InputProfile>
                </View> */}
                <View style={{marginTop: 30}}>
                <TextInput>E-mail</TextInput>
                <InputProfile>
                <InputProfileText>{userInfos.email}</InputProfileText>
                </InputProfile>
                </View>
                {/* <View style={{marginTop: 30}}>
                <TextInput>CPF</TextInput>
                <InputProfile disable={true}></InputProfile>
                </View>
                <View style={{marginTop: 30}}>
                <TextInput>CRM</TextInput>
                <InputProfile></InputProfile>
                </View> */}
            </InputsContainer>
        </ViewBody>
    )
}

export default Profile;