import React from 'react';
import Cart from '../../components/Cart';
import * as Styled from './styles';



export default function Home() {
  return (
    <>
      <Styled.SectionBoxCart>
        <div className="container">
          <div className="box">
            <div className="boxCont">
              <div className="headerBox">
                <div className="titulo">
                  <h1>Meu Carrinho</h1>
                </div>
              </div>
              <Cart/>
              <div className="buttonFinalizar">
                <a href="#">
                  Finalizar compra
                </a>
              </div>
            </div>
          </div>
        </div>
      </Styled.SectionBoxCart>
    </>
  )
}