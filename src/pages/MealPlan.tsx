import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChefHat, Clock, Users } from "lucide-react";

const MealPlan = () => {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  const mealPlans = {
    breakfast: [
      { name: "Poha with Peanuts", calories: 280, time: "20 min", emoji: "🥘" },
      { name: "Idli Sambhar", calories: 320, time: "15 min", emoji: "🍚" },
      { name: "Paratha & Yogurt", calories: 350, time: "25 min", emoji: "🫓" },
      { name: "Upma with Vegetables", calories: 260, time: "20 min", emoji: "🥗" },
      { name: "Dosa with Chutney", calories: 290, time: "30 min", emoji: "🥞" },
      { name: "Oats with Fruits", calories: 240, time: "10 min", emoji: "🥣" },
      { name: "Chapati & Sabzi", calories: 300, time: "25 min", emoji: "🥬" },
    ],
    lunch: [
      { name: "Dal Rice with Ghee", calories: 420, time: "30 min", emoji: "🍛" },
      { name: "Rajma Chawal", calories: 450, time: "45 min", emoji: "🫘" },
      { name: "Chole Bhature", calories: 520, time: "40 min", emoji: "🫓" },
      { name: "Sambar Rice", calories: 380, time: "35 min", emoji: "🍚" },
      { name: "Paneer Curry Rice", calories: 480, time: "40 min", emoji: "🧀" },
      { name: "Khichdi with Vegetables", calories: 340, time: "25 min", emoji: "🥘" },
      { name: "Biryani (Veg)", calories: 460, time: "50 min", emoji: "🍚" },
    ],
    dinner: [
      { name: "Roti with Dal", calories: 320, time: "25 min", emoji: "🫓" },
      { name: "Quinoa Pulao", calories: 280, time: "30 min", emoji: "🌾" },
      { name: "Palak Paneer Roti", calories: 360, time: "35 min", emoji: "🥬" },
      { name: "Moong Dal Khichdi", calories: 260, time: "20 min", emoji: "🥘" },
      { name: "Vegetable Curry", calories: 240, time: "30 min", emoji: "🥗" },
      { name: "Stuffed Paratha", calories: 380, time: "40 min", emoji: "🫓" },
      { name: "South Indian Thali", calories: 420, time: "45 min", emoji: "🍽️" },
    ]
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Weekly Meal Plan</h1>
          <p className="text-muted-foreground">
            Personalized nutrition for healthy living
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-12">
            <Calendar className="mr-2 h-4 w-4" />
            This Week
          </Button>
          <Button variant="outline" className="h-12">
            <ChefHat className="mr-2 h-4 w-4" />
            Generate Plan
          </Button>
        </div>

        {/* Weekly Overview */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              This Week's Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {weekDays.map((day, index) => (
                <div key={day} className={`text-center p-2 rounded-lg ${
                  index === 2 ? 'bg-primary text-primary-foreground' : 'bg-muted/50'
                }`}>
                  <div className="text-xs font-medium">{day}</div>
                  <div className="text-xs mt-1">{15 + index}</div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">Today's Target:</div>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-primary/10 rounded-lg">
                  <div className="text-lg font-bold text-primary">1,850</div>
                  <div className="text-xs text-muted-foreground">Calories</div>
                </div>
                <div className="text-center p-3 bg-success/10 rounded-lg">
                  <div className="text-lg font-bold text-success">75g</div>
                  <div className="text-xs text-muted-foreground">Protein</div>
                </div>
                <div className="text-center p-3 bg-warning/10 rounded-lg">
                  <div className="text-lg font-bold text-warning">25g</div>
                  <div className="text-xs text-muted-foreground">Fiber</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Today's Meals */}
        <div className="space-y-4">
          {Object.entries(mealPlans).map(([mealType, meals], mealIndex) => (
            <Card key={mealType} className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <span className="capitalize">{mealType}</span>
                  <Badge variant="secondary">
                    {mealType === 'breakfast' ? '8:00 AM' : 
                     mealType === 'lunch' ? '1:00 PM' : '7:30 PM'}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 bg-gradient-fresh rounded-lg border border-accent/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{meals[mealIndex].emoji}</span>
                        <div>
                          <h4 className="font-medium">{meals[mealIndex].name}</h4>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {meals[mealIndex].time}
                            </span>
                            <span>{meals[mealIndex].calories} cal</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        View Recipe
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs">
                      <Badge variant="secondary">Vegetarian</Badge>
                      <Badge variant="secondary">High Protein</Badge>
                      <Badge variant="secondary">Balanced</Badge>
                    </div>
                  </div>

                  <div className="text-sm">
                    <p className="font-medium mb-2">Alternative options:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {meals.slice(mealIndex + 1, mealIndex + 3).map((meal, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-2">
                            <span>{meal.emoji}</span>
                            <span className="text-sm">{meal.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{meal.calories} cal</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nutrition Tips */}
        <Card className="shadow-card bg-accent/30 border-accent/50">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Users className="h-4 w-4" />
              Family Nutrition Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm space-y-1">
              <p>🥛 Include calcium-rich foods for growing children</p>
              <p>🥗 Add colorful vegetables for antioxidants</p>
              <p>🌾 Choose whole grains for sustained energy</p>
              <p>💧 Encourage water intake throughout the day</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MealPlan;