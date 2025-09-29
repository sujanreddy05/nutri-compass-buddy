import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Upload, Zap, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import scanIcon from "@/assets/scan-icon.png";
import { NutritionCard } from "@/components/ui/nutrition-card";
import { analyzeFoodImage, getNutritionRecommendations } from "@/utils/foodRecognition";
import { useToast } from "@/hooks/use-toast";

const Scan = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        analyzeFood();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeFood = async () => {
    if (!selectedImage) return;
    
    setAnalyzing(true);
    
    try {
      const result = await analyzeFoodImage(selectedImage);
      const primaryFood = result.foods[0];
      
      setResults({
        foodName: primaryFood.name,
        confidence: primaryFood.confidence,
        nutrition: result.totalNutrition,
        recommendations: getNutritionRecommendations(result.totalNutrition)
      });
      
      toast({
        title: "Analysis Complete! 🎉",
        description: `Recognized ${primaryFood.name} with ${primaryFood.confidence}% confidence`,
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Please try again with a clearer image",
        variant: "destructive"
      });
    }
    
    setAnalyzing(false);
  };

  const triggerCamera = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-24 h-24 mx-auto mb-4">
            <img src={scanIcon} alt="Scan food" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Scan Your Food</h1>
          <p className="text-muted-foreground">
            Take a photo to get instant nutrition analysis
          </p>
        </div>

        {/* Camera Controls */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="space-y-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageUpload}
                className="hidden"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Button onClick={triggerCamera} size="lg" className="h-14">
                  <Camera className="mr-2 h-5 w-5" />
                  Take Photo
                </Button>
                <Button onClick={triggerCamera} variant="outline" size="lg" className="h-14">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Image
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4" />
                <span>Works best with clear, well-lit food images</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Image Preview */}
        {selectedImage && (
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {analyzing ? (
                  <>
                    <Zap className="h-5 w-5 text-primary animate-pulse" />
                    Analyzing...
                  </>
                ) : (
                  "Scan Results"
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src={selectedImage} 
                  alt="Scanned food" 
                  className="w-full h-full object-cover"
                />
              </div>

              {analyzing && (
                <div className="text-center py-4">
                  <div className="animate-pulse space-y-2">
                    <div className="text-primary font-medium">🔍 Identifying food items...</div>
                    <div className="text-sm text-muted-foreground">This usually takes a few seconds</div>
                  </div>
                </div>
              )}

              {results && !analyzing && (
                <div className="space-y-4">
                  {/* Food Identification */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{results.foodName}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">
                          {results.confidence}% confident
                        </Badge>
                        <span className="text-sm text-muted-foreground">AI Analysis</span>
                      </div>
                    </div>
                    <span className="text-3xl">🍛</span>
                  </div>

                  {/* Nutrition Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <NutritionCard
                      title="Calories"
                      value={results.nutrition.calories}
                      unit=""
                      icon="🔥"
                      variant="primary"
                    />
                    <NutritionCard
                      title="Protein"
                      value={results.nutrition.protein}
                      unit="g"
                      icon="💪"
                      variant="success"
                    />
                    <NutritionCard
                      title="Carbs"
                      value={results.nutrition.carbs}
                      unit="g"
                      icon="🌾"
                    />
                    <NutritionCard
                      title="Fiber"
                      value={results.nutrition.fiber}
                      unit="g"
                      icon="🥬"
                      variant="success"
                    />
                  </div>

                  {/* Recommendations */}
                  <Card className="bg-accent/50 border-accent/60">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">💡 Smart Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2">
                        {results.recommendations.map((rec: string, index: number) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-success mt-0.5">•</span>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="flex gap-3">
                    <Button className="flex-1" onClick={() => {
                      toast({
                        title: "Meal Saved! 🍽️",
                        description: "Added to your daily nutrition log",
                      });
                    }}>
                      Save to Meal Log
                    </Button>
                    <Button variant="outline" onClick={() => {
                      setSelectedImage(null);
                      setResults(null);
                    }}>
                      Scan Another
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Tips */}
        {!selectedImage && (
          <Card className="shadow-card bg-gradient-fresh border-accent/30">
            <CardHeader>
              <CardTitle className="text-sm">📸 Scanning Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm space-y-1">
                <p>• Ensure good lighting for better accuracy</p>
                <p>• Center the food in the frame</p>
                <p>• Include all items in the meal</p>
                <p>• Works with Indian dishes, fruits, snacks</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Scan;