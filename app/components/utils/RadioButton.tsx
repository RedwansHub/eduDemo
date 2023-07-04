import React from 'react';

export type Role = 'User' | 'Admin' | 'Student';

type Props = {
  role: Role;
  selectedRole: Role;
  onRoleChange: (role: Role) => void;
};

const RadioButton = ({ role, selectedRole, onRoleChange }: Props) => {
  const handleClick = () => {
    onRoleChange(role);
  };

  return (
    <div
      className={`flex gap-2  flex-wrap w-32 px-2 ${
        role === selectedRole ? '' : ''
      }`}
      onClick={handleClick}
    >
      <input
        type="radio"
        value={role}
        checked={role === selectedRole}
        readOnly
        className="custom-radio "
      />
      <label className="text-lg">{role}</label>
    </div>
  );
};

export default RadioButton;