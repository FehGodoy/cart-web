import styled from "styled-components";


export const SectionBoxCart = styled.section`
    padding: 40px 0px ;

    .container{
        max-width: 1100px ;    
        margin: 0 auto ;
        display: flex ;
        justify-content:center ;
        .box{
            width: 50% ;
            background-color: var(--white) ;
            border-radius: 8px;
            -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.27);
            -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.27);
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.27);

            @media screen and (max-width:991px){
                width: 90% ;
            }
            .boxCont{

                .headerBox{
                    border-bottom: 2px solid var(--border) ;
                    padding: 15px 0px ;

                    
                .titulo{
                    text-align: center ;
                }
            }

            .boxProdutos{                
                padding: 10px 15px ;

                .produto{
                    display: flex ;
                    align-items: center ;
                    margin: 20px 0px ;
                    flex-wrap: wrap ;

                    .imagemProd{
                    
                    width: 150px ;
                    height: 150px ;
                    border: 2px solid var(--border) ;                    
                    display: flex ;
                    align-items: center ;
                    justify-content: center ;
                    @media screen and (max-width:991px){
                        margin: 0 auto ;
                    }
                    img{
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                        }
                }

                .conteudoProd{
                    padding: 0px 15px ;
                    flex: 50% ;

                    @media screen and (max-width:991px){
                        flex: 100% ;
                        text-align: center ;
                        padding: 10px 0px ;
                    }

                    .tituloProd{

                        h6{
                            font-size: 1.1em ;
                            font-weight: 900 ;
                            font-family: var(--font) ;
                        }
                    }

                    .precoAnt  {

                        span{
                            color: #a9a9a9;
                            font-weight: 500;
                            font-size: 12px;   
                        }                        
                    }

                    .precoAtual{

                        span{
                            font-weight: 600 ;
                        }
                    }
                }
            }
        }
        .boxTotal{
            border-top: 2px solid var(--border);
            border-bottom: 2px solid var(--border);
            padding: 20px;
            
            .boxInfo{
                display: flex ;
                justify-content: space-between ;

                .tituloTotal{

                        h5{
                            font-size: 1.5em ;
                        }
                    }
                    .resultado{
                        h5{
                            font-size: 1.5em ;
                        }
                    }
            }

            .freteGratis{
                max-width: 80%;
                margin: 25px auto 4px auto;
                text-align: center;
                padding: 10px 5px;
                background: var(--backFrete);
                border-radius: 40px;

                @media screen and (max-width:991px){
                    padding: 10px 12px ;
                    }

                h4{
                    color: var(--colorFrete) ;
                    font-weight: 500 ;
                }
            }

            .semfreteGratis{
                max-width: 80%;
                margin: 25px auto 4px auto;
                text-align: center;
                padding: 10px 5px;
                background: var(--red);
                border-radius: 40px;

                @media screen and (max-width:991px){
                    padding: 10px 12px ;
                    }

                h4{
                    color: var(--white) ;
                    font-weight: 500 ;
                }
            }
        }
        .buttonFinalizar{
            margin: 20px 0px;
            display: flex;
            justify-content: center;
            a{
                background-color: var(--blueButton) ;
                color: var(--white);
                text-decoration: none ;
                font-weight: 600 ;
                font-size: 1.4em ;
                padding: 15px 150px ;
                border-radius: 8px ;

                @media screen and (max-width:991px){
                    padding: 15px 30px ;
                    }
            }
        }
    }
}
        
}

`;
