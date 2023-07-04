import React, { useState } from 'react';
import RadioButton, { Role } from './RadioButton';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface RadioProps {
  id: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  setValue: UseFormSetValue<FieldValues>;
}


  const RoleSelector: React.FC<RadioProps> = ({ id, register, setValue, required }) => {
  const [selectedRole, setSelectedRole] = useState<Role>('User');

  const handleRoleChange = (role: Role) => {
    setValue(id, role);
    setSelectedRole(role);
  };

  return (
    <div className='grid  gap-4'>
        <h2 className='px-2  font-semibold text-lg'>Role</h2>
      <div className='flex '>
      <RadioButton
          role='User'
          selectedRole={selectedRole}
          onRoleChange={handleRoleChange}
        />
        <RadioButton
          role='Admin'
          selectedRole={selectedRole}
          onRoleChange={handleRoleChange}
        />
        <RadioButton
          role='Student'
          selectedRole={selectedRole}
          onRoleChange={handleRoleChange}
        />
      </div>
    </div>
  );
};

export default RoleSelector;