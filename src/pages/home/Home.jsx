import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


const templates = [
  { 
    title: "Home Page", 
    description: "Beautiful landing page design with modern layout", 
    route: "/home-page",
    color: "from-blue-500 to-indigo-600"
  },
  { 
    title: "Navbar", 
    description: "Responsive navigation bar layouts with dropdown support", 
    route: "/navbar",
    color: "from-purple-500 to-pink-500"
  },
  { 
    title: "Footer", 
    description: "Customizable footer templates with social links", 
    route: "/footer",
    color: "from-amber-500 to-orange-500"
  },
  { 
    title: "About Page", 
    description: "Simple about us page design with team sections", 
    route: "/about-page",
    color: "from-emerald-500 to-teal-600"
  },
  { 
    title: "Contact Page", 
    description: "Contact form with map support and validation", 
    route: "/contact-page",
    color: "from-rose-500 to-red-500"
  },
];

const Home = () => {
  const navigate = useNavigate();
 
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTemplates = templates.filter(template =>
    template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTemplateClick = (route) => {
    navigate(route);
   
  };

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
                <div className="min-w-0">
                  <h1 className="text-lg font-semibold text-gray-800 truncate">
                    Template Gallery
                  </h1>
                  <p className="text-xs text-gray-600 truncate">
                    Discover beautiful, responsive templates
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-2 rounded border border-gray-200 mt-2">
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-medium text-gray-700">
                  Search Templates
                </label>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <Input
                  placeholder="Search templates..."
                  className="pl-8 h-9 text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <p className="text-[10px] text-muted-foreground mt-1 truncate">
                Type to search for templates
              </p>
            </div>
          </div>

        <motion.div 
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="grid grid-cols-1 gap-3 mb-16"
>
  {filteredTemplates.map((template, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      onClick={() => handleTemplateClick(template.route)}
      className="group cursor-pointer bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue-200"
    >
      {/* Header with gradient and index badge */}
      <div className={`relative h-20 bg-gradient-to-r ${template.color} flex items-center justify-between p-3`}>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
        
        {/* Index badge */}
        <div className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm">
          <span className="text-xs font-medium text-white">{index + 1}</span>
        </div>
        
        {/* Arrow icon */}
        <svg className="relative z-10 w-4 h-4 text-white/80 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="p-3">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
            {template.title}
          </h2>
        </div>
        
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
          {template.description}
        </p>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            Use template
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            Free
          </span>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>

          {filteredTemplates.length === 0 && (
            <div className="flex flex-col items-center justify-center h-48 border border-dashed rounded-lg bg-gray-50 p-4 mt-4">
              <div className="bg-gray-100 p-2 rounded-full mb-2">
                <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 mb-1 text-center">No templates found</p>
              <p className="text-xs text-gray-400 text-center px-4">
                Try adjusting your search terms
              </p>
            </div>
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <Card className="shadow-sm">
            <CardHeader className="bg-blue-50 rounded-t-lg">
              <div className="flex items-center">
                <div>
                  <CardTitle className="text-xl">Template Gallery</CardTitle>
                  <CardDescription>
                    Discover beautiful, responsive templates to kickstart your next web project
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <motion.header 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                  Website Template{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    Gallery
                  </span>
                </h1>
                
                {/* Search Bar */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative max-w-xl mx-auto mt-8"
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <Input
                    type="text"
                    placeholder="Search templates..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </motion.div>
              </motion.header>

              {/* Templates Grid */}
              {filteredTemplates.length > 0 ? (
              <motion.div 
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
>
  {filteredTemplates.map((template, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      onClick={() => handleTemplateClick(template.route)}
      className="group cursor-pointer bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue-200"
    >
      {/* Header with gradient and index badge */}
      <div className={`relative h-24 bg-gradient-to-r ${template.color} flex items-center justify-between p-4`}>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
        
        {/* Index badge */}
        <div className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm">
          <span className="text-xs font-medium text-white">{index + 1}</span>
        </div>
        
        {/* Arrow icon */}
        <svg className="relative z-10 w-5 h-5 text-white/80 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {template.title}
          </h2>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          {template.description}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            Use template
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            Free
          </span>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-12"
                >
                  <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-700">No templates found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search terms</p>
                </motion.div>
              )}

              {/* Footer */}
              <motion.footer 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm"
              >
                <p>© {new Date().getFullYear()} Website Template Module. All templates are under a proprietary license powered by Agsolution.</p>
              </motion.footer>
            </CardContent>
          </Card>
        </div>
      </div>
  
  );
};

export default Home;