import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function ThemePreview() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  return (
    <div className={`min-h-screen p-8 transition-colors duration-300 ${isDarkMode ? 'dark bg-background' : 'bg-background'}`}>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gustasi POS Theme Preview</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Light</span>
            <Switch 
              checked={isDarkMode} 
              onCheckedChange={setIsDarkMode}
              className="data-[state=checked]:bg-primary"
            />
            <span className="text-sm">Dark</span>
          </div>
        </div>
        
        {/* Color Palette */}
        <Card>
          <CardHeader>
            <CardTitle>Color Palette</CardTitle>
            <CardDescription>Primary colors used in the theme</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-full h-20 rounded-md mb-2 bg-[#C93A1A] dark:bg-[#E66022] border"></div>
                <span className="text-sm font-medium">Primary</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full h-20 rounded-md mb-2 bg-[#E66022] dark:bg-[#C93A1A] border"></div>
                <span className="text-sm font-medium">Accent</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full h-20 rounded-md mb-2 bg-[#FFF7F0] dark:bg-[#140F0A] border"></div>
                <span className="text-sm font-medium">Background</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full h-20 rounded-md mb-2 bg-white dark:bg-[#1E1914] border"></div>
                <span className="text-sm font-medium">Card</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Typography */}
        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>Font styles used throughout the application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold font-playfair mb-2">Playfair Display</h1>
              <p className="text-muted-foreground">Used for headings and important text</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold font-inter mb-2">Inter Regular</h2>
              <p className="text-muted-foreground">Used for body text and UI elements</p>
            </div>
          </CardContent>
        </Card>
        
        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Interactive elements</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </CardContent>
        </Card>
        
        {/* Form Elements */}
        <Card>
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
            <CardDescription>Input fields and controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
          </CardContent>
        </Card>
        
        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Recent transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$45.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$4.60</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>Total</span>
                  <span>$50.59</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Place Order</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Table #12</CardTitle>
                  <CardDescription>Occupied for 45m</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">In Progress</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>2x Margherita Pizza</span>
                  <span>$24.00</span>
                </div>
                <div className="flex justify-between">
                  <span>1x Sparkling Water</span>
                  <span>$3.50</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Menu Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="appetizers" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
                <TabsTrigger value="mains">Main Courses</TabsTrigger>
                <TabsTrigger value="desserts">Desserts</TabsTrigger>
              </TabsList>
              <div className="mt-4 p-4 border rounded-md">
                <TabsContent value="appetizers" className="space-y-2">
                  <div className="flex justify-between py-2">
                    <span>Bruschetta</span>
                    <span>$8.99</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Calamari</span>
                    <span>$12.99</span>
                  </div>
                </TabsContent>
                <TabsContent value="mains">
                  <div className="flex justify-between py-2">
                    <span>Margherita Pizza</span>
                    <span>$14.99</span>
                  </div>
                </TabsContent>
                <TabsContent value="desserts">
                  <div className="flex justify-between py-2">
                    <span>Tiramisu</span>
                    <span>$7.99</span>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
