import React, { useContext, useState } from "react";
import { Modal, View } from "react-native";
import BackButton from "../../../components/BackButton";
import { ButtonsContainer, ContainerInfosUser, IconButtomMenu, IconLogo, ImageBackMenu, MenuButtom, TextButtonMenu, UserName, ViewBody, ViewHeader } from "./styled";
import logo from "../../../assets/icons/logo.png"
import DropShadow from "react-native-drop-shadow";
import { useNavigation } from "@react-navigation/native";
import ModalProd from "./Modal's/ModalProd";
import ModalComp from "../HomePage/components/Modal";
import GlobalStateContext from "../../../GlobalState/GlobalStateContext";
import ModalConvenio from "../HomePage/components/ModalConvenio";
import ModalTicket from "../HomePage/components/ModalTicket";


const Grafics = () => {
    const [selectModal, setSelectModal] = useState(1)
    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);

    const navigation = useNavigation();

    const {globalAllClinic,globalAllConv, setOpenMenu,totalAll,next30DaysProc,left15DaysProc,left45DaysProc} = useContext(GlobalStateContext);



    const backButton = () => {
        setOpenMenu(false)
        navigation.navigate("HOMEPAGE")
    }

    return(
    <ViewBody>
        <ImageBackMenu>
        <ViewHeader>
          <View>
          <BackButton onPress={()=> backButton()} marginTops={30}></BackButton>
              <ContainerInfosUser>
                  <View>
                    <UserName></UserName>
                  </View>
              </ContainerInfosUser>
          </View>
          <IconLogo source={logo}></IconLogo>
          </ViewHeader>   
        </ImageBackMenu>
        <ButtonsContainer>
        <DropShadow
                  style={{
                    width: "100%",
                    height: '100%',
                    zIndex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
                  }}
            >
        <MenuButtom  onPress={()=> setOpenModal2(true)}>
        <View style={{width: 200, justifyContent: 'center', alignItems: 'center'}}>
            <TextButtonMenu>Convênios</TextButtonMenu>
        </View>
        </MenuButtom>
        {/* <MenuButtom>
        <View style={{width: 200, justifyContent: 'center', alignItems: 'center'}}>
            <TextButtonMenu>Códigos</TextButtonMenu>
            </View>
        </MenuButtom> */}
        <MenuButtom onPress={()=> setOpenModal1(true)}>
        <View style={{width: 200, justifyContent: 'center', alignItems: 'center'}}>
            <TextButtonMenu>Clinicas</TextButtonMenu>
            </View>
        </MenuButtom>
        {/* <MenuButtom>
        <View style={{width: 200, justifyContent: 'center', alignItems: 'center'}}>
            <TextButtonMenu>Atrasos por hospital</TextButtonMenu>
            </View>
        </MenuButtom> */}
        {/* <MenuButtom>
        <View style={{width: 200, justifyContent: 'center', alignItems: 'center'}}>
            <TextButtonMenu>Situação de recebimentos</TextButtonMenu>
            </View>
        </MenuButtom> */}
        <MenuButtom onPress={()=> setOpenModal3(true)}>
        <View style={{width: 200, justifyContent: 'center', alignItems: 'center'}}>
            <TextButtonMenu>Ticket médio</TextButtonMenu>
            </View>
        </MenuButtom>
        {/* <View style={{width: 200, justifyContent: 'center', alignItems: 'center'}}>
            <TextButtonMenu>Em breve mais graficos
            </TextButtonMenu>
            </View> */}
        </DropShadow>
        </ButtonsContainer>
        <ModalComp left45DaysProc={left45DaysProc} clinicAll={globalAllClinic} openModal1={openModal1} setOpenModal1={setOpenModal1}/>
        <ModalConvenio left45DaysProc={left45DaysProc} convenioAll={globalAllConv} openModal2={openModal2} setOpenModal2={setOpenModal2} />
        <ModalTicket left45DaysProc={left45DaysProc} openModal3={openModal3} setOpenModal3={setOpenModal3}  total={totalAll} next30DaysProc={next30DaysProc} left15DaysProc={left15DaysProc}  />
        </ViewBody>
    )
}

export default Grafics;