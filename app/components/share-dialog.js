import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Facebook, Mail, Twitter, Phone, Share2 } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function ShareDialog() {
  const pageUrl = "https://therapist-profile.com/swetha-varma"
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="absolute top-2 right-2">
          <span className="sr-only">Share profile</span>
          <Share2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-4 py-4">
          <Button variant="outline" size="icon">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Input 
            value={pageUrl}
            readOnly
            className="flex-1"
          />
          <Button variant="secondary" className="shrink-0">
            Copy link
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

