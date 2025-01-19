import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import ProfileAvatar from "./ProfileAvatar";

const ProfileBox = ({collapsible}) => {
  console.log(collapsible)
  const frameworks = [
   
    {
      value: "logout",
      label: "Logout",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={collapsible ? 'w-[200px] justify-between' : 'w-[50px] justify-between'}
        >
          {/* <ProfileAvatar show={false}></ProfileAvatar> */}
          <ProfileAvatar show={collapsible} />
          {
            collapsible && <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          }
          
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[500px] p-5 border " side="right">
        <Command>
          <CommandList>
            
            <CommandGroup>
                <CommandItem>
                <ProfileAvatar show={true}></ProfileAvatar>
                </CommandItem>
              {frameworks.map((framework) => (
                <CommandItem
                className='cursor-pointer'
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileBox;
