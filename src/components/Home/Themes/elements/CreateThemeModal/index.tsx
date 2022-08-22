import {
  Button,
  Image,
  Input,
  InputLabel,
  Typography,
} from "@components/common";
import { Autocomplete } from "@components/common/Autocomplete";
import { Modal, ModalActions, ModalBody } from "@components/common/Modal";
import { useBrandsQuery } from "@data/brands/use-brands.query";
import { useCategoryQuery } from "@data/category/use-category.query";
import { usePlansQuery } from "@data/plans/use-plans.query";
import { AddRounded } from "@mui/icons-material";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useHeadStore } from "@utils/zustand/store";
import React from "react";
import classes from "./styles.module.css";
import { dataTemplate, INITIAL_STATE, StateNameType } from "./types";
import Editor from "@components/common/TextEditor";

export const CreateThemeModal = () => {
  const { closeModal, currentModals, openModal } = useHeadStore();
  const isOpen = currentModals.includes("createTheme");
  const [state, setState] = React.useState(INITIAL_STATE);

  const { data: brandsData } = useBrandsQuery();
  const { data: plansData } = usePlansQuery();
  const { data: categoryData } = useCategoryQuery();



  const [teams, setTeams] = React.useState([]);
  const [plans, setPlans] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [brands, setBrands] = React.useState([]);

  const getBrands = React.useCallback(() => {
    console.log(brandsData);
    return brandsData?.data?.brands.map((val)=>{
      return {
        ...val,
        title:val.BrandName,
        key:val._id
      }
    })
  }, [brandsData]);

  React.useEffect(() => {
    setBrands(getBrands()!!);
  }, [getBrands]);

  const getPlans = React.useCallback(() => {
    console.log(plansData);
    return plansData?.data?.plans.map((val)=>{
      return {
        ...val,
        title:val.planName,
        key:val._id
      }
    })
  }, [plansData]);

  React.useEffect(() => {
    setPlans(getPlans()!!);
  }, [getPlans]);

  const getCategory = React.useCallback(() => {
    console.log(categoryData);
    return categoryData?.data?.category.map((val)=>{
      return {
        ...val,
        title:val.catType,
        key:val._id
      }
    })
  }, [brandsData]);

  React.useEffect(() => {
    setCategory(getCategory()!!);
  }, [getCategory]);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    
    setState({
      ...state,
      [e.currentTarget.name as StateNameType]: {
        ...state[e.currentTarget.name as StateNameType],
        value: e.currentTarget.value,
        error: "",
      },
    });
  };

  const handleChangeAutoComplete = (name: any, newValue: any
) => {
  console.log(newValue)
    setState({
      ...state,
      [name]: {
        ...state[name],
        value: newValue,
        error: "",
      },
    });
  };

  const setError = (field: StateNameType, error: string) => {
    setState({
      ...state,
      [field]: {
        ...state[field],
        error,
      },
    });
  };

  const submitData = ()=>{
    console.log(state);
  }

  return (
    <>
      <Button
        size="small"
        onClick={() => openModal("createTheme")}
        disabled={isOpen}
      >
        <AddRounded /> Create A Theme
      </Button>
      <Modal open={isOpen} onClose={() => closeModal("createTheme")}>
        <ModalBody>
          <div className={classes.container}>
            <Typography variant="h1">Create Theme</Typography>
            <div className={classes.flexContainer}>
              <div className={classes.imageContainer}>
                <div>
                  <Image
                    src="/assets/images/camera-icon.webp"
                    width={62}
                    height={50}
                  />
                  <Typography variant="body2" align="center" color="#a3a3a3">
                    Add Theme
                    <br />
                    Photo
                  </Typography>
                </div>
                <Button variant="outlined" size="small" component="label">
                  <input hidden accept="image/*" multiple type="file" />
                  <Image
                    src="/assets/images/upload-icon.webp"
                    width={18}
                    height={18}
                  />
                  &nbsp; Upload a Photo
                </Button>
              </div>
              <div className={classes.inputsContainer}>
                <Input
                  placeholder="Enter theme name"
                  label="Theme Name"
                  name="theme"
                  onChange={handleChange}
                  value={state.theme.value}
                  error={!!state.theme.error}
                  errorText={state.theme.error}
                  fullWidth
                />
                <div>
                  <InputLabel title="Gender" />
                  <RadioGroup 
                    defaultValue="male" 
                    name="gender" 
                    value={state.gender.value}
                    onChange={handleChange} 
                    row
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </div>
                <Autocomplete
                  placeholder="Select Team"
                  label="Team Name"
                  name="team"
                  // onChange={handleChange}
                  // value={state.team.value}
                  // error={!!state.team.error}
                  // errorText={state.team.error}
                  fullWidth
                  options={dataTemplate}
                />
              </div>
            </div>
            <div className={`${classes.flexContainer} ${classes["gap-20"]}`}>
              <Autocomplete
                placeholder="Search Brand"
                label="Brand(Optional)"
                name="brands"
                handleChange={(event:any,newValue:any)=>{handleChangeAutoComplete('brands',newValue)}}
                value={state.brands.value}
                error={!!state.brands.error}
                errorText={state.brands.error}

                fullWidth
                options={brands}
              />
              <Autocomplete
                placeholder="Plan"
                label="Choose Plan"
                name="plans"
                handleChange={(event:any,newValue:any)=>{handleChangeAutoComplete('plans',newValue)}}
                value={state.plans.value}
                error={!!state.plans.error}
                errorText={state.plans.error}
                fullWidth
                options={plans}
              />
            </div>
            <Autocomplete
              placeholder="Category(Optional)"
              label="Search Category"
              name="category"
              handleChange={(event:any,newValue:any)=>{handleChangeAutoComplete('category',newValue)}}
              value={state.category.value}
              error={!!state.category.error}
              errorText={state.category.error}
              fullWidth
              options={category}
            />
            <div>
              Rules
              <Editor value={state.rules.value} handleChange={(event)=>{handleChangeAutoComplete('rules',event)}} />
            </div>
          </div>

        </ModalBody>
        <ModalActions>
          <div className={classes.submitContainer}>
            <Button onClick={submitData} >Submit</Button>
          </div>
        </ModalActions>
      </Modal>
    </>
  );
};
