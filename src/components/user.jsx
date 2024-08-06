
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useNavigate } from "react-router-dom"
import React from "react"
import queryString from 'query-string';

export default function User() {
    const navigate = useNavigate();
    const [dob, setDob] = React.useState(new Date())
    const [name, setName] = React.useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        const query = queryString.stringify({ name, dob });
        navigate(`/appointment?${query}`);
      };


    return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center mb-8">
         

          <h1 className="text-2xl font-bold">⚕️CarePulse</h1>
        </header>
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Welcome to Dr. Sarah Jones' Pediatric Clinic 🤗</h2>
            <p className="text-muted-foreground">Please add your personal information</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" placeholder="Full Name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone-number">Phone Number</Label>
                  <Input id="phone-number" placeholder="Phone Number" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Email" type="email" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                <Input type="date" id="appointment-date" className="w-full" value={dob} onChange={(e) => {setDob(e.target.value)}} />

                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger id="gender" aria-label="Gender">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input id="occupation" placeholder="Occupation" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergency-contact">Emergency Contact</Label>
                  <Input id="emergency-contact" placeholder="Emergency Contact" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Medical Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="primary-physician">Primary Physician</Label>
                  <Input id="primary-physician" placeholder="Primary Physician" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="insurance-policy">Insurance Policy Number</Label>
                  <Input id="insurance-policy" placeholder="Insurance Policy Number" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="allergies">Allergies</Label>
                  <Input id="allergies" placeholder="Allergies" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="current-medications">Current Medications</Label>
                  <Input id="current-medications" placeholder="Current Medications" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="family-history">Family Medical History</Label>
                  <Input id="family-history" placeholder="Family Medical History" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="past-surgeries">Past Surgeries</Label>
                  <Input id="past-surgeries" placeholder="Past Surgeries" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Identification and Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="id-type">ID Card/Passport</Label>
                <Select>
                  <SelectTrigger id="id-type" aria-label="ID Type">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="id-card">ID Card</SelectItem>
                    <SelectItem value="passport">Passport</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="id-number">ID Number</Label>
                <Input id="id-number" placeholder="ID Number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="document">Government Official Identification Document</Label>
                <Input id="document" placeholder="Upload Document" type="file" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Consent and Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="consent-health" />
                <Label htmlFor="consent-health">I consent to receive treatment from my health practitioners.</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="consent-data" />
                <Label htmlFor="consent-data">
                  I consent to the use and disclosure of my health information for treatment purposes.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="consent-privacy" />
                <Label htmlFor="consent-privacy">
                  I acknowledge that I have reviewed and agree to the privacy policy.
                </Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600" onClick={handleSubmit}>Submit and Continue</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  )
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


// function LogInIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
//       <polyline points="10 17 15 12 10 7" />
//       <line x1="15" x2="3" y1="12" y2="12" />
//     </svg>
//   )
// }


