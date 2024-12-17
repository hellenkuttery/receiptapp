import { Link } from "react-router-dom";
import styled from "styled-components";

const primaryColor="#F4E2DE";
const secondaryColor="#F29325"
const backgroundRenk="#025259"

export const Nav = styled.div`
  /* SALMON olan navbar */
  padding: 0.2rem 2rem;
  display: flex;
  justify-content: space-between; //yatayda aralıklı objeler halinde ortala
  align-items: center; // dikeyde ortala
  flex-wrap: wrap;
  /* Varsayılan olarak esnek öğeler tek bir satıra sığmaya çalışırlar. Gerektiğinde birden fazla satıra yaymak için bu özelliği kullanabilirsiniz */
  background:#F4E2DE;

 
  font-size: 2rem;
`;

export const Menu = styled.div`
  /* navbardaki 3 kelime about ...hepsini içine alan sarmalın (kutunun ) özellikleri*/
  background:#F4E2DE;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* içinde bulunduğu div in  stillerine göre ayarla kendini,akıştan çık,  bunu yazmazsak food app in altında kalacak */
  /* 3 kelime  açılınca üstteki özelliklerde olsun*/
  @media (max-width: 768px) {
    /* uzun yazı olurda taşarsa gizle (hamburgere dönüşünce)*/
    flex-direction: column;

    width: 100%;
    /* hamburgere tıklanınca true olan props sayesinde görün, false olunca görünme */
    display: ${({ deger }) => (deger === true ? "flex" : "none")};
  }

  a {
    padding: 0.2rem 1rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    /* kelimelerin altı çizili olmasın */
    color: #025259;

    transition: all 0.3s ease-in;
    font-size: 2rem;
    font-family: "Girassol", sans-serif;
    &:hover {
      color: #00adb5;
      font-weight: bold;
    }
    @media (max-width: 768px) {
      /* hamburger meydana çıktığında 
    /* ekran küçülünce alttaki stiller olsun */
      border: 1px solid #007172;
      border-radius: 10px;
      width: 91%;
    }
  }
`;

export const MenuLink = styled(Link)`
  /* navbardaki 3 kelime ... tek tek about vs yazanların özellikleri YEŞİL*/
  background: #F4E2DE;

  /* padding: 0.5rem 0.5rem; */
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  /* kelimelerin altı çizili olmasın */
  color: #02475e;

  transition: all 0.4s;
  font-size: 1rem;
  font-family: "Girassol", sans-serif;
  &:hover {
    color: #007172;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    /* hamburger meydana çıktığında sonrasında tıklanınca linklerde
    /* ekran küçülünce alttaki stiller olsun */
    border: 1px solid #007172;
    border-radius: 10px;
    width: 91%;
  }
`;

export const Logo = styled(MenuLink)`
  background-color: #F4E2DE;
  font-size: 2rem;
  span {
    color: #007172;
  }
`;

export const Hamburger = styled.div`
  display: none;
  /* Bir öğeyi gizleme özelliği  Öğe gizlenecek ve sayfa, öğe orada değilmiş gibi alttaki stiller yok gibi görüntülenecektir: hamburger ekran büyükken görünmesin 768 den küçülmeye başlayınca görünsün*/

  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;
