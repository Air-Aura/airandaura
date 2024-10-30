import { useState } from "react"
import { Button } from "./components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Home, Building2, Globe, Mail, Upload, Camera } from "lucide-react"
import { Input } from "./components/ui/input"
import { Checkbox } from "./components/ui/checkbox"
import { Label } from "./components/ui/label"

export default function App() {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const projectImages = Array.from({ length: 12 }, (_, i) => `/imgs/${String(i + 1).padStart(3, '0')}.jpg`);
  const randomizedImages = [...projectImages]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email && agreed) {
      console.log("Submitted:", email)
      setEmail("")
      setAgreed(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F4EEE6]">
      <header className="border-b-0">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <img 
              src="/cropped-logo512.png" 
              alt="Air + Aura Interiors" 
              className="h-10 w-auto"
            />
            <h1 className="text-xl font-serif text-[#3a4a6b]">
              Air + Aura Interiors
            </h1>
          </div>
          <Button 
            variant="outline" 
            className="font-serif text-[#3a4a6b] border-[#3a4a6b] hover:bg-[#3a4a6b] hover:text-[#f5f2eb]"
          >
            Book Consultation
          </Button>
        </div>
      </header>
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <section className="grid gap-16 md:gap-24">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3a4a6b]">
                Modern Vintage Design for Homes and Businesses
              </h1>
              <p className="mt-6 text-lg text-[#5a6a8b]">
                Curating spaces that blend timeless elegance with modern comfort, both online and offline
              </p>
              <div className="mt-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="font-serif text-[#3a4a6b] border-[#3a4a6b] hover:bg-[#3a4a6b] hover:text-[#f5f2eb]">
                      <Mail className="w-4 h-4 mr-2" />
                      Subscribe to Our Newsletter
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <form onSubmit={handleSubmit} className="grid gap-6 py-4">
                      <div className="font-serif text-lg text-[#3a4a6b]">Sign up for our newsletter</div>
                      <p className="text-muted-foreground">
                        Get the latest on deals, new products, interior design news, and exclusive features!
                      </p>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={agreed}
                          onCheckedChange={(checked: boolean) => setAgreed(checked)}
                          required
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to receive marketing communications and agree to the{" "}
                          <a href="/terms" className="underline text-[#3a4a6b]">
                            terms and conditions
                          </a>
                        </Label>
                      </div>
                      <Button type="submit" className="w-full">
                        Subscribe
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {randomizedImages.map((imgPath, i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <div className="aspect-square relative group cursor-pointer">
                      <img
                        src={imgPath}
                        alt={`Portfolio project ${i + 1}`}
                        className="object-cover rounded-lg w-full h-full"
                      />
                      <div className="absolute inset-0 bg-[#3a4a6b]/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <p className="text-[#F4EEE6] font-serif text-lg">View Project</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
                    <img
                      src={imgPath}
                      alt={`Portfolio project ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>
          <section className="mt-24 max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-[#3a4a6b] text-center mb-8">Our Services</h2>
            <Tabs defaultValue="home" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="home" className="font-serif text-[#3a4a6b]">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </TabsTrigger>
                <TabsTrigger value="business" className="font-serif text-[#3a4a6b]">
                  <Building2 className="w-4 h-4 mr-2" />
                  Business
                </TabsTrigger>
                <TabsTrigger value="online" className="font-serif text-[#3a4a6b]">
                  <Globe className="w-4 h-4 mr-2" />
                  Online
                </TabsTrigger>
                <TabsTrigger value="photography" className="font-serif text-[#3a4a6b]">
                  <Camera className="w-4 h-4 mr-2" />
                  Photography
                </TabsTrigger>
              </TabsList>
              <div className="h-[300px] overflow-y-auto">
                <TabsContent value="home" className="text-[#5a6a8b]">
                  <p>Transform your living spaces into a harmonious blend of modern comfort and vintage charm. Our home design services include:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Full room redesigns</li>
                    <li>Color palette consultation</li>
                    <li>Furniture selection and placement</li>
                    <li>Custom artwork curation</li>
                    <li>Lighting design</li>
                  </ul>
                </TabsContent>
                <TabsContent value="business" className="text-[#5a6a8b]">
                  <p>Elevate your business environment to inspire creativity and productivity. Our business design services cover:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Office space planning and design</li>
                    <li>Retail store layouts</li>
                    <li>Hotel and hospitality design</li>
                    <li>Restaurant and café ambiance creation</li>
                    <li>Corporate branding integration</li>
                  </ul>
                </TabsContent>
                <TabsContent value="online" className="text-[#5a6a8b]">
                  <p>Extend your brand's aesthetic to the digital realm. Our online presence consulting includes:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Website styling and visual coherence</li>
                    <li>Social media feed curation</li>
                    <li>Brand identity development</li>
                    <li>Digital content styling</li>
                    <li>E-commerce visual merchandising</li>
                  </ul>
                </TabsContent>
                <TabsContent value="photography" className="text-[#5a6a8b]">
                  <p>Capture the essence of your space with our professional photography services. Each shoot is personally styled and directed by Amanda:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Interior photography</li>
                    <li>Professional headshots</li>
                    <li>Lifestyle photography</li>
                    <li>Product photography</li>
                    <li>Brand story photography</li>
                  </ul>
                </TabsContent>
              </div>
            </Tabs>
          </section>
          <section className="mt-24 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <img
                  src="/imgs/amanda.jpg"
                  alt="Amanda Eckels"
                  className="w-full h-auto rounded-lg object-cover aspect-[2/3]"
                />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="font-serif text-2xl md:text-3xl text-[#3a4a6b]">Amanda Eckels</h2>
                <p className="mt-4 text-[#5a6a8b]">
                  With a passion for blending vintage charm with modern aesthetics, I create spaces that tell your unique story.
                  Whether it's a cozy home, a dynamic business environment, or an engaging online presence, each project is
                  thoughtfully curated to balance style, function, and personality.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-8 font-serif text-[#3a4a6b] border-[#3a4a6b] hover:bg-[#3a4a6b] hover:text-[#f5f2eb]"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </section>
          <section className="mt-24 max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-[#3a4a6b] text-center mb-8">Virtual Design Preview</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <img
                    src="/imgs/app-logo.jpg"
                    alt="Virtual Design Preview"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="font-serif text-xl text-[#3a4a6b] mb-4">Transform Your Space</h3>
                  <p className="text-[#5a6a8b] mb-6">
                    Experience your space reimagined in Amanda's signature style. Simply upload a photo, and receive a personalized design preview. It's a quick way to visualize your space's potential before starting your design journey.
                  </p>
                  <Button className="w-full md:w-auto font-serif bg-[#3a4a6b] hover:bg-[#2a3a5b] text-white">
                    <Upload className="w-4 h-4 mr-2" />
                    Try Design Preview
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="border-t border-[#3a4a6b]/20">
        <div className="container px-4 py-8 text-center text-sm text-[#5a6a8b]">
          © {new Date().getFullYear()} Air + Aura Interiors. All rights reserved.
        </div>
      </footer>
    </div>
  )
}