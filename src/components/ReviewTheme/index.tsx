import { Container } from "@components/Container";
import React from "react";
import { FilterHeader } from "../common/FilterHeader";
import { ReviewFooter } from "./elements/ReviewFooter";
import { ReviewHeader } from "./elements/ReviewHeader";
import { ReviewContainer } from "./elements/ReviewsContainer";
import classes from './styles.module.css'
export const ReviewTheme = () => {
  return (
    <Container bgColor="#f7faff">
      <ReviewHeader />
      <FilterHeader headerName="Review Theme" className={classes.filterHeader}/>
      <ReviewContainer />
      <ReviewFooter />
    </Container>
  );
};
