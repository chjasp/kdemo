import React, { useState, useEffect } from "react";
import "./Wrapper.css";
import Card from "./Card";
import Bottom from "./Bottom";
import { data } from "./data";

const computedFeatures = {
  nrOfLikeComputations: 0,
  nrOfDislikeComputations: 0,
  avgLiked: [0, 0],
  avgDisliked: [0, 0],
};

const Wrapper = ({ flipCard, setPosition }) => {
  const [products, setProducts] = useState(data);
  const [likedProducts, setLikedProducts] = useState([]);
  const [dislikedProducts, setDislikedProducts] = useState([]);
  const [displayedProduct, setDisplayedProduct] = useState(0);

  useEffect(() => {
    let sp = products.filter((product) => product.name == displayedProduct);
    let xp = sp[0].x;
    let yp = sp[0].y;

    setPosition([xp, yp]);
  }, []);

  const handleChoice = (id, action) => {

    switch (action) {
      case "ADD_TO_LIKED_PRODUCTS":
        let nr = computedFeatures.nrOfLikeComputations;
        let selectedProduct = products.filter((product) => product.name == id);

        console.log(selectedProduct);

        let x = selectedProduct[0].x;
        let y = selectedProduct[0].y;

        let newLikedX =
          (nr / (nr + 1)) * computedFeatures.avgLiked[0] + (1 / (nr + 1)) * x;
        let newLikedY =
          (nr / (nr + 1)) * computedFeatures.avgLiked[1] + (1 / (nr + 1)) * y;

        setLikedProducts([...likedProducts], selectedProduct[0]);
        let cleanProducts = products.filter((product) => product.name != id);
        setProducts(cleanProducts);

        let minDist = 1000000;
        let minIdx = 0;
        for (let i = 0; i < cleanProducts.length; i++) {
          let runningDist =
            (cleanProducts[i].x - newLikedX) ** 2 +
            (cleanProducts[i].y - newLikedY) ** 2;

          if (
            computedFeatures.avgDisliked[0] != 0 &&
            computedFeatures.avgDisliked[1] != 0
          ) {
            runningDist +=
              -0.3 *
              (cleanProducts[i].x - computedFeatures.avgDisliked[0]) ** 2;
            runningDist +=
              -0.3 *
              (cleanProducts[i].y - computedFeatures.avgDisliked[1]) ** 2;
          }

          if (runningDist < minDist) {
            minDist = runningDist;
            minIdx = i;
          }
        }

        console.log("MIN-IDX");
        console.log(minIdx);

        console.log("MIN-DIS");
        console.log(minDist);

        computedFeatures.nrOfLikeComputations = nr + 1;
        computedFeatures.avgLiked = [newLikedX, newLikedY];
        setDisplayedProduct(cleanProducts[minIdx].name);

    
        setPosition([cleanProducts[minIdx].x, cleanProducts[minIdx].y]);

        console.log(computedFeatures);
        break;
      case "ADD_TO_DISLIKED_PRODUCTS":
        let nrDL = computedFeatures.nrOfDislikeComputations;
        let selectedProductDL = products.filter(
          (product) => product.name === id
        );

        let xDL = selectedProductDL[0].x;
        let yDL = selectedProductDL[0].y;

        let newLikedXDL =
          (nrDL / (nrDL + 1)) * computedFeatures.avgDisliked[0] +
          (1 / (nrDL + 1)) * xDL;
        let newLikedYDL =
          (nrDL / (nrDL + 1)) * computedFeatures.avgDisliked[1] +
          (1 / (nrDL + 1)) * yDL;

        setLikedProducts([...dislikedProducts], selectedProductDL[0]);
        let cleanProductsDL = products.filter((product) => product.name != id);
        setProducts(cleanProductsDL);

        let minDistDL = 1000;
        let minIdxDL = 0;
        for (let i = 0; i < cleanProductsDL.length; i++) {
          let runningDistDL =
            (cleanProductsDL[i].x - computedFeatures.avgLiked[0]) ** 2 +
            (cleanProductsDL[i].y - computedFeatures.avgLiked[1]) ** 2;

          if (
            computedFeatures.avgDisliked[0] != 0 &&
            computedFeatures.avgDisliked[1] != 0
          ) {
            runningDistDL +=
              -0.3 *
              (cleanProductsDL[i].x - computedFeatures.avgDisliked[0]) ** 2;
            runningDistDL +=
              -0.3 *
              (cleanProductsDL[i].y - computedFeatures.avgDisliked[1]) ** 2;
          } else {
            computedFeatures.avgDisliked[0] = newLikedXDL;
            computedFeatures.avgDisliked[1] = newLikedYDL;
          }

          if (runningDistDL < minDistDL) {
            minDistDL = runningDistDL;
            minIdxDL = i;
          }
        }

        computedFeatures.nrOfDislikeComputations = nrDL + 1;
        computedFeatures.avgDisliked = [newLikedXDL, newLikedYDL];
        setDisplayedProduct(cleanProductsDL[minIdxDL].name);

        setPosition([cleanProductsDL[minIdxDL].x, cleanProductsDL[minIdxDL].y]);

        break;

      default:
        return null;
    }
  };

  return (
    <div className="outer-wrap">
      <Card id={displayedProduct} handleChoice={handleChoice} />
      <Bottom flipCard={flipCard} currentId={displayedProduct} />
    </div>
  );
};

export default Wrapper;
