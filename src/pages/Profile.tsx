import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Settings, Edit, Award, TrendingUp, Target, Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Profile = () => {
  const userStats = [
    { label: "Days Active", value: "45", icon: "📅" },
    { label: "Meals Logged", value: "127", icon: "🍽️" },
    { label: "Recipes Shared", value: "8", icon: "👨‍🍳" },
    { label: "Goals Met", value: "89%", icon: "🎯" },
  ];

  const nutritionGoals = [
    { nutrient: "Calories", current: 1850, target: 2000, unit: "", progress: 92.5 },
    { nutrient: "Protein", current: 68, target: 75, unit: "g", progress: 90.7 },
    { nutrient: "Fiber", current: 23, target: 25, unit: "g", progress: 92 },
    { nutrient: "Water", current: 6, target: 8, unit: "glasses", progress: 75 },
  ];

  const languages = [
    { code: "en", name: "English", native: "English" },
    { code: "hi", name: "Hindi", native: "हिंदी" },
    { code: "te", name: "Telugu", native: "తెలుగు" },
    { code: "ta", name: "Tamil", native: "தமிழ்" },
    { code: "bn", name: "Bengali", native: "বাংলা" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Profile Header */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                  PS
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-bold">Priya Sharma</h2>
                <p className="text-muted-foreground">Mumbai, Maharashtra</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary">Vegetarian</Badge>
                  <Badge variant="secondary">Family of 4</Badge>
                </div>
              </div>
              <Button size="sm" variant="outline">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {userStats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-muted/30 rounded-lg">
                  <div className="text-lg mb-1">{stat.icon}</div>
                  <div className="font-bold text-sm">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Today's Progress */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Today's Goals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {nutritionGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{goal.nutrient}</span>
                  <span className="text-sm text-muted-foreground">
                    {goal.current}{goal.unit} / {goal.target}{goal.unit}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary rounded-full h-2 transition-all duration-300"
                    style={{ width: `${Math.min(goal.progress, 100)}%` }}
                  />
                </div>
                <div className="text-xs text-muted-foreground">
                  {goal.progress.toFixed(1)}% of daily target
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Health Profile */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-success" />
              Health Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Age</label>
                <div className="p-2 bg-muted/50 rounded-lg text-sm">32 years</div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Activity Level</label>
                <div className="p-2 bg-muted/50 rounded-lg text-sm">Moderate</div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Dietary Preference</label>
                <div className="p-2 bg-muted/50 rounded-lg text-sm">Vegetarian</div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Health Goal</label>
                <div className="p-2 bg-muted/50 rounded-lg text-sm">Weight Maintain</div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Allergies & Restrictions</label>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Nuts</Badge>
                <Badge variant="outline">Lactose Sensitive</Badge>
                <Button size="sm" variant="ghost" className="h-6 text-xs">
                  + Add More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language Settings */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-info" />
              Language Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {languages.map((lang) => (
              <div key={lang.code} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <div className="font-medium text-sm">{lang.name}</div>
                  <div className="text-xs text-muted-foreground">{lang.native}</div>
                </div>
                <Switch defaultChecked={lang.code === 'en' || lang.code === 'hi'} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="shadow-card bg-gradient-fresh border-accent/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-warning" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
              <span className="text-2xl">🥇</span>
              <div>
                <div className="font-medium text-sm">7-Day Streak</div>
                <div className="text-xs text-muted-foreground">Logged meals for 7 consecutive days</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
              <span className="text-2xl">💪</span>
              <div>
                <div className="font-medium text-sm">Protein Hero</div>
                <div className="text-xs text-muted-foreground">Met protein goals for 5 days this week</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
              <span className="text-2xl">👥</span>
              <div>
                <div className="font-medium text-sm">Community Helper</div>
                <div className="text-xs text-muted-foreground">Shared your first healthy recipe</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-muted-foreground" />
              Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Push Notifications</div>
                  <div className="text-xs text-muted-foreground">Meal reminders and tips</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Offline Mode</div>
                  <div className="text-xs text-muted-foreground">Use app without internet</div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Share Usage Data</div>
                  <div className="text-xs text-muted-foreground">Help improve recommendations</div>
                </div>
                <Switch />
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Export Data
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Privacy Settings
              </Button>
              <Button variant="outline" className="w-full justify-start text-destructive">
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;