import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useProvider } from "@/store/Provider";

const Profile = () => {
  const { user } = useProvider();

  const fallBack = user?.displayName?.split(" ");

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Avatar className="size-10">
          <AvatarImage src={user?.photoURL} />
          <AvatarFallback>
            {fallBack?.[0]?.[0] + fallBack?.[1]?.[0]}
          </AvatarFallback>
        </Avatar>
      </TooltipTrigger>
      <TooltipContent>
        <p>{user?.displayName}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default Profile;
