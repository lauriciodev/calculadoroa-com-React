import React , {useState} from "react"

function App() {
  
const [valorTela,setValorTela]= useState("")
const [resultado,setResultado]= useState(0)
const [d,setAcumulador]= useState(0)
const [operado,setOperado]= useState(false)


//componentes

const Tela=(valor,res)=>{
 return(
  <div style={cssTela}>
  <span style={cssTelaOpera}>{valor}</span>
  <span style={cssTelaRes}>{res}</span>
  </div>
 )

}

const Btn = (label,onclick)=>{
  return(
    <button  style={cssBtn} onClick={onclick}>{label}</button>
  )
}

//funções

const addDigitoTela=(d)=>{
  if((d== "+" || d== "-" || d== "/" || d== "*") && operado){
  console.log("teste  ok")
  setOperado(false)
  setValorTela(resultado + d)
  return
  }
  if(operado){
    setValorTela(d)
    setOperado(false)
    return
  }
  const valorDigitadoTela = valorTela + d
        setValorTela(valorDigitadoTela)

}

const limparMemoria = ()=>{
  setOperado(false)
  setValorTela("")
  setResultado(0)
  setAcumulador(0)
  return
}

const operacao =(oper)=>{
  if(oper == "bs"){
    let vtela = valorTela;
    vtela = vtela.substring(0,(vtela.length -1))
    setValorTela(vtela)
    setOperado(false)
    return
  }
  try{
    const r = eval(valorTela)
    setAcumulador(r)
    setResultado(r)
    setOperado(true)
  }catch{
    setResultado("erro!")
  }
}







//styles

const cssContainer ={
  display:"flex",
  color: "#fff",
  justifyContent:"flex-start",
  alignItems:"center",
  backgroundColor:"#3c3cda",
  flexDirection:"column",
  gap:"4px",
  width:240,
  border: "1px solid #ca1",
  margin:"0 auto",
  padding: "11px"
}
const cssTela = {
  display:"flex",
   padding: "0 5px",
  justifyContent:"center",
  alignItems:"flex-start",
  backgroundColor:"#3c1d",
  flexDirection:"column",
  width:"100%",
  height: "80px",
  border:"1px solid #fff"
}
  
const cssTelaOpera ={
  fontSize:20,
  height:30, 
  color:"#fff"
}

const cssTelaRes = {
  fontSize:50,
  color: "#fff"
}
const cssBtn = {
  fontSize:20,
  height: 60,
  padding:10,
  width:60,
  border: "1px solid #3c5a",
  backgroundColor:"#3c4f",
  textAlign:"center",
  borderColor:"#4f5",
  color:"#fff"

 
}

const cssContanerBtn ={
  width:"100%",
  height:"100%",
  display: "flex",
  flexWrap:"wrap",
   padding:"4px"

  
}








  return (
  <>
  <div style={cssContainer}>
    <h3>calculadora simples</h3>
    {Tela(valorTela,resultado)}
    <div style={cssContanerBtn}>
     {Btn("AC",limparMemoria)}
     {Btn("(",()=>addDigitoTela("("))}
     {Btn(")",()=>addDigitoTela(")"))}
     {Btn("/",()=>addDigitoTela("/"))}
     {Btn("7",()=>addDigitoTela("7"))}
     {Btn("8",()=>addDigitoTela("8"))}
     {Btn("9",()=>addDigitoTela("9"))}
     {Btn("*",()=>addDigitoTela("*"))}
     {Btn("4",()=>addDigitoTela("4"))}
     {Btn("5",()=>addDigitoTela("5"))}
     {Btn("6",()=>addDigitoTela("6"))}
     {Btn("-",()=>addDigitoTela("-"))}
     {Btn("1",()=>addDigitoTela("1"))}
     {Btn("2",()=>addDigitoTela("2"))}
     {Btn("3",()=>addDigitoTela("3"))}
     {Btn("+",()=>addDigitoTela("+"))}
     {Btn("0",()=>addDigitoTela("0"))}
     {Btn(".",()=>addDigitoTela("."))}
     {Btn("<=",()=>operacao("bs"))}
     {Btn("=",()=>operacao("="))}

    </div>
  </div>
  </>
  );
}

export default App;
