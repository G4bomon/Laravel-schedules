import InputError from '@/components/input-error';
import { TimePickerWithStatus } from '@/components/timepicker';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import dayjs from 'dayjs';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Class',
        href: '/classes', 
    },
];

export default function ClassesCreate() {
    const { data, setData, errors, post } = useForm({
        name: "",
        mondaystart: "",
        mondayend: "",
        tuesdaystart: "",
        tuesdayend: "",
        wednesdaystart: "",
        wednesdayend: "",
        thursdaystart: "",
        thursdayend: "",
        fridaystart: "",
        fridayend: "",
        saturdaystart: "",
        saturdayend: ""
    });

    const handleTimeChange = (day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday', 
        type: 'start' | 'end', 
        time: dayjs.Dayjs | null) => {
        const fieldName = `${day}${type}` as keyof typeof data;
        const timeString = time ? time.format('HH:mm') : '';
        setData(fieldName, timeString);
        };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('classes.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Classes Create" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div>
                    <Link href={route('classes.index')}>
                        <Button variant="outline">Back</Button>
                    </Link>
                </div>

                <form onSubmit={submit}>            
                    <Card className="w-[450px] overflow-hidden">
                        <CardHeader>
                            <CardTitle>Create a class</CardTitle>
                            <CardDescription>Set the hour and the days the class is gonna be taken</CardDescription>
                        </CardHeader>
                        <CardContent className="max-h-[500px] overflow-y-auto p-4">
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input 
                                        id="name" 
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        autoComplete="name"
                                        placeholder="Class name"
                                        className="w-full"
                                    />
                                    <InputError message={errors.name} />
                                </div>
                                
                                {/* Monday */}
                                <div className="space-y-1">
                                    <Label className="text-sm">Monday</Label>
                                    <div className="flex gap-1">
                                        <TimePickerWithStatus 
                                            timePickerLabel="Start"
                                            onTimeChange={(time) => handleTimeChange('monday', 'start', time)}
                                            value={data.mondaystart ? dayjs(`2023-01-01T${data.mondaystart}`) : null}
                                            className="w-1/2"
                                        />
                                        <TimePickerWithStatus 
                                            timePickerLabel="End"
                                            onTimeChange={(time) => handleTimeChange('monday', 'end', time)}
                                            value={data.mondayend ? dayjs(`2023-01-01T${data.mondayend}`) : null}
                                            className="w-1/2"
                                        />
                                    </div>
                                </div>
                                
                                {/* Tuesday */}
                                <div className="space-y-1">
                                    <Label className="text-sm">Tuesday</Label>
                                    <div className="flex gap-2">
                                        <TimePickerWithStatus 
                                            timePickerLabel="Start"
                                            onTimeChange={(time) => handleTimeChange('tuesday', 'start', time)}
                                            value={data.tuesdaystart ? dayjs(`2023-01-01T${data.tuesdaystart}`) : null}
                                            className="w-1/2"
                                        />
                                        <TimePickerWithStatus 
                                            timePickerLabel="End"
                                            onTimeChange={(time) => handleTimeChange('tuesday', 'end', time)}
                                            value={data.tuesdayend ? dayjs(`2023-01-01T${data.tuesdayend}`) : null}
                                            className="w-1/2"
                                        />
                                    </div>
                                </div>
                                
                                {/* Wednesday */}
                                <div className="space-y-1">
                                    <Label className="text-sm">Wednesday</Label>
                                    <div className="flex gap-2">
                                        <TimePickerWithStatus 
                                            timePickerLabel="Start"
                                            onTimeChange={(time) => handleTimeChange('wednesday', 'start', time)}
                                            value={data.wednesdaystart ? dayjs(`2023-01-01T${data.wednesdaystart}`) : null}
                                            className="w-1/2"
                                        />
                                        <TimePickerWithStatus 
                                            timePickerLabel="End"
                                            onTimeChange={(time) => handleTimeChange('wednesday', 'end', time)}
                                            value={data.wednesdayend ? dayjs(`2023-01-01T${data.wednesdayend}`) : null}
                                            className="w-1/2"
                                        />
                                    </div>
                                </div>
                                
                                {/* Thursday */}
                                <div className="space-y-1">
                                    <Label className="text-sm">Thursday</Label>
                                    <div className="flex gap-2">
                                        <TimePickerWithStatus 
                                            timePickerLabel="Start"
                                            onTimeChange={(time) => handleTimeChange('thursday', 'start', time)}
                                            value={data.thursdaystart ? dayjs(`2023-01-01T${data.thursdaystart}`) : null}
                                            className="w-1/2"
                                        />
                                        <TimePickerWithStatus 
                                            timePickerLabel="End"
                                            onTimeChange={(time) => handleTimeChange('thursday', 'end', time)}
                                            value={data.thursdayend ? dayjs(`2023-01-01T${data.thursdayend}`) : null}
                                            className="w-1/2"
                                        />
                                    </div>
                                </div>
                                
                                {/* Friday */}
                                <div className="space-y-1">
                                    <Label className="text-sm">Friday</Label>
                                    <div className="flex gap-2">
                                        <TimePickerWithStatus 
                                            timePickerLabel="Start"
                                            onTimeChange={(time) => handleTimeChange('friday', 'start', time)}
                                            value={data.fridaystart ? dayjs(`2023-01-01T${data.fridaystart}`) : null}
                                            className="w-1/2"
                                        />
                                        <TimePickerWithStatus 
                                            timePickerLabel="End"
                                            onTimeChange={(time) => handleTimeChange('friday', 'end', time)}
                                            value={data.fridayend ? dayjs(`2023-01-01T${data.fridayend}`) : null}
                                            className="w-1/2"
                                        />
                                    </div>
                                </div>
                                
                                {/* Saturday */}
                                <div className="space-y-1">
                                    <Label className="text-sm">Saturday</Label>
                                    <div className="flex gap-2">
                                        <TimePickerWithStatus 
                                            timePickerLabel="Start"
                                            onTimeChange={(time) => handleTimeChange('saturday', 'start', time)}
                                            value={data.saturdaystart ? dayjs(`2023-01-01T${data.saturdaystart}`) : null}
                                            className="w-1/2"
                                        />
                                        <TimePickerWithStatus 
                                            timePickerLabel="End"
                                            onTimeChange={(time) => handleTimeChange('saturday', 'end', time)}
                                            value={data.saturdayend ? dayjs(`2023-01-01T${data.saturdayend}`) : null}
                                            className="w-1/2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t p-4">
                            <Button variant="outline" type="button">Cancel</Button>
                            <Button type="submit">Create</Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </AppLayout>
    );
}