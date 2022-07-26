import { Container } from "@components/Container";
import { ReviewHeader } from "@components/ReviewTheme/elements/ReviewHeader";
import React from "react";
import { SingleThemeProduct } from "./elements/SingleThemeProduct";
import { SingleThemeTopbar } from "./elements/SingleThemeTopbar";

export const SingleTheme = () => {
  return (
    <Container bgColor="#f7faff">
      <ReviewHeader />
      <SingleThemeTopbar />
      <SingleThemeProduct />
    </Container>
  );
};
