import type { route as routeFn } from 'ziggy-js';
import { PageProps } from '@inertiajs/core';

declare global {
    const route: typeof routeFn;

    interface Classes {
        id: number;
        name: string;
        mondaystart: string | null;
        mondayend: string | null;
        tuesdaystart: string | null;
        tuesdayend: string | null;
        wednesdaystart: string | null;
        wednesdayend: string | null;
        thursdaystart: string | null;
        thursdayend: string | null;
        fridaystart: string | null;
        fridayend: string | null;
        saturdaystart: string | null;
        saturdayend: string | null;
      }

    interface ClassesEditPageProps extends PageProps {
        classes: Classes;
    }  
}
