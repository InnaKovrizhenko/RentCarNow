import {
  Title,
  Box,
  Description,
  Headline,
  Advantages,
  Item,
  Image,
  FlexContainer,
} from "./Home.styled";

import carImage from "../images/cool-sports-car.png";

export const Home = () => {
  return (
    <>
      <Box>
        <Title>Ласкаво просимо до RentCarNow!</Title>
        <Description>
          Ми пропонуємо широкий вибір автомобілів для оренди, щоб задовольнити
          всі ваші потреби в передвиженні. Незалежно від того, чи потрібен вам
          автомобіль для службової поїздки, відпочинку з сім'єю або просто для
          комфортної поїздки, у нас є правильний автомобіль для вас.
        </Description>
        <Headline>Чому обирають нас?</Headline>
        <FlexContainer>
          <Image>
            <img src={carImage} alt="" width="450" height="300"></img>
          </Image>
          <Advantages>
            <Item>
              Різноманітність автомобілів: Ви можете обрати автомобіль, який
              підходить саме вам.
            </Item>
            <Item>
              Легкість подорожей: З нашими автомобілями ви можете вивчати нові
              місця або дістатися до мети без турбот.
            </Item>
            <Item>
              Простий процес оренди: Ми робимо процес оренди легким та зручним,
              щоб ви могли розпочати свою подорож якнайшвидше.
            </Item>
            <Item>
              Надійність та технічна підтримка: Усі наші автомобілі регулярно
              проходять технічне обслуговування, щоб забезпечити вашу безпеку та
              комфорт.
            </Item>
            <Item>
              Гнучкі умови оренди: Ми пропонуємо різні опції оренди, включаючи
              добову, тижневу та тривалу оренду, щоб задовольнити ваші потреби.
            </Item>
          </Advantages>
        </FlexContainer>
        <Description>
          Розпочніть свою пригоду з RentCarNow прямо зараз! Оберіть свій
          автомобіль та розпочніть подорожувати з комфортом та впевненістю в
          русі. Ми дбаємо про вашу подорож, щоб ви могли насолоджуватися кожним
          моментом. Зробіть перший крок до вашої наступної подорожі разом з
          нами!
        </Description>
      </Box>
    </>
  );
};