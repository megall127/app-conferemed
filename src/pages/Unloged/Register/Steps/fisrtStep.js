import React, { useContext, useEffect, useState } from "react";
import { Background, BoxInfos, ImageBack, InputLogin, InputMask, TextInputCheck, TittleText, ViewBody} from "../styled";
import DropShadow from "react-native-drop-shadow";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../../../components/ButtonPrimary";
import BackButton from "../../../../components/BackButton";
import GlobalStateContext from "../../../../GlobalState/GlobalStateContext";
import { TittleSubText } from "./styled";
import AlertWrong from "../../../../components/AlertWrong";
import api from "../../../../Service/api";
import Spinner from "react-native-loading-spinner-overlay";
import MaskInput from "react-native-mask-input";

const FirstStepRegister = () => {

    const { setRegisterInfos, registerInfos } = useContext(GlobalStateContext);

    const [cpf , setCpf] = useState("")
    const [senha , setSenha] = useState("")
    const [confirmarSenha , setconfirmarSenha] = useState("")
    const [loading, setLoading] = useState(false)


    //showAlert
    const [alertCpf, setAlertCpf] = useState("0")
    const [alertSenha, setAlertSenha] = useState("0")
    const [alertConfrSenha, setAlertConfrSenha] = useState("0")
    const [failAlert, setFailAlert] = useState(false)

    const navigation = useNavigation();

    useEffect(() => {
      setRegisterInfos(prevState => ({...prevState, cpf: cpf, password: senha}))
    },[cpf,senha])

    const checkEmpty = (value) => {
      if(value === ""){
          return true
      } else {
          return false
      }
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

    const registerHandle = () => {
      setLoading(true)
      api.post('/register', registerInfos)
      .then((res) => {
          setLoading(false)
          console.log("ou aqui")
          navigation.navigate("SECONDTSTEP")
          setAlertSucessState(true)
          setTimeout(() => {
            setAlertSucessState(false)
          }, 3000)
      })
      .catch((err) => {
        console.log(registerInfos)
        setLoading(false)
        setFailAlert(true)
        setTimeout(() => {
          setFailAlert(false)
        }, 3000)
      })
  }
    
    const buttonContinue = () => {
        checkSenha()
        
    }

    const checkInput = (value) => {
      if(value === "1"){
          return "black"
      } else {
          return "black"
      }
    }

    const checkSenha = () => {
      if(senha !== confirmarSenha){
        setFailAlert(true)
        setTimeout(() => {
          setFailAlert(false)
        }, 3000)
      } else {
        if(checkEmpty(cpf) && checkEmpty(senha) && checkEmpty(confirmarSenha)){
          setAlertCpf("1")
          setAlertSenha("1")
          setAlertConfrSenha("1")
        } else if(checkEmpty(cpf) && checkEmpty(confirmarSenha)) {
          setAlertCpf("1")
          setAlertConfrSenha("1")
        } else if(checkEmpty(senha) && checkEmpty(cpf)){
          setAlertSenha("1")
          setAlertCpf("1")
        } else if(checkEmpty(confirmarSenha) && checkEmpty(senha)){
          setAlertSenha("1")
          setAlertConfrSenha("1")
        } else if(checkEmpty(confirmarSenha)){
          setAlertConfrSenha("1")
        } else if(checkEmpty(senha)){
          setAlertSenha("1")
        } else if(checkEmpty(cpf)){
          setAlertCpf("1")
        } else {
          registerHandle()
        }
      }
    }

    const checkAlert = () => {
      if(failAlert === true){
        return (
          <AlertWrong text="As senhas não conferem"></AlertWrong>
        )
      } else {
        return(
          <></>
        )
      }
    }
 
    const checkInputText = (value) => {
      if(value === "1"){
          return(
            <TextInputCheck>Campo obrigatório</TextInputCheck>
          )
      } else {
          return (
            <>
            </>
          )
      }
    }

    return(
            <ViewBody>
              <Background/>
              {showLoading()}
              {checkAlert()}
            <BackButton onPress={() => navigation.navigate("REGISTER")}></BackButton>
            <DropShadow
                  style={{
                    width: "100%",
                    zIndex: 2,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
                  }}
            >
            <BoxInfos>
                <TittleText style={{width: 200}}>Estamos quase acabando</TittleText>
                <TittleSubText>2 de 2</TittleSubText>
               <InputMask>
               <MaskInput
                  placeholder="CPF"
                  style={{borderColor:checkInput(alertSenha)}}
                  value={cpf}
                  onChangeText={(masked, unmasked) => {
                    setCpf(masked);
                  }}
                  mask={[/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/]}
                />
               </InputMask>
                {checkInputText(alertCpf)}
                <InputLogin secureTextEntry={true} onChangeText={setSenha} value={senha} placeholder="Senha" style={{marginTop: 35,borderColor:checkInput(alertSenha)}}></InputLogin>
                {checkInputText(alertSenha)}
                <InputLogin secureTextEntry={true} onChangeText={setconfirmarSenha} value={confirmarSenha} placeholder="Confirmar senha" style={{marginTop: 35,borderColor:checkInput(alertConfrSenha)}}></InputLogin>
                {checkInputText(alertConfrSenha)}
                <PrimaryButton marginTops={30} label="Finalizar Cadastro" onPress={() => buttonContinue()}/>
            </BoxInfos>

            </DropShadow>
        </ViewBody>
    )
}

export default FirstStepRegister;