import Title from "../components/Title";
import UploadZone from "../components/UploadZone";
import React, { useState } from "react";

const Generate = () => {
  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [aspectRatio, setAspectRatio] = useState("9:16");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [modelImage, setModelImage] = useState<File | null>(null);
  const [userPrompt, setUserPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'product' | 'model') => {
    if(e.target.files && e.target.files[0]){
      if(type === 'product'){
        setProductImage(e.target.files[0]);
      } else {
        setModelImage(e.target.files[0]);
      }

    }
  }

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-28">
      <form className="max-w-4xl mx-auto mb-40" onSubmit={handleGenerate}>
        <Title
          heading="Create In-Context Image"
          description="Upload Your Model and product images to generate the stunning UGC, short-form videos and social media posts"
        />

        <div className="flex gap-20 max-sm:flex-col items-start justify-between">
          {/* left col */}
          <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
            <UploadZone label="Product Image" file={productImage} onClear={() => setProductImage(null)} onChange={(e) => handleFileChange(e, 'product')} />
            <UploadZone label="Model Image" file={modelImage} onClear={() => setModelImage(null)} onChange={(e) => handleFileChange(e,'model')} />
          </div>

          {/* right col */}
          <div className="w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm mb-4">Project Name</label>
              <input placeholder="Name Your Project" required className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            
            <div className="mb-4 text-gray-300">
              <label htmlFor="productName" className="block text-sm mb-4">Product Name</label>
              <input placeholder="Enter the name of the product" required className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all" type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />
            </div>

            <div className="mb-4 text-gray-300">
              <label htmlFor="productDescription" className="block text-sm mb-4">Product Description <span className="text-sm">(optional)</span></label>
              <textarea id="productDescription" rows={4} value={productDescription} onChange={(e) => setProductDescription(e.target.value) } placeholder="Enter the description of the product" className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none resize-none transition-all"></textarea>
            </div>

            <div className="mb-4 text-gray-300">
              <label htmlFor="block text-sm mb-4">Aspect Ratio</label>
              <div className="flex gap-3">
                
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Generate;
