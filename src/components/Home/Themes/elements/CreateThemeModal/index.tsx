import {
  Button,
  Image,
  Input,
  InputLabel,
  Typography,
} from "@components/common";
import { useParams } from "react-router-dom";
import { Autocomplete } from "@components/common/Autocomplete";
import { Modal, ModalActions, ModalBody } from "@components/common/Modal";
import { useBrandsQuery } from "@data/brands/use-brands.query";
import { useGetOneThemeQuery } from "@data/getOneTheme/use-getOneTheme.query";
import { useCategoryQuery } from "@data/category/use-category.query";
import { usePlansQuery } from "@data/plans/use-plans.query";
import { AddRounded } from "@mui/icons-material";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useHeadStore } from "@utils/zustand/store";
import React, { useEffect } from "react";
import classes from "./styles.module.css";
import { dataTemplate, INITIAL_STATE, StateNameType, TeamsDefaultData } from "./types";
import Editor from "@components/common/TextEditor";
import { useUploadImageMutation } from "@data/uploadImage/upload-image.mutation";
import { useCreateThemeMutation } from "@data/createTheme/create-theme.mutation";
import { useUpdateThemeMutation } from "@data/updateTheme/update-theme.mutation";
import { validateEmail } from "@utils/helpers";
import { getOneTheme } from "@data/getOneTheme/use-getOneTheme.query";
import { Themes } from "@data/getOneTheme/types";
export const CreateThemeModal = ({isEdit=false}) => {

  const { closeModal, currentModals, openModal ,ThemeInfo} = useHeadStore();
  const isOpen = currentModals.includes("createTheme") || currentModals.includes("updateTheme");
  
  const [state, setState] = React.useState(INITIAL_STATE);
  const [state1, setState1] = React.useState({ id:{
    value:""
  },
  theme: {
    value: "",
    error: "",
  },
  team: {
    value: "",
    error: "",
  },
  brands: {
    value: [],
    error: "",
  },
  plans: {
    value: "",
    error: "",
  },
  category: {
    value: [],
    error: "",
  },
  gender: {
    value: "",
    error: "",
  },
  image:{
    value:[],
    error:""
  },
  mediaPreview:{
    value:"",
    error:""
  },
  rules: {
    value: "",
    error: "",
  }});

  const { data: brandsData } = useBrandsQuery();
  const { data: plansData } = usePlansQuery();
  const { data: categoryData } = useCategoryQuery();
  // const {data:ThemeData}=useGetOneThemeQuery({themeId:"630f3a29917f6b1769d9ffb4"});
  const { mutate: uploadImage,isLoading:uploadImageLoading } = useUploadImageMutation();
  const { mutate: createTheme,isLoading } = useCreateThemeMutation();
  const { mutate: updateTheme,isLoading:updateThemeLoading } = useUpdateThemeMutation();
  


  const [teams, setTeams] = React.useState([{
    title:""
  }]);
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

  const getOneTheme = React.useCallback(() => {
    console.log(ThemeInfo,"dgdrg")
    const arr={...state};
   
    console.log(state,state1);
    const response=  ThemeInfo?.data[0] ; 
    arr.id.value=response?._id;
      arr.theme.value=response?.title
      arr.theme.error=""

     arr.team.value=response?.team //doubt in api call it is string but in state it is string[]
     arr.team.error=""

     arr.brands.value=response?.brands
     arr.brands.error=""

     arr.category.value=response?.categories
     arr.category.error=""

     arr.gender.value=response?.gender
     arr.gender.error=""

     arr.image.value=response?.images
     arr.image.error=""

     arr.mediaPreview.value=response?.images[0]      //doubt
     arr.mediaPreview.error=""

     arr.rules.value=response?.rules
     arr.rules.error=""

     arr.plans.value=response?.plan   //same dount
     arr.plans.error=""
    
    console.log(arr);
return arr;
    
   
  },[ThemeInfo]);
  useEffect(() => {
   if(isEdit) 
    setState(getOneTheme()!!);
    console.log("again",isEdit)
  }, []);
  React.useEffect(() => {
    setBrands(getBrands());
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
    setPlans(getPlans());
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
  }, [categoryData]);

  React.useEffect(() => {
    setCategory(getCategory());
  }, [getCategory]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("handlechange")
   isEdit? setState({
      ...state,
      [e?.currentTarget?.name as StateNameType]: {
        ...state[e?.currentTarget?.name as StateNameType],
        value: e?.currentTarget?.value,
        error: "",
      },
    }):
    setState1({
      ...state1,
      [e?.currentTarget?.name as StateNameType]: {
        ...state1[e?.currentTarget?.name as StateNameType],
        value: e?.currentTarget?.value,
        error: "",
      },
    })
    ;
  };

  const handleChangeAutoComplete = (name: any, newValue: any
) => {
  
  console.log(newValue)
  isEdit?
    setState({
      ...state,
      [name]: {
        ...state[name],
        value: newValue,
        error: "",
      },
    })
    :
    setState1({
      ...state1,
      [name]: {
        ...state1[name],
        value: newValue,
        error: "",
      },
    });
  
  };

  const setError = (field: StateNameType, error: string) => {
    isEdit?
    setState({
      ...state,
      [field]: {
        ...state[field],
        error,
      },
    })
    :
    setState1({
      ...state1,
      [field]: {
        ...state1[field],
        error,
      },
    });
  };

  const submitData = ()=>{
    console.log(state);
    const getbrand=()=>{
      const arr=(isEdit?(state?.brands?.value):(state1?.brands?.value));
      console.log(arr);
      
      
      let brandsInfo=[];
        arr?.forEach((e)=>{
          if(typeof e==='string')
          brandsInfo.push(e);
          else
            brandsInfo?.push(e?.BrandName);
        })
        return brandsInfo;
    };
   
    const getcategory=()=>{
      const arr1=(isEdit?(state?.category?.value):(state1?.category?.value)) ;
      console.log(arr1);
      
      
    let categoryInfo=[];
      arr1?.forEach((e)=>{
        if(typeof e==='string')
        categoryInfo.push(e);
        else
          categoryInfo.push(e?.title);
      })
        return categoryInfo;
    };
   const getTeam=()=>{
    const arr3=(isEdit?(state?.team?.value):(state1?.team?.value));
    if(typeof arr3==='string')
    return arr3;
    return arr3['title'];
   }
   const getPlan=()=>{
    const arr4=(isEdit?(state?.plans?.value):(state1?.plans?.value));
    if(typeof arr4==='string')
    return arr4;
    return arr4['planName'];
   }
  console.log(getbrand(),getcategory(),state.plans.value)
    
    let data ={
   
      id:(isEdit?(state?.id?.value):(state1?.id?.value)),
      title: (isEdit?(state?.theme?.value):(state1?.theme?.value)), 
      images: (isEdit?(state?.image?.value):(state1?.image?.value)),
      categories: getcategory(), 
      brands: getbrand(),
      gender: (isEdit?(state?.gender?.value):(state1?.gender?.value)),
      team: getTeam(),  //doubt
      plan: getPlan(),  //doubt
      rules: (isEdit?(state?.rules?.value):(state1?.rules?.value)),
      minPrice: 2200,
      maxPrice: 5000
    };
    console.log(data);
    isEdit?
    updateTheme(
      data,
      {
        onSuccess: (data) => {
          console.log({ data });
        },
        onError: (err: any) => {

        },
      }
    )
    :
    createTheme(
      data,
      {
        onSuccess: (data) => {
          console.log({ data });
        },
        onError: (err: any) => {

        },
      }
    )
  };

  const fileChange = (event:any) =>{  
    console.log(event.target.files[0])
    handleChangeAutoComplete('mediaPreview',URL.createObjectURL(event.target.files[0]));
    uploadImage(
      event.target.files[0],
      {
        onSuccess: async(data) => {
          console.log(data.data)
          // handleChangeAutoComplete('mediaPreview',URL.createObjectURL(event.target.files[0]));
          handleChangeAutoComplete('image',data.data);
          handleChangeAutoComplete('mediaPreview',URL.createObjectURL(event.target.files[0]));
        },
        onError: (err: any) => {

        },
        
      }
    )

  };


useEffect(() => {
console.log(state)
}, [state]);



  
  return (
    <>
    {/* {!isEdit && <Button
      size="small"
      onClick={() => {openModal("createTheme");}}
      disabled={isOpen}
    >
      <AddRounded /> Create A Theme
    </Button>} */}
      <Modal open={isOpen} onClose={() =>{isEdit?closeModal("updateTheme"):closeModal("createTheme");}}>
        <ModalBody>
          <div className={classes.container}>
            {!isEdit?<Typography variant="h1">Create Theme</Typography>:
            <Typography variant="h1">Update Theme</Typography>}
            <div className={classes.flexContainer}>
              <div className={classes.imageContainer}>
                {
                  (isEdit?(state?.mediaPreview?.value):(state1?.mediaPreview?.value)) ?
                  <>
                    <Image
                      src={(isEdit?(state?.mediaPreview?.value):(state1?.mediaPreview?.value))}
                      width={200}
                      height={200}
                    />
                  </> :<>
                  <div>
                    <Image
                      src={"/assets/images/camera-icon.webp"}
                      width={62}
                      height={50}
                    />
                    <Typography variant="body2" align="center" color="#a3a3a3">
                      Add Theme
                      <br />
                      Photo
                    </Typography>
                  </div>
                  </>
                }
                <Button variant="outlined" size="small" disabled={uploadImageLoading} component="label">
                  <input hidden accept="image/*" type="file" onChange={e => {
                       fileChange(e)
                    }} />
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
                  value={isEdit?(state?.theme?.value):(state1?.theme?.value)}
                  error={!!(isEdit?(state?.theme?.error):(state1?.theme?.error))}
                  errorText={(isEdit?(state?.theme?.error):(state1?.theme?.error))}
                  fullWidth
                />
                <div>
                  <InputLabel title="Gender" />
                  <RadioGroup 
                    defaultValue="female" 
                    name="gender" 
                    value={(isEdit?(state?.gender?.value):(state1?.gender?.value))}
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
                  isRadio={true}
                  handleChange={(event:any,newValue:any)=>{handleChangeAutoComplete('team',newValue)}}
                  value={(isEdit?(state?.team?.value):(state1?.team?.value))}
                  error={!!(isEdit?(state?.team?.error):(state1?.team?.error))}
                  errorText={(isEdit?(state?.team?.error):(state1?.team?.error))}
                  fullWidth
                  options={TeamsDefaultData}
                />
                  {/* <InputLabel title="Team Name" />
                  <RadioGroup 
                    defaultValue="A" 
                    name="team" 
                    value={state?.team?.value}
                    onChange={handleChange} 
                    row
                  >
                    <FormControlLabel
                      value="A"
                      control={<Radio />}
                      label="A"
                    />
                    <FormControlLabel
                      value="B"
                      control={<Radio />}
                      label="B"
                    />
                    <FormControlLabel
                      value="C"
                      control={<Radio />}
                      label="C"
                    />
                  </RadioGroup> */}
              </div>
            </div>
            <div className={`${classes.flexContainer} ${classes["gap-20"]}`}>
              <Autocomplete
                placeholder="Search Brand"
                label="Brand(Optional)"
                name="brands"
                isRadio={false}
                handleChange={(event:any,newValue:any)=>{handleChangeAutoComplete('brands',newValue)}}
                value={(isEdit?(state?.brands?.value):(state1?.brands?.value))}
                error={!!(isEdit?(state?.brands?.error):(state1?.brands?.error))}
                errorText={(isEdit?(state?.brands?.error):(state1?.brands?.error))}

                fullWidth
                options={brands}
              />
              <Autocomplete
                placeholder="Plan"
                label="Choose Plan"
                name="plans"
                isRadio={true}
                handleChange={(event:any,newValue:any)=>{handleChangeAutoComplete('plans',newValue)}}
                value={(isEdit?(state?.plans?.value):(state1?.plans?.value))}
                error={!!(isEdit?(state?.plans?.error):(state1?.plans?.error))}
                errorText={(isEdit?(state?.plans?.error):(state1?.plans?.error))}
                fullWidth
                options={plans}
              />
               {/* <InputLabel title="Choose Plan" />
                  <RadioGroup 
                    defaultValue="plan1" 
                    name="plans" 
                    value={state?.plans?.value}
                    onChange={handleChange} 
                    row
                  >
                    <FormControlLabel
                      value="plan1"
                      control={<Radio />}
                      label="plan1"
                    />
                    <FormControlLabel
                      value="plan2"
                      control={<Radio />}
                      label="plan2"
                    />
                    <FormControlLabel
                      value="plan3"
                      control={<Radio />}
                      label="plan3"
                    />
                  </RadioGroup> */}
            </div>
            <Autocomplete
              placeholder="Category(Optional)"
              label="Search Category"
              isRadio={false}
              name="category"
              handleChange={(event:any,newValue:any)=>{handleChangeAutoComplete('category',newValue)}}
              value={(isEdit?(state?.category?.value):(state1?.category?.value))}
              error={!!(isEdit?(state?.category?.error):(state1?.category?.error))}
              errorText={(isEdit?(state?.category?.error):(state1?.category?.error))}
              fullWidth
              options={category}
            />
            <div>
              Rules
              <Editor value={(isEdit?(state?.rules?.value):(state1?.rules?.value))} handleChange={(event)=>{handleChangeAutoComplete('rules',event)}} />
            </div>
          </div>

        </ModalBody>
        <ModalActions>
          <div className={classes.submitContainer}>
            <Button onClick={submitData} disabled={isLoading || updateThemeLoading} >Submit</Button>
          </div>
        </ModalActions>
      </Modal>
    </>
  );
};
