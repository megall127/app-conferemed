import React, { useContext, useEffect, useState } from "react";
import {ButtonExits, ButtonExitsText, ButtonHome, ButtonHomeText, ButtonMenu, ButtonMoreInfo, ButtonMoreInfoText, ButtonsContainer, ContainerInfosUser, ExitCard, IconButtomMenu, IconConferemed, IconLogo, ImageBack, ImageBackMenu, ImageFlyer, ImageIcon, ImagePezinho, ImageSelfie, MenuButtom, ModalExit, ModalGrafic, PesinhosInfos, PhotoSelfie, SubInfos, SubInfosSaldo, SubText, TextButtonMenu, TittleCardExit, UserName, ViewBody, ViewHeader, ViewHeaderModal, ViewModal, ModalGrafics, GraficHand, Bar } from "./styled";
import logo from "../../../assets/icons/logo.png"
import iconMenu from "../../../assets/icons/menu.png"
import perfil from "../../../assets/icons/profile.png"
import graficos from "../../../assets/icons/graficos.png"
import lupa from "../../../assets/icons/lupa.png"
import sair from "../../../assets/icons/sair.png"
import { useNavigation } from "@react-navigation/native";
import { Modal, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../../Service/api";
import AlertSucess from "../../../components/AlertSucess";
import GlobalStateContext from "../../../GlobalState/GlobalStateContext";
import BackButton from "../../../components/BackButton"; 
import ModalComp from "./components/Modal";
import ModalConvenio from "./components/ModalConvenio";
import ModalTicket from "./components/ModalTicket";
import CurrencyInput from "react-native-currency-input";


const HomePage = () => {


  const navigation = useNavigation();


  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [docSelect, setDocSelect] = useState({proc:[]});
  const [clinicAll ,setClinicsAll] = useState([])
  const [convenioAll ,setConvenioAll] = useState([])
  const [exit, setExit] = useState(false)


  const {setTotalAll, alertSucessStateHome,userInfos, setGlobalAllClinic,setGlobalAllConv,openMenu, setOpenMenu, setDocSelectAll} = useContext(GlobalStateContext);


    function generateColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      
      return color;
      
    }

  
  const checkModalExit = () => {
    if(exit === false){
        return(
          <>
          </>
        )
    } else {
        return(
          <ModalExit>  
          <ExitCard>
          <TittleCardExit>Tem certeza que deseja sair?</TittleCardExit>
            <ButtonExits onPress={()=> navigation.navigate('LOGINN')}>
              <ButtonExitsText>Sim</ButtonExitsText>
            </ButtonExits>
            <ButtonExits onPress={()=>  setExit(false)}>
              <ButtonExitsText>Não</ButtonExitsText>
            </ButtonExits>
          </ExitCard>
          </ModalExit>
        )
    }

  }
  
  const showAlert = () => {
    if(alertSucessStateHome === true){
      return(
        <AlertSucess text="Login efetuado com sucesso"></AlertSucess>
      )
    } else {
      return(
        <></>
      )
    }
}
  const handleInfosDoc = () => {
    api.post('/takedoctors', {id: userInfos.id})
    .then((res) => {
        setDocSelect(res.data.data)
        setDocSelectAll(res.data.data)
    })
    .catch((err) => {
        console.log(err)
    })
  }



  const allClinicsFilter = (arrays) => {
    let array = []

    arrays.map((itens) => {
      total = 0
      docSelect.proc.map((item) => {
        if(itens === item.clinica){
          total = total + parseFloat(item.total)
        }else {

        }
      })
      array.push({name: itens, total: total, color: generateColor()})
    })
    console.log("aqui", array)
    setClinicsAll(array)
    setGlobalAllClinic(array)
  }

  const allConveniosFilter = (arrays) => {
    let array = []

    arrays.map((itens) => {
      total = 0
      docSelect.proc.map((item) => {
        if(itens === item.convenio){
          total = total + parseFloat(item.total)
        }else {

        }
      })
      array.push({name: itens, total: total, color: generateColor()})
    })
    setConvenioAll(array)
    setGlobalAllConv(array)
  }

  const filterNumberNames = () => {
    let array = []

    docSelect.proc.map((itens) => {
      let find = array.includes(itens.clinica)
      if(find){
        
      }else {
        array.push(itens.clinica)
      }
        
    })
    allClinicsFilter(array)
  }

  const filterNumberNamesConvenios = () => {
    let array = []

    docSelect.proc.map((itens) => {
      let find = array.includes(itens.convenio)
      if(find){
        
      }else {
        array.push(itens.convenio)
      }
        
    })
    allConveniosFilter(array)
  } 

  useEffect(() => {
    handleInfosDoc()
  },[])

  useEffect(() => {
    filterNumberNames()
    filterNumberNamesConvenios()
  },[docSelect])



  const left15DaysTotal = () => {
    const today = new Date()
    const day = 86400000
    const daysAgo = new Date(today - (15*day))
    const leftDaysAgo = docSelect.proc.filter(element => element.date_proc <= today.toISOString().slice(0, 10) && element.date_proc >= daysAgo.toISOString().slice(0,10))


    let total = 0;
    for(let value of leftDaysAgo) {
        total += parseFloat(value.total);
    }
    return total
}


const next15DaysTotal = () => {
  const today = new Date()
  const DaysInTheFuture = new Date(new Date().setDate(new Date().getDate() + 15));
  const leftDaysAgo = docSelect.proc.filter(element => element.date_proc >= today.toISOString().slice(0, 10) && element.date_proc <= DaysInTheFuture.toISOString().slice(0,10) )



  let total = 0;
  for(let value of leftDaysAgo) {
      total += parseFloat(value.total);
  }
  return total
}


const next30DaysTotal = () => {
  const today = new Date()
  const DaysInTheFuture = new Date(new Date().setDate(new Date().getDate() + 30));
  const leftDaysAgo = docSelect.proc.filter(element => element.date_proc >= today.toISOString().slice(0, 10) && element.date_proc <= DaysInTheFuture.toISOString().slice(0,10) )

  let total = 0;
  for(let value of leftDaysAgo) {
      total += parseFloat(value.total);
  }
  return total
}

const next30DaysProc = () => {
  const today = new Date()
  const DaysInTheFuture = new Date(new Date().setDate(new Date().getDate() + 30));
  const leftDaysAgo = docSelect.proc.filter(element => element.date_proc >= today.toISOString().slice(0, 10) && element.date_proc <= DaysInTheFuture.toISOString().slice(0,10) )


  return leftDaysAgo.length
}

const left15DaysProc = () => {
  const today = new Date()
  const day = 86400000
  const daysAgo = new Date(today - (15*day))
  const leftDaysAgo = docSelect.proc.filter(element => element.date_proc <= today.toISOString().slice(0, 10) && element.date_proc >= daysAgo.toISOString().slice(0,10))



  return leftDaysAgo.length
}

const left45DaysProc = () => {
  const today = new Date()
  const DaysInTheFuture = new Date(new Date().setDate(new Date().getDate() + 30));
  const day = 86400000
  const daysAgo = new Date(today - (15*day))
  const leftDaysAgo = docSelect.proc.filter(element => element.date_proc <= DaysInTheFuture.toISOString().slice(0, 10) && element.date_proc >= daysAgo.toISOString().slice(0,10))



  return leftDaysAgo
}



let total = left15DaysTotal() + next30DaysTotal();

useEffect(() => {
  setTotalAll(total)
},[])





    return(   
            <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{backgroundColor: 'white'}}>
                {showAlert()}
                <ViewHeader>
                  <ImageBack>
                      </ImageBack>
                    <ButtonMenu onPress={()=> setOpenMenu(true)}>
                        <ImageIcon source={iconMenu}/>
                    </ButtonMenu>
                    <ContainerInfosUser>
                        <View>
                        <UserName style={{marginTop: 20}}>Olá,</UserName>
                        <UserName>Dr(a). {userInfos.name}</UserName>
                        </View> 
                        {/* <PhotoSelfie>
                            <ImageSelfie source={perfil}></ImageSelfie>
                        </PhotoSelfie> */}
                    </ContainerInfosUser>

                    <PesinhosInfos style={{paddingTop: 40, marginLeft: 30}}>Saldo a receber</PesinhosInfos>
                    <View style={{flexDirection: "row",  marginLeft: 30}}>
                    <CurrencyInput
                      value={total}
                      style={{fontSize: 20}}
                      prefix="R$"
                      delimiter="."
                      separator=","
                      precision={2}
                      onChangeText={(formattedValue) => {
                        console.log(formattedValue); // $2,310.46
                      }}
                    />
                    </View>
                </ViewHeader>
                  <View style={{flexDirection: "row", justifyContent: "space-evenly"  , marginTop: 20}}>
                  <View style={{flexDirection: "column"}}>
                  <SubInfos>últimos 15 dias</SubInfos>
                  <CurrencyInput
                      value={left15DaysTotal()}
                      style={{fontSize: 14, color: "#c4c4c4", marginTop: -10}}
                      prefix="R$"
                      delimiter="."
                      separator=","
                      precision={2}
                    />
                  </View>
                  <View style={{flexDirection: "column"}}>
                  <SubInfos>próximos 15 dias</SubInfos>
                    <CurrencyInput
                      value={next15DaysTotal()}
                      style={{fontSize: 14, color: "#c4c4c4", marginTop: -10}}
                      prefix="R$"
                      delimiter="."
                      separator=","
                      precision={2}
                    />
                  </View>
                  <View style={{flexDirection: "column"}}>
                  <SubInfos>próximos 30 dias</SubInfos>
                  <CurrencyInput
                      value={next30DaysTotal()}
                      style={{fontSize: 14, color: "#c4c4c4", marginTop: -10}}
                      prefix="R$"
                      delimiter="."
                      separator=","
                      precision={2}
                    />
                  </View>
                  </View>
                  {/* <ButtonMoreInfo>
                    <ButtonMoreInfoText>Mais informações</ButtonMoreInfoText>
                  </ButtonMoreInfo> */}
                <View style={{justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', marginTop: 40}}>
                  <ButtonHome onPress={()=> navigation.navigate("GRAFICS")}>
                      <ButtonHomeText>Gráficos</ButtonHomeText>
                  </ButtonHome>
                  <ButtonHome onPress={() => setOpenModal1(true)}>
                    <ButtonHomeText>Clinicas</ButtonHomeText>
                  </ButtonHome>

                </View>
                <View style={{justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', marginTop: 20}}>
                  <ButtonHome onPress={() => setOpenModal2(true)}>
                  <ButtonHomeText>Convênios</ButtonHomeText>
                  </ButtonHome>
                  <ButtonHome onPress={() => setOpenModal3(true)}>
                  <ButtonHomeText>Ticket médio</ButtonHomeText>
                  </ButtonHome>

                </View>

        </ScrollView>
        <Modal
        animationType="slide"
        transparent={true}
        visible={openMenu}
        >
        <ViewModal>
        <ImageBackMenu>
        <ViewHeaderModal>
          <View>
          <BackButton onPress={()=> setOpenMenu(false)} marginTops={30}></BackButton>
              <ContainerInfosUser>
                  <View>
                    <UserName>Menu</UserName>
                  </View>
              </ContainerInfosUser>
          </View>
          <IconLogo source={logo}></IconLogo>
          </ViewHeaderModal>   
        </ImageBackMenu>
        <ButtonsContainer>
        <MenuButtom onPress={() => navigation.navigate("PROFILE")}>
        <View style={{width: 200, justifyContent: 'center', alignItems: 'center'}}>
            <IconButtomMenu style={{height: 30, width: 30}} source={perfil}></IconButtomMenu>
            <TextButtonMenu>Perfil</TextButtonMenu>
        </View>
        </MenuButtom>
        <MenuButtom onPress={() => navigation.navigate("GRAFICS")}>
        <View style={{width: 200, justifyContent: 'center', alignItems: 'center'}}>
            <IconButtomMenu style={{height: 30, width: 30}} source={graficos}></IconButtomMenu>
            <TextButtonMenu>Gráficos</TextButtonMenu>
            </View>
        </MenuButtom>
        {/* <MenuButtom >
        <View style={{width: 200, justifyContent: 'center', alignItems: 'center'}}>
            <IconButtomMenu style={{height: 30, width: 30}} source={relatorio}></IconButtomMenu>
            <TextButtonMenu>Relatórios</TextButtonMenu>
            </View>
        </MenuButtom> */}
        <MenuButtom onPress={() => navigation.navigate("REPORTS")}>
        <View style={{width: 200, justifyContent: 'center', alignItems: 'center'}}>
            <IconButtomMenu style={{height: 30, width: 30}} source={lupa}></IconButtomMenu>
            <TextButtonMenu>Buscar por Pacientes</TextButtonMenu>
            </View>
        </MenuButtom>
        <MenuButtom onPress={()=>  setExit(true)}>
        <View style={{width: 200, justifyContent: 'center', alignItems: 'center'}}>
            <IconButtomMenu style={{height: 30, width: 30}} source={sair}></IconButtomMenu>
            <TextButtonMenu>Sair do app</TextButtonMenu>
            </View>
        </MenuButtom>
        </ButtonsContainer>
          {checkModalExit()}
        </ViewModal>
        </Modal>
        <ModalComp left45DaysProc={left45DaysProc} clinicAll={clinicAll} openModal1={openModal1} setOpenModal1={setOpenModal1} />
        <ModalConvenio left45DaysProc={left45DaysProc}  convenioAll={convenioAll} openModal2={openModal2} setOpenModal2={setOpenModal2}/>
        <ModalTicket left45DaysProc={left45DaysProc} openModal3={openModal3} setOpenModal3={setOpenModal3} next30DaysProc={next30DaysProc} left15DaysProc={left15DaysProc} total={total} />
        </SafeAreaView>
    )
}

export default HomePage;