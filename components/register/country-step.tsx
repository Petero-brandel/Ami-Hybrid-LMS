import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import Link from "next/link"

interface CountryStepProps {
  formData: { country: string }
  updateFormData: (data: { country: string }) => void
  onNext: () => void
}

export function CountryStep({ formData, updateFormData, onNext }: CountryStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
            1
          </div>
          <span>STEP 1</span>
        </div>
        <h1 className="mt-2 text-2xl font-semibold">Country of residence</h1>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">What country do you live in?</label>
          <Select value={formData.country} onValueChange={(value) => updateFormData({ country: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nigeria">Nigeria</SelectItem>
              <SelectItem value="ghana">Ghana</SelectItem>
              <SelectItem value="kenya">Kenya</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            The documents you can use for verification depend only on your selected country of residence. Please
            double-check your choice.
          </AlertDescription>
        </Alert>

        <Button className="w-full" onClick={onNext} disabled={!formData.country}>
          Continue
        </Button>

        <div className="text-center text-sm text-muted-foreground">
          Got an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

