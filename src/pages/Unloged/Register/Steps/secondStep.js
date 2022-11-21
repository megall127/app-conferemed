import React, { useContext, useEffect, useState } from "react";
import DropShadow from "react-native-drop-shadow";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../../../components/ButtonPrimary";
import BackButton from "../../../../components/BackButton";
import { BoxInfos, RegisterFinally, SubTittleFinaly, TittleFinaly, TittleSubText, TittleText, ViewBody } from "./styled";
import { Picker } from "@react-native-picker/picker";
import GlobalStateContext from "../../../../GlobalState/GlobalStateContext";
import Spinner from 'react-native-loading-spinner-overlay';
import api from "../../../../Service/api";
import AlertWrong from "../../../../components/AlertWrong";
import { Background } from "../styled";
import { Image, View } from "react-native";
import register from '../../../../assets/imgs/register.png'

const SecondStep = () => {
    const navigation = useNavigation();

    const [selectedType, setSelectedType] = useState("");
    const [loading, setLoading] = useState(false)
    const [failAlert, setFailAlert] = useState(false)

    const { setRegisterInfos,
          registerInfos,
          setAlertSucessState
         } = useContext(GlobalStateContext);

    useEffect(() => {
      setRegisterInfos(prevState => ({...prevState, typeuser: selectedType}))
    },[selectedType])

    useEffect(() => {
      console.log(registerInfos)
    },[registerInfos])
    
    const registerHandle = () => {
      setLoading(true)
      api.post('/register', registerInfos)
      .then((res) => {
          setLoading(false)
          navigation.navigate("LOGINN")
          setAlertSucessState(true)
          setTimeout(() => {
            setAlertSucessState(false)
          }, 3000)
      })
      .catch((err) => {
        setLoading(false)
        setFailAlert(true)
        setTimeout(() => {
          setFailAlert(false)
        }, 3000)
      })
  }

  const showLoading = () => {
    if(loading === true){
      return(
        <Spinner
        visible={true}
      />
      )
    } else {
      return(
        <></>
      )
    }
}


  const checkAlert = () => {
      if(failAlert === true){
        return(
          <AlertWrong text="Algo deu errado!"></AlertWrong>
        )
      } else {
        return(
          <></>
        )
      }
  }


    return(
            <ViewBody>
              <Background/>
              {checkAlert()}
              {showLoading()}
              <View style={{position:"absolute", top: 20, left: 0}}>
              </View>
              <RegisterFinally>
                  <TittleFinaly>Parabéns!</TittleFinaly>
                  <SubTittleFinaly>A sua conta foi criada com sucesso</SubTittleFinaly>
                  <Image style={{height: 350, width: 300}} source={register}></Image>
                  <PrimaryButton widthValue={200} radius={10} onPress={() =>  navigation.navigate("LOGINN")} label='Começar a usar o aplicativo'></PrimaryButton>
              </RegisterFinally>
        </ViewBody>
    )
}

export default SecondStep;