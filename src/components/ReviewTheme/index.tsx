import { Container } from "@components/Container";
import React from "react";
import { ReviewFilter } from "./elements/ReviewFilter";
import { ReviewFooter } from "./elements/ReviewFooter";
import { ReviewHeader } from "./elements/ReviewHeader";
import { ReviewContainer } from "./elements/ReviewsContainer";

export const ReviewTheme = () => {
  return (
    <Container bgColor="#f7faff">
      <ReviewHeader />
      <ReviewFilter />
      <ReviewContainer />
      <ReviewFooter />
    </Container>
  );
};
