import { CalendarIcon, CircleCheckIcon, HeartPulseIcon } from "lucide-react";
import queryString from "query-string";

export default function Confirmation() {
  const { name, dob, date } = queryString.parse(location.search);
  const d1 = new Date(dob);
  const d2 = new Date(date);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="ml-2 text-xl font-bold">⚕️CarePulse</span>
          </div>
          <div className="flex items-center justify-center mb-4">
            <CircleCheckIcon className="w-12 h-12 text-green-300" />
          </div>
          <h1 className="text-2xl font-bold mb-2">
            Your <span className="text-green-300">appointment request</span> has been successfully submitted!
          </h1>
          <p className="text-gray-400">We will contact you soon to confirm.</p>
        </div>
        <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Appointment details:</h2>
            <div className="flex items-center">
              {/* <CalendarIcon className="w-5 h-5 text-gray-400 mr-2" /> */}
              <span className="text-gray-400">{d2.toDateString()} 📅 - 5:00 PM 🕔</span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Patient Information:</h3>
            <p>Full name: {name}</p>
            <p>Date Of Birth: {d1.toDateString()}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Location Information:</h3>
            <p>Clinic: Dr. Sarah Jones' Pediatric Clinic</p>
            <p>Address: 3308 Bathurst Street, York Mills , Suite 567</p>
            <p>Contact: (647) 552-6039</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Additional Instructions:</h3>
            <ul className="list-disc list-inside">
              <li>Please arrive 15 minutes early.</li>
              <li>Bring your ID and insurance card.</li>
              <li>No eating or drinking 12 hours before the appointment.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Appointment Confirmation:</h3>
            <p>Confirmation Number: 123456789</p>
            <p>QR Code: [QR Code Here]</p>
          </div>
        </div>
      </div>
    )
  }
  
  