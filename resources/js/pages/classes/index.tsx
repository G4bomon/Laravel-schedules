import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage, router } from '@inertiajs/react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Classes',
        href: '/classses',
    },
];

interface Class {
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

export default function Classes() {
    const { classes } = usePage<{ classes: Class[] }>().props;

    const destroyClass = (id: number) => {
        if (confirm('Are you sure you want to delete this class?')) {
            router.delete(route('classes.destroy', id));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Classes" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div>
                    <Link href={route('classes.create')}>
                        <Button>Create Class</Button>
                    </Link>
                </div>
                
                {classes.map((classItem) => (
                    <div key={classItem.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start">
                            <div> 
                                <p>{classItem.name}</p>
                                
                                {/* Monday */}
                                {classItem.mondaystart && (
                                <p>Mon: {classItem.mondaystart} - {classItem.mondayend}</p>
                                )}
                                
                                {/* Tuesday */}
                                {classItem.tuesdaystart && (
                                <p>Tue: {classItem.tuesdaystart} - {classItem.tuesdayend}</p>
                                )}
                                
                                {/* Wednesday */}
                                {classItem.wednesdaystart && (
                                <p>Wed: {classItem.wednesdaystart} - {classItem.wednesdayend}</p>
                                )}
                                
                                {/* Thursday */}
                                {classItem.thursdaystart && (
                                <p>Thu: {classItem.thursdaystart} - {classItem.thursdayend}</p>
                                )}
                                
                                {/* Friday */}
                                {classItem.fridaystart && (
                                <p>Fri: {classItem.fridaystart} - {classItem.fridayend}</p>
                                )}
                                
                                {/* Saturday */}
                                {classItem.saturdaystart && (
                                <p>Sat: {classItem.saturdaystart} - {classItem.saturdayend}</p>
                                )}
                            </div>

                            <div className="flex gap-3">
                                <Badge className="text-lg">{classItem.id}</Badge>
                                <Link href={route('classes.edit', classItem.id)}>
                                    <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
                                        Edit
                                    </Button>
                                </Link>
                                <Button 
                                    variant="destructive"
                                    onClick={() => destroyClass(classItem.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}