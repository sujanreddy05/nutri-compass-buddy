import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NutritionCard } from "@/components/ui/nutrition-card";
import { Camera, TrendingUp, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-nutrition.jpg";

const Home = () => {
  const todaysNutrition = {
    calories: { value: 1450, target: 2000, icon: "🔥" },
    protein: { value: 65, target: 75, icon: "💪" },
    carbs: { value: 180, target: 250, icon: "🌾" },
    fiber: { value: 22, target: 25, icon: "🥬" },
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-warm overflow-hidden">
        <img 
          src={heroImage} 
          alt="Nutritious Indian foods" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        <div className="relative z-10 p-6 h-full flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            नमस्ते! Welcome to NutriScan
          </h1>
          <p className="text-white/90 text-lg mb-4">
            Your AI-powered nutrition companion
          </p>
          <Link to="/scan">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-warm">
              <Camera className="mr-2 h-5 w-5" />
              Scan Your Meal
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <NutritionCard
            title="Calories"
            value={todaysNutrition.calories.value}
            unit=""
            target={todaysNutrition.calories.target}
            icon={todaysNutrition.calories.icon}
            variant="primary"
          />
          <NutritionCard
            title="Protein"
            value={todaysNutrition.protein.value}
            unit="g"
            target={todaysNutrition.protein.target}
            icon={todaysNutrition.protein.icon}
            variant="success"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <NutritionCard
            title="Carbs"
            value={todaysNutrition.carbs.value}
            unit="g"
            target={todaysNutrition.carbs.target}
            icon={todaysNutrition.carbs.icon}
          />
          <NutritionCard
            title="Fiber"
            value={todaysNutrition.fiber.value}
            unit="g"
            target={todaysNutrition.fiber.target}
            icon={todaysNutrition.fiber.icon}
            variant="success"
          />
        </div>

        {/* Today's Insights */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Today's Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
              <Heart className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="font-medium text-success">Great protein intake!</p>
                <p className="text-sm text-muted-foreground">
                  You're close to your daily protein goal. Consider adding some paneer or dal for dinner.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg border border-warning/20">
              <Award className="h-5 w-5 text-warning mt-0.5" />
              <div>
                <p className="font-medium text-warning">Hydration reminder</p>
                <p className="text-sm text-muted-foreground">
                  Don't forget to drink water! Aim for 8-10 glasses throughout the day.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Meals */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Meals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Masoor Dal & Rice", time: "Lunch", calories: 420, emoji: "🍛" },
                { name: "Banana & Yogurt", time: "Snack", calories: 180, emoji: "🍌" },
                { name: "Chapati & Palak", time: "Breakfast", calories: 280, emoji: "🥬" },
              ].map((meal, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{meal.emoji}</span>
                    <div>
                      <p className="font-medium">{meal.name}</p>
                      <p className="text-sm text-muted-foreground">{meal.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{meal.calories}</p>
                    <p className="text-xs text-muted-foreground">calories</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;