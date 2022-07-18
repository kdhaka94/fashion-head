import React from "react";
import { usePendingProductsQuery } from "@data/products/use-pendingProducts.query";
import { Approval } from "../Approval";
import classes from "./styles.module.css";

export const ApprovalsContainer = () => {
  const { data } = usePendingProductsQuery();

  return (
    <div className={classes.container}>
      {data?.data.data?.slice(0, 2).map((product) => (
        <Approval
          productImg={product.productImageUrl![0]}
          date={product.createdAt}
        />
      ))}
    </div>
  );
};
