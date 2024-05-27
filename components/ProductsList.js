import React, {useState, useEffect} from "react";
import { FlatList, View, useWindowDimensions } from "react-native";
import ProductCard from "./ProductCard";
import { styled } from "nativewind";

const StyledView = styled(View);

const minCols = 2;

const calcNumColumns = (width) => {
  const cols = width / 180;
  const colsFloor = Math.floor(cols) > minCols ? Math.floor(cols) : minCols;
  const colsMinusMargin = cols - 2 * colsFloor * 2; // 2 es el margen actual de ProdctCard
  if (colsMinusMargin < colsFloor && colsFloor > minCols) return colsFloor - 1; 
  else return colsFloor;
};

const renderItem = ({ item, index }) => {
  if (item.empty) {
    // Elemento "vacío" con el mismo estilo que el ProductCard
    return <StyledView className="flex-1 w-1/2 p-2 bg-transparent rounded-2xl m-2"/>;
  }
  return (
    <ProductCard {...item} />
  );
};

const formatData = (data, numColumns) => {
  const amountFullRows = Math.floor(data.length / numColumns);
  let amountItemsLastRow = data.length - amountFullRows * numColumns;

  while (amountItemsLastRow !== numColumns && amountItemsLastRow !== 0) {
    data.push({id: `empty-${amountItemsLastRow}`, empty: true});
    amountItemsLastRow++;
  }
  return data;
};

export default function ProductsList({ products }) {
  const {width} = useWindowDimensions();
  const [numColumns, setNumColumns] = useState(calcNumColumns(width));

  useEffect(() => {
    setNumColumns(calcNumColumns(width));
  }, [width]);

  return (
    <FlatList
      key={numColumns}
      data={formatData(products, numColumns)}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      renderItem={renderItem}
    />
  );
}
