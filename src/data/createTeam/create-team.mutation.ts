import { useMutation } from "react-query";
import { CreateTeamService, CreateTeamType } from "./createTeam.service";


export const useCreateTeamMutation = () => {
  return useMutation((input: CreateTeamType) => CreateTeamService.createTeam(input));
};

