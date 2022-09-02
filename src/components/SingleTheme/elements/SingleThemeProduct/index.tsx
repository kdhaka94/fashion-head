import { Button, Image, Typography } from "@components/common";
import { FilterHeader } from "@components/common/FilterHeader";
import { DeleteOutlineRounded, EditOutlined } from "@mui/icons-material";
import { SingleThemeInfo } from "../SingleThemeInfo";
import { TeamDataTable } from "../TeamDataTable";
import classes from "./styles.module.css";
import React from "react";
import { useHeadStore } from "@utils/zustand/store";
import { useEffect} from "react";
export const SingleThemeProduct = ({
  productImg = "https://mui.com/static/images/avatar/1.jpg",
  category = "Short Dress",
  plan = "Silver",
  gender = "Male",
  brands = ["Zara", "Crocs", "Hide"],
  team = "A",
}) => {
  const {ThemeInfo}=useHeadStore();
  const getOneTheme=React.useCallback(()=>{
       return ThemeInfo
  },[ThemeInfo])
  useEffect(() => {
    console.log(ThemeInfo)
    getOneTheme();
  }, [ThemeInfo,getOneTheme])
  

const res=getOneTheme()?.data[0];

  return (
    <div className={classes.container}>
      <div className={classes.productInfoContainer}>
        <div className={classes.productContainer}>
          <Image width={154} height={154} src={res?.images[0]} />
          <div className={classes.productData}>
            <div>
              <SingleInfo name="Category" value={res?.categories.join(", ")} />
              <SingleInfo name="Plan" value={res?.plan} />
            </div>
            <div>
              <SingleInfo name="Gender" value={res?.gender} />
              <SingleInfo name="Brands" value={res?.brands.join(", ")} />
            </div>
            <div>
              <SingleInfo name="Team" value={res?.team} />
            </div>
          </div>
        </div>
        <FilterHeader headerName="Teamwise" />
        <TeamDataTable />
      </div>
      <SingleThemeInfo />
    </div>
  );
};

export const SingleInfo = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => {
  return (
    <div>
      <Typography variant="body2">{name}</Typography>
      <Typography variant="h3">{value}</Typography>
    </div>
  );
};
