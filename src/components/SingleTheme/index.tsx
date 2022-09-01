import { Container } from "@components/Container";
import { ReviewHeader } from "@components/ReviewTheme/elements/ReviewHeader";
import React from "react";
import { SingleThemeProduct } from "./elements/SingleThemeProduct";
import { SingleThemeTopbar } from "./elements/SingleThemeTopbar";
import { useGetOneThemeQuery,getOneTheme } from "@data/getOneTheme/use-getOneTheme.query";

import { useEffect,useState } from "react";
// import { Themes } from "@data/getOneTheme/types";
export const SingleTheme = () => {
;
  
  return (
    <Container bgColor="#f7faff">
      <ReviewHeader />
      <SingleThemeTopbar />
      <SingleThemeProduct />
    </Container>
  );
};
