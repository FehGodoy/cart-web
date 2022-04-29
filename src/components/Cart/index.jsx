import React,{useState,useEffect} from "react";
import * as Styled from './styles';

function Cart() {

     // Empty array in useState!
  const [data, setData] = useState([]); 
   

  useEffect(() => {
    fetch('https://godoydev.com.br/dados_temp/acima-10-reais.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    let total = 0;    
    data.forEach(item =>{        
        total += item.sellingPrice  / 100 
    })

    return(
        

        
    <Styled.Cart>
        <div className="boxProdutos">            
            {data.map((choco) => (
                <div className="produto" key={choco.id}>
                <div className="imagemProd">
                    <img src={choco.imageUrl} alt="" />
                </div>
                <div className="conteudoProd">
                    <div className="tituloProd">
                        <h6>{choco.name}</h6>
                    </div>
                    <div className="precoAnt">
                        <span>R$ {(choco.price / 100).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                        })}</span>
                    </div>
                    <div className="precoAtual">
                        <span>R$ {(choco.sellingPrice / 100).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                        })}</span>
                    </div>
                </div>
            </div>  
             ))}             
        </div>
        <div className="boxTotal">
            <div className="boxInfo">
                <div className="tituloTotal">
                    <h5>Total</h5>
                </div>
                <div className="resultado">                    
                    <h5>R$ {total.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                    })} </h5>
                </div> 
            </div>
                {
                    total > 10 ?                   
                    <div className="freteGratis">
                        <h4>Parabéns, sua compra tem frete grátis !</h4>
                    </div>
                    : 
                    <div className="semfreteGratis">
                    <h4>Ainda faltam R${(10 - total).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                        })} <br></br> para o frete grátis</h4>
                </div>
                }            
        </div>
    </Styled.Cart>    
    
    )
}

export default Cart;