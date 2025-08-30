import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HomePage01 from "@/components/homepage-module/HomePage_01";
import HomePage02 from "@/components/homepage-module/HomePage_02";
import HomePage04 from "@/components/homepage-module/HomePage_04";
import HomePage03 from "@/components/homepage-module/HomePage_03";
import HomePage05 from "@/components/homepage-module/HomePage_05";
const HomePage = () => {
    const navigate = useNavigate();
  
    
    
  
    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };
  
   
  
  return (
     <div className="w-full p-4 md:p-6">
        {/* Mobile View */}
        <div className="block lg:hidden">
          <div className="sticky top-0 z-10 bg-blue-50 border-b border-gray-200 p-3 mb-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/')}
                  className="h-6 w-6 p-0 mr-2"
                >
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Button>
                <div className="min-w-0">
                  <h1 className="text-lg font-semibold text-gray-800 truncate">
                    Homepage Templates
                  </h1>
                  <p className="text-xs text-gray-600 truncate">
                    Choose from responsive homepage designs
                  </p>
                </div>
              </div>
            </div>

          
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4 mb-16"
          >
          <HomePage01/>
          <HomePage02/>
          </motion.div>

          
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <Card className="shadow-sm">
            <CardHeader className="bg-blue-50 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Homepage Templates</CardTitle>
                  <CardDescription>
                    Choose from responsive homepage designs for your website
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/')}
                  className="h-8"
                >
                  Back to Home
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-6">
             

          <div className="flex flex-col gap-4">
            <div className="border rounded-md">
              <p className="border-b">Homepage1</p>
                 <HomePage01/>
            </div>
           <div>
            <div className="border rounded-md">
              <p className="border-b">Homepage2</p>
                 <HomePage02/>
            </div>
           </div>
           <div>
            <div className="border rounded-md">
              <p className="border-b">Homepage3</p>
                 <HomePage03/>
            </div>
           </div>
           <div>
            <div className="border rounded-md">
              <p className="border-b">Homepage4</p>
                 <HomePage04/>
            </div>
           </div>
           <div>
            <div className="border rounded-md">
              <p className="border-b">Homepage5</p>
                 <HomePage05/>
            </div>
           </div>
          
          </div>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}

export default HomePage