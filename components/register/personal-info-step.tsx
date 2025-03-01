import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"

interface PersonalInfoStepProps {
  formData: {
    firstName: string
    middleName: string
    surname: string
    gender: string
    email: string
    phone: string
  }
  updateFormData: (data: Partial<PersonalInfoStepProps["formData"]>) => void
  onNext: () => void
  onBack: () => void
}

export function PersonalInfoStep({ formData, updateFormData, onNext, onBack }: PersonalInfoStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <Button variant="ghost" size="sm" className="mb-4" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-2xl font-semibold">Set up your account</h1>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">First name (as it is on your ID)</label>
          <Input
            placeholder="Enter your legal first name"
            value={formData.firstName}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Middle name (Optional)</label>
          <Input
            placeholder="Enter your legal middle name"
            value={formData.middleName}
            onChange={(e) => updateFormData({ middleName: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Surname (as it is on your ID)</label>
          <Input
            placeholder="Enter your legal surname"
            value={formData.surname}
            onChange={(e) => updateFormData({ surname: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Gender</label>
          <Select value={formData.gender} onValueChange={(value) => updateFormData({ gender: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email address</label>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Phone number</label>
          <div className="flex gap-2">
            <Select defaultValue="+234">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Code" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+234">+234</SelectItem>
                <SelectItem value="+233">+233</SelectItem>
                <SelectItem value="+254">+254</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) => updateFormData({ phone: e.target.value })}
              className="flex-1"
            />
          </div>
        </div>

        <Button
          className="w-full"
          onClick={onNext}
          disabled={!formData.firstName || !formData.surname || !formData.gender || !formData.email || !formData.phone}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

