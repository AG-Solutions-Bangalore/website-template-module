import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar01 from '@/components/navbar-module/Navbar_01';
import Navbar02 from '@/components/navbar-module/Navbar_02';
import Navbar03 from '@/components/navbar-module/Navbar_03';
import Navbar04 from '@/components/navbar-module/Navbar_04';
import Navbar05 from '@/components/navbar-module/Navbar_05';
import Navbar06 from '@/components/navbar-module/Navbar_06';

const navbarTemplates = [
  { 
    id: 1,
    title: "Navbar 01", 
    description: "Clean and minimal navigation bar with dropdown support", 
    component: <Navbar01 />,
    type: "fixed",
    color: "from-blue-500 to-indigo-600"
  },
  { 
    id: 2,
    title: "Navbar 02", 
    description: "Modern navbar with search functionality and user menu", 
    component: <Navbar02 />,
    type: "sticky",
    color: "from-purple-500 to-pink-500"
  },
  { 
    id: 3,
    title: "Navbar 03", 
    description: "Sidebar navigation with collapsible menu items", 
    component: <Navbar03 />,
    type: "floating",
    color: "from-amber-500 to-orange-500"
  },
  { 
    id: 4,
    title: "Navbar 04", 
    description: "Transparent navbar that becomes solid on scroll", 
    component: <Navbar04 />,
    type: "fixed",
    color: "from-emerald-500 to-teal-600"
  },
  { 
    id: 5,
    title: "Navbar 05", 
    description: "Centered navigation with logo and call-to-action buttons", 
    component: <Navbar05 />,
    type: "sticky",
    color: "from-rose-500 to-red-500"
  },
  { 
    id: 6,
    title: "Navbar 06", 
    description: "Mobile-first navbar with hamburger menu and dropdown", 
    component: <Navbar06 />,
    type: "floating",
    color: "from-violet-500 to-purple-600"
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filteredNavbars = navbarTemplates.filter(navbar =>
    (navbar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    navbar.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedType === "all" || navbar.type === selectedType)
  );

  

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
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
                    Navbar Templates
                  </h1>
                  <p className="text-xs text-gray-600 truncate">
                    Choose from responsive navigation designs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-2 rounded border border-gray-200 mt-2">
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-medium text-gray-700">
                  Search Navbars
                </label>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <Input
                  placeholder="Search navbars..."
                  className="pl-8 h-9 text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex space-x-2 mt-2 overflow-x-auto pb-1">
                <Button
                  variant={selectedType === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType("all")}
                  className="text-xs whitespace-nowrap"
                >
                  All
                </Button>
                <Button
                  variant={selectedType === "fixed" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType("fixed")}
                  className="text-xs whitespace-nowrap"
                >
                  Fixed
                </Button>
                <Button
                  variant={selectedType === "sticky" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType("sticky")}
                  className="text-xs whitespace-nowrap"
                >
                  Sticky
                </Button>
                <Button
                  variant={selectedType === "floating" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType("floating")}
                  className="text-xs whitespace-nowrap"
                >
                  Floating
                </Button>
              </div>
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4 mb-16"
          >
            {filteredNavbars.map((navbar, index) => (
              <motion.div
                key={navbar.id}
                variants={itemVariants}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                {/* Navbar Preview */}
                <div className="relative border-b border-gray-200">
                  <div className="h-40 overflow-hidden bg-gray-50 flex items-center justify-center">
                    {navbar.component}
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      {navbar.type}
                    </Badge>
                  </div>
                </div>
                
              
              </motion.div>
            ))}
          </motion.div>

          {filteredNavbars.length === 0 && (
            <div className="flex flex-col items-center justify-center h-48 border border-dashed rounded-lg bg-gray-50 p-4 mt-4">
              <div className="bg-gray-100 p-2 rounded-full mb-2">
                <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 mb-1 text-center">No navbars found</p>
              <p className="text-xs text-gray-400 text-center px-4">
                Try adjusting your search or filter terms
              </p>
            </div>
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <Card className="shadow-sm">
            <CardHeader className="bg-blue-50 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Navbar Templates</CardTitle>
                  <CardDescription>
                    Choose from responsive navigation designs for your website
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
              {/* Search and Filter Section */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <Input
                    type="text"
                    placeholder="Search navbars..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant={selectedType === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType("all")}
                  >
                    All
                  </Button>
                  <Button
                    variant={selectedType === "fixed" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType("fixed")}
                  >
                    Fixed
                  </Button>
                  <Button
                    variant={selectedType === "sticky" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType("sticky")}
                  >
                    Sticky
                  </Button>
                  <Button
                    variant={selectedType === "floating" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType("floating")}
                  >
                    Floating
                  </Button>
                </div>
              </div>

              {/* Navbars Grid */}
              {filteredNavbars.length > 0 ? (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 gap-6"
                >
                  {filteredNavbars.map((navbar) => (
                    <motion.div
                      key={navbar.id}
                      variants={itemVariants}
                      className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                    >
                      <div className="flex">
                        {/* Navbar Preview */}
                        <div className="w-full border-r border-gray-200">
                          <div className="h-40 overflow-hidden bg-gray-50 flex items-center justify-center  border-2">
                            {navbar.component}
                          </div>
                        </div>
                        
                     
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-700">No navbars found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search or filter terms</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
   
  );
};

export default Navbar;