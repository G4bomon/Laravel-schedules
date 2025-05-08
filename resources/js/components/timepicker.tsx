import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
  import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
  import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
  import { TimeField } from '@mui/x-date-pickers/TimeField';
  import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from "dayjs";



  interface TimePickerWithStatusProps {
    timePickerLabel?: string;
    selectLabel?: string;
    selectDefaultValue?: string;
    selectOptions?: { value: string; label: string }[];
    className?: string;
    value?: dayjs.Dayjs | null;
    onTimeChange?: (time: dayjs.Dayjs | null) => void;
}

export function TimePickerWithStatus({
  timePickerLabel = "Time",
  className = "",
  value,
  onTimeChange
}: TimePickerWithStatusProps) {
  return (
      <div className={className}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                  <TimePicker 
                      label={timePickerLabel}
                      value={value}
                      onChange={onTimeChange}
                      className="bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      slotProps={{
                          textField: {
                              size: "small",
                              className: "w-10 [& input]:py-2 [& input]:text-sm",
                          },
                          inputAdornment: {
                              className: "text-indigo-600",
                          }
                      }}
                  />
              </DemoContainer>
          </LocalizationProvider>
      </div>
  );
}