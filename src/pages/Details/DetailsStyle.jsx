import styled from "styled-components";

export const DetailContainer = styled.div`
  /* en dış container */

  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  background: #025259;
  min-height: calc(80vh 75px);
  /* height: fit-content; */
  padding: 5px;
`;

export const DetailPart = styled.div`
  /* verilerin , içindekiler,resim ve Nutrients in yazdığı yer */
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
 
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #F4E2DE;
  /* background-color: #e1f1dd; */
  /* height: calc(100vh - 300px); */
  @media (max-width: 1250px) {
    justify-content: center;

    border: 1px solid red;
  }
`;

export const ImgContainer = styled.div`
  /* resmin div i */
  background-color:#F4E2DE;
  margin: 1rem;
  border: 1px solid #00adb5;
  padding: 10px;
  border-radius: 3px;

  img {
    border-radius: 10px;
    padding:1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`

color:#F4E2DE;
width: 80%;
display: flex;
align-items: center;
justify-content: center;
  font-size: 2rem;
  h1 {
    font-size: 2rem;
  }
  img {
    width: 150px;
    padding: 2rem;
  }
`;

export const IngredContainer = styled.div`
  /* alttaki bilgiler, içindekiler */
  width: 400px;
  font-size: 1rem;
  margin: 2rem;
  background-color:#F4E2DE;
  margin: 1rem;
  border: 1px solid #00adb5;
  padding: 10px;
  border-radius: 3px;
  text-align: left;
`;

export const OtherPart = styled.div`
  /* üstteki bilgiler */
  /* background-color: lightgray; */

  width: 400px;
  text-align: right;
  font-size: 1rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* span{display:block; margin :1rem} */
`;
