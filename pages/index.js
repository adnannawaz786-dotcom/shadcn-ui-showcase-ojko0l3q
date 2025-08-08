import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Badge } from '../components/ui/badge';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, Star, Heart, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Shadcn/UI Showcase
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore beautiful, accessible, and customizable components built with Radix UI and Tailwind CSS
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
          {/* Button Section */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Button Components</h2>
              <p className="text-gray-600 dark:text-gray-400">Versatile button variants for every use case</p>
            </div>

            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Primary', variant: undefined, size: undefined },
                    { label: 'Secondary', variant: 'secondary' },
                    { label: 'Destructive', variant: 'destructive' },
                    { label: 'Outline', variant: 'outline' },
                    { label: 'Ghost', variant: 'ghost' },
                    { label: 'Link', variant: 'link' },
                    { label: 'Small', size: 'sm' },
                    { label: 'Large', size: 'lg' },
                  ].map((btn, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="font-medium text-sm text-gray-600 dark:text-gray-400">{btn.label}</h4>
                      <Button
                        variant={btn.variant}
                        size={btn.size}
                        className="w-full"
                      >
                        {btn.label}
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Button className="gap-2">
                    <Star className="w-4 h-4" />
                    With Icon
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Heart className="w-4 h-4" />
                    Like
                  </Button>
                  <Button variant="secondary" className="gap-2">
                    <Zap className="w-4 h-4" />
                    Action
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Alert Section */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Alert Components</h2>
              <p className="text-gray-600 dark:text-gray-400">Contextual feedback messages for user actions</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800 dark:text-green-400">Success!</AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-300">
                  Your changes have been saved successfully.
                </AlertDescription>
              </Alert>

              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-800 dark:text-blue-400">Information</AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-300">
                  This is some helpful information for you.
                </AlertDescription>
              </Alert>

              <Alert className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-800 dark:text-yellow-400">Warning</AlertTitle>
                <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                  Please review your settings before continuing.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong. Please try again.</AlertDescription>
              </Alert>
            </div>
          </motion.section>

          {/* Badge Section */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Badge Components</h2>
              <p className="text-gray-600 dark:text-gray-400">Small status descriptors for UI elements</p>
            </div>

            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Default Variants</h4>
                    <div className="flex flex-wrap gap-3">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Status Examples</h4>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300">
                        Active
                      </Badge>
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300">
                        Pending
                      </Badge>
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-300">
                        Inactive
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300">
                        New
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Card Section */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Card Components</h2>
              <p className="text-gray-600 dark:text-gray-400">Flexible containers for grouping related content</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Product Card */}
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Product Card</CardTitle>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">New</Badge>
                  </div>
                  <CardDescription>
                    A beautiful product showcase card with all the essential information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Price</span>
                      <span className="font-semibold text-lg">$99.99</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Rating</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Add to Cart</Button>
                </CardFooter>
              </Card>

              {/* Stats Card */}
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl">Statistics</CardTitle>
                  <CardDescription>Key metrics and performance indicators.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Total Users</span>
                      <Badge variant="secondary">1,234</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Active Sessions</span>
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">456</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</span>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">12.3%</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>

              {/* Quick Actions */}
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>Common tasks and shortcuts for productivity.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Star className="w-4 h-4" />
                      Favorite
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Heart className="w-4 h-4" />
                      Like
                    </Button>
                    <Button variant="secondary" size="sm" className="gap-2">
                      <Zap className="w-4 h-4" />
                      Boost
                    </Button>
                    <Button variant="destructive" size="sm" className="gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
