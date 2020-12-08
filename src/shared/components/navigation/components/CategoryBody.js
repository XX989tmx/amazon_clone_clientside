import React from "react";
import reactBootstrap, {
  Container,
  Alert,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import BabyToy from "./BabyToy";
import BookComicMagazine from "./BookComicMagazine";
import CarBikeRD from "./CarBikeRD";
import ClothShoesBag from "./ClothShoesBag";
import DrugStoreBeauty from "./DrugStoreBeauty";
import DvdMusicGame from "./DvdMusicGame";
import FoodDrink from "./FoodDrink";
import HomeElectronicsAndCamera from "./HomeElectronicsAndCamera";
import HomeKitchenPet from "./HomeKitchenPet";
import PcAndOffice from "./PcAndOffice";
import SportsOutdoor from "./SportsOutdoor";
const CategoryBody = (props) => {
  return (
    <Row>
      <Col>
        <BookComicMagazine />
        <DvdMusicGame />
        <HomeElectronicsAndCamera />
        <PcAndOffice />
        <HomeKitchenPet />
        <FoodDrink />
        <DrugStoreBeauty />
        <BabyToy />
        <ClothShoesBag />
        <SportsOutdoor />
        <CarBikeRD />
      </Col>
    </Row>
  );
};

export default CategoryBody;
