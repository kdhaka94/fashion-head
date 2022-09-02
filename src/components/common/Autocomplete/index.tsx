import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Autocomplete as MuiAutocomplete, Checkbox } from "@mui/material";
import { IPropsTextField, TextField } from "../TextField";

type IProps = {
  options?: Array<any>;
  handleChange?:any;
  type?: "search" | "normal";
} & IPropsTextField;

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const Autocomplete = ({ options = [],handleChange, ...rest }: IProps) => {
  return (
    <MuiAutocomplete
      multiple
      disableCloseOnSelect
      limitTags={1}
      options={options}
      getOptionLabel={(option: any) => option?.title}
      renderOption={(props, option: any, params) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={params.selected}
          />
          {option.title}
        </li>
      )}
      renderInput={(params) => {
        return <TextField {...params} {...rest} />;
      }}
      openOnFocus
      onChange={handleChange}
      {...(rest as any)}
    />
  );
};
