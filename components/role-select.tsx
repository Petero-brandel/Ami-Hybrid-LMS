import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RoleSelect = ({
  role,
  setRole,
  roles,
}: {
  role: string;
  setRole: (value: string) => void;
  roles: string[];
}) => {
  return (
    <Select value={role} onValueChange={setRole}>
      <SelectTrigger>
        <SelectValue placeholder="Select your role" />
      </SelectTrigger>
      <SelectContent>
        {roles.map((role) => (
          <SelectItem key={role} value={role}>
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default RoleSelect;
