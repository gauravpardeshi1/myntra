import React, { useEffect } from 'react'
import {Box, Heading, Input, Text} from '@chakra-ui/react'
import { Grid } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getMensProduct, getProduct } from "../Redux/action";
import CardSkeleton from "./CardSkeleton";
import Productcard, { ProductCard } from "./Productcard";
import axios from 'axios'
const Mens = () => {

  const { mens, loading, error } = useSelector((state) => state.products);
 
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();
	const dispatch = useDispatch();
//   const categoryParamas = {
// 		params: {
// 			category_values: searchParams.getAll("category_values"),
// 			brand_name: searchParams.getAll("brand_name"),
// 			_sort: searchParams.get("order") && "price",
// 			_order: searchParams.get("order"),
// 			_page: searchParams.get("page") || 1,
// 			_limit: 9,
// 		},
// 	};

  
// 	React.useEffect(() => {
// 		document.title = "Products";
// 		dispatch(getProduct(categoryParamas));

    
//   }, [location.search]);
useEffect(()=>{
	dispatch(getMensProduct)
},[])
  return  loading ? (
		<><Box w='100%' display={'flex'} gap='40px'  > 
    <Box w='30%'></Box>
			<Grid
			w='70%'
		
      mb='8'
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={2}
      rowGap={6}
      mt={6}>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
					<CardSkeleton key={item} />
				))}
			</Grid>
      </Box>
		</>
	) : error ? (
		<h1>Something is wrong</h1>
	) : (
		<>

<Box w='90%'  margin='auto' display={'flex'} gap='30px'  > 
<Box w='30%'>
  <Box border='1px solid gray' h='400px' mt={6}>
    {/* <Heading>FILTERS</Heading> */}
<Box>
  <Heading></Heading>
  <Box>
  <Checkbox colorScheme='green' defaultChecked>
    Checkbox
  </Checkbox>
  </Box>
</Box>
<Box></Box>
<Box></Box>
  </Box>
</Box>
			<Grid
      w='70%'
		
				mb='8'
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
					lg: "repeat(3, 1fr)",
				}}
				gap={2}
				rowGap={6}
				mt={6}>
				{mens?.map(
					(item, idx) =>
						item.id !== "0z5ON4w" && (
							<ProductCard key={item.id} {...item} />
						)
				)}
			</Grid>
      </Box>
      
		</>
	);
}

export default Mens
