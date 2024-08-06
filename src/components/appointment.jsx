
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import React from 'react';
import { CalendarDaysIcon, LogIn } from "lucide-react"
import { useNavigate } from "react-router-dom"
import queryString from "query-string"
const AppointmentForm = () => {
    const [date, setDate] = React.useState(new Date())
    const navigate = useNavigate();
    const { name, dob } = queryString.parse(location.search);

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = queryString.stringify({ name, dob, date });
        navigate(`/success?${query}`);
      };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Hi👋🏻</h2>
         <form>
          <div className="mb-4">
            <label htmlFor="doctor" className="block text-sm mb-2">Doctor</label>
            <Select id="doctor" className="w-full">
              <option>Dr. Sarah Jones</option>
            </Select>
          </div>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-sm mb-2">Reason for appointment</label>
            <Input type="text" id="reason" placeholder="ex: Annual monthly check-up" className="w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="comments" className="block text-sm mb-2">Additional comments/notes</label>
            <Input type="text" id="comments" placeholder="ex: Prefer afternoon appointments, if possible" className="w-full" />
          </div>
          <div className="mb-4">
                  <Label htmlFor="dob" className="mr-5">Appointment Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="pl-3 text-left font-normal text-muted-foreground">
                        {date.toDateString()}
                        <CalendarDaysIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />                    </PopoverContent>
                  </Popover>
                </div>
                
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" onClick={handleSubmit}>
            Submit and continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
