'use client'

import { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Home, Video, Phone, CalendarIcon } from 'lucide-react'

const therapyModes = [
  { id: 'in-person', icon: Home, label: 'In-person', address: '3rd Floor, A2, 35, Block A2, Delhi' },
  { id: 'video', icon: Video, label: 'Video' },
  { id: 'call', icon: Phone, label: 'Call' }
]

const timeSlots = {
  morning: [
    { time: '8:00 - 8:45 AM', available: true },
    { time: '9:00 - 9:45 AM', available: true },
    { time: '11:00 - 11:45 AM', available: true },
    { time: '11:00 - 11:45 AM', available: true },
  ],
  afternoon: [
    { time: '12:00 - 12:45 PM', available: true },
    { time: '2:00 - 2:45 PM', available: true },
    { time: '3:00 - 3:45 PM', available: true },
    { time: '4:00 - 4:45 PM', available: true },
  ],
  evening: [
    { time: '5:00 - 5:45 PM', available: true },
    { time: '6:00 - 6:45 PM', available: true },
    { time: '7:00 - 7:45 PM', available: true },
    { time: '8:00 - 8:45 PM', available: true },
  ]
}

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedMode, setSelectedMode] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [selectedView, setSelectedView] = useState('slots')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isEmployerReferred: false,
    companyId: ''
  })

  const handleModeSelect = (mode) => {
    setSelectedMode(mode)
  }

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setStep(4) // Move to confirmation
  }

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-center">Select therapy mode</h2>
            <div className="grid gap-4">
              {therapyModes.map((mode) => {
                const Icon = mode.icon
                return (
                  <button
                    key={mode.id}
                    onClick={() => handleModeSelect(mode)}
                    className={`flex items-center p-4 rounded-lg border ${
                      selectedMode?.id === mode.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedMode?.id === mode.id ? 'bg-blue-500 text-white' : 'bg-gray-100'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="ml-4 text-left">
                      <div className="font-semibold">{mode.label}</div>
                      {mode.address && (
                        <div className="text-sm text-gray-500">{mode.address}</div>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
            <Button 
              className="w-full" 
              onClick={() => setStep(2)}
              disabled={!selectedMode}
            >
              Proceed
            </Button>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Select slots</h2>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className={selectedView === 'slots' ? 'bg-black text-white' : ''}
                  onClick={() => setSelectedView('slots')}
                >
                  Slots
                </Button>
                <Button 
                  variant="outline"
                  className={selectedView === 'date' ? 'bg-black text-white' : ''}
                  onClick={() => setSelectedView('date')}
                >
                  Date
                </Button>
              </div>
            </div>
            
            {selectedView === 'slots' && (
              <>
                {Object.entries(timeSlots).map(([period, slots]) => (
                  <div key={period} className="space-y-4">
                    <h3 className="capitalize text-gray-500">{period}</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {slots.map((slot, index) => (
                        <button
                          key={index}
                          onClick={() => handleSlotSelect(slot)}
                          className={`p-3 rounded-full border text-sm ${
                            selectedSlot === slot ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {selectedView === 'date' && (
              <div className="bg-white rounded-lg shadow-sm border p-4">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md"
                />
              </div>
            )}

            <Button 
              className="w-full" 
              onClick={() => setStep(3)}
              disabled={!selectedDate || !selectedSlot}
            >
              Proceed
            </Button>
          </div>
        )

      case 3:
        return (
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="bg-blue-500 text-white p-4 rounded-lg flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-sm">Change date</span>
                </div>
                <div className="font-semibold">
                  {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : 'Date not selected'}
                </div>
                <div className="text-sm">{selectedSlot ? selectedSlot.time : 'Time not selected'}</div>
              </div>
              <div className="text-2xl font-semibold">₹2,400/-</div>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <div className="flex">
                  <select className="px-3 border rounded-l-md">
                    <option value="+91">🇮🇳 +91</option>
                  </select>
                  <Input
                    id="phone"
                    type="tel"
                    className="rounded-l-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <p className="text-sm text-gray-500 italic">You will receive booking details on WhatsApp</p>
              </div>

              <div className="space-y-4">
                <Label>Have you been referred by your employer?</Label>
                <RadioGroup
                  value={formData.isEmployerReferred}
                  onValueChange={(value) => setFormData({...formData, isEmployerReferred: value})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={true} id="referred" />
                    <Label htmlFor="referred">Yes, I am employed under a partnering company</Label>
                  </div>
                </RadioGroup>
                {formData.isEmployerReferred && (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Partnering Company Name or Company ID"
                      value={formData.companyId}
                      onChange={(e) => setFormData({...formData, companyId: e.target.value})}
                    />
                    <Button type="button" variant="outline">Verify</Button>
                  </div>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full">
              Book session
            </Button>
          </form>
        )

      case 4:
        return (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Booking Confirmed!</h2>
            <p className="text-gray-600">
              Congratulations! Your therapy session has been successfully scheduled. Were
              looking forward to helping you on your journey to better mental health.
            </p>
            
            <div className="space-y-4 text-left">
              <h3 className="font-semibold italic">Instructions</h3>
              <ul className="space-y-2">
                <li>
                  A confirmation email with all the session details has been sent to{' '}
                  <span className="text-blue-500">{formData.email}</span>
                </li>
                <li>
                  If this is your first session, consider jotting down any key points or questions
                  you want to discuss.
                </li>
              </ul>
            </div>

            <Button 
              className="w-full"
              onClick={() => window.location.href = '/'}
            >
              Back to home
            </Button>
          </div>
        )
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      {renderStep()}
    </div>
  )
}

