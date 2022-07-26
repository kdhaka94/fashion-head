import { Button, Image, Typography } from "@components/common";
import { FilterHeader } from "@components/common/FilterHeader";
import { DeleteOutlineRounded, EditOutlined } from "@mui/icons-material";
import { SingleThemeInfo } from "../SingleThemeInfo";
import { TeamDataTable } from "../TeamDataTable";
import classes from "./styles.module.css";

export const SingleThemeProduct = ({
  productImg = "https://mui.com/static/images/avatar/1.jpg",
  category = "Short Dress",
  plan = "Silver",
  gender = "Male",
  brands = ["Zara", "Crocs", "Hide"],
  team = "A",
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.productInfoContainer}>
        <div className={classes.productContainer}>
          <Image width={154} height={154} src={productImg} />
          <div className={classes.productData}>
            <div>
              <SingleInfo name="Category" value={category} />
              <SingleInfo name="Plan" value={plan} />
            </div>
            <div>
              <SingleInfo name="Gender" value={gender} />
              <SingleInfo name="Brands" value={brands.join(", ")} />
            </div>
            <div>
              <SingleInfo name="Team" value={team} />
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
