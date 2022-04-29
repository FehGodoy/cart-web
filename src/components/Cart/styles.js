import styled from "styled-components";


export const Cart = styled.div`


            .boxProdutos{                
                padding: 10px 15px ;

                .produto{
                    display: flex ;
                    align-items: center ;
                    margin: 20px 0px ;

                    .imagemProd{
                    width: 150px ;
                    height: 150px ;
                    border: 2px solid var(--border) ;                    
                    display: flex ;
                    align-items: center ;
                    justify-content: center ;
                    img{
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                        }
                }

                .conteudoProd{
                    padding: 0px 15px ;

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

                h4{
                    color: var(--colorFrete) ;
                    font-weight: 500 ;
                }
            }
        }



`;
