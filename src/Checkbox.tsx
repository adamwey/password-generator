interface CheckboxProps {
  id: string;
  label: string;
  example: string;
  checked: boolean;
  onChange: () => void;
}

export function Checkbox({ id, label, example, checked, onChange }: CheckboxProps) {
  return (
    <div className='flex items-center space-x-2'>
      <input
        checked={checked}
        onChange={onChange}
        type='checkbox'
        id={id}
        className='w-5 h-5 border-none rounded bg-primary-200 focus:checked:bg-primary-400 focus:ring-0 focus:ring-offset-0 checked:bg-primary-400 hover:checked:bg-primary-400'
      />
      <label htmlFor={id} className='select-none'>
        Include {label} <span className='text-sm font-normal'>({example})</span>
      </label>
    </div>
  );
}
