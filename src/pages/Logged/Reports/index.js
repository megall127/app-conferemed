import React, { useContext, useEffect, useState } from "react";import BackButton from "../../../components/BackButton";
import { BallCheck, BoxAllCards, CardBox, ImageBack, InpuIcon, InputSearch, InputTextSearch, TextCardBox, TextCardBoxProc, TextCheck, ViewBody } from "./styled";
import lupa from "../../../assets/icons/setaserach.png"
import DropShadow from "react-native-drop-shadow";
import GlobalStateContext from "../../../GlobalState/GlobalStateContext";
import api from "../../../Service/api";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Reports = () => {


  const {userInfos,setOpenMenu } = useContext(GlobalStateContext);
  const [docSelect, setDocSelect] = useState([]);
  const [filterInput, setFilterInput] = useState('')


  const navigation = useNavigation();

  const handleInfosDoc = () => {
    api.post('/takedoctors', {id: userInfos.id})
    .then((res) => {
        setDocSelect(res.data.data.proc)
    })
    .catch((err) => {
        console.log(err)
    })
  }

  useEffect(() => {
    handleInfosDoc()
  },[])


  const filterClients = docSelect.filter((doc) => doc.nome_paciente.toLowerCase().startsWith(filterInput.toLowerCase()))


  useEffect(() => {
    console.log(filterClients)
  },[filterClients])

  const checkBall = (value) => {

    if(value === 1){

      return(
        <>
        <BallCheck style={{backgroundColor: "#F6E018"}}/>
        <TextCheck>Agendado</TextCheck>
        </>
      )
    }else if(value === 2){
        return(
          <>
          <BallCheck style={{backgroundColor: "#1FBA05"}}/>
          <TextCheck>Executado</TextCheck>
          </>
        )
    } else {
      return(
        <>
          <BallCheck style={{backgroundColor: "#E7820C"}}/>
          <TextCheck>Cancelado</TextCheck>
        </>
      )
    }
  }
  const checkBallSecond = (value) => {

    if(value === 1){

      return(
        <>
        <BallCheck style={{backgroundColor: "#c4c4c4"}}/>
        <TextCheck>Aguardando</TextCheck>
        </>
      )
    }else if(value === 2){
        return(
          <>
          <BallCheck style={{backgroundColor: "#1FBA05"}}/>
          <TextCheck>Pago</TextCheck>
          </>
        )
    } else {
      return(
        <>
          <BallCheck style={{backgroundColor: "#E7820C"}}/>
          <TextCheck>Atrasado</TextCheck>
        </>
      )
    }
  }


  const backButton = () => {
    setOpenMenu(false)
    navigation.navigate("HOMEPAGE")
}

    return(
        <ViewBody>
        <ImageBack/>
        <BackButton onPress={()=>backButton()} marginTops={50}></BackButton>
        <InputSearch>
        <InpuIcon source={lupa}></InpuIcon>
        <InputTextSearch value={filterInput} onChangeText={setFilterInput} placeholder="Pesquisar">

        </InputTextSearch>
        </InputSearch>
        <BoxAllCards>
        <DropShadow
                  style={{
                    zIndex: 1,
                    shadowColor: "#000",
                    marginTop: 20,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
                  }}
            >
              {filterClients.map((itens) => {
                const date = new Date(itens.date_proc)

                const day = date.getDate().toString()
                const month = date.getMonth() + 1
                const year = date.getFullYear().toString()
                return(
                  <CardBox>
                  <TextCardBox>{itens.nome_paciente}</TextCardBox>
                  <TextCardBoxProc>{itens.nome_proc}</TextCardBoxProc>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                 {checkBall(itens.stats_proc)}
                 {checkBallSecond(itens.stats_pay)}
                  </View> 
                  <TextCheck style={{marginLeft: 20}}>{`${day.length === 1 ? `0${day}` : day}/${month.toString().length === 1 ? `0${month}` : month}/${year}`}</TextCheck>
                  </CardBox>
                )
              })}

</DropShadow>
        </BoxAllCards>


        </ViewBody>
    )
}

export default Reports;