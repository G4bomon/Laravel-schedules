
import { BreadcrumbItem } from "@/types";
import { TimePickerWithStatus } from "@/components/timepicker";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Testing env',
        href: '/test',
    },
];


export default function TestPage() {
    return (
      <div>
        {/* Basic usage with default props */}
        <TimePickerWithStatus />
        
        {/* Customized usage */}
        
      </div>
    );
  }