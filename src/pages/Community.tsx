import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Trophy, Users, Plus } from "lucide-react";

const Community = () => {
  const challenges = [
    {
      id: 1,
      title: "30-Day Balanced Diet Challenge",
      participants: 1247,
      timeLeft: "15 days",
      reward: "Gold Badge",
      progress: 65,
      emoji: "🏆"
    },
    {
      id: 2,
      title: "Regional Recipe Month",
      participants: 856,
      timeLeft: "8 days",
      reward: "Recipe Master",
      progress: 40,
      emoji: "👨‍🍳"
    }
  ];

  const recipes = [
    {
      id: 1,
      title: "Protein-Rich Quinoa Pulao",
      author: "Priya Sharma",
      authorInitials: "PS",
      likes: 234,
      comments: 45,
      difficulty: "Easy",
      time: "30 min",
      calories: 380,
      tags: ["Vegetarian", "High Protein", "Gluten Free"],
      emoji: "🌾"
    },
    {
      id: 2,
      title: "Spinach & Paneer Curry",
      author: "Ravi Kumar",
      authorInitials: "RK",
      likes: 189,
      comments: 32,
      difficulty: "Medium",
      time: "40 min",
      calories: 320,
      tags: ["Vegetarian", "Iron Rich", "Traditional"],
      emoji: "🥬"
    },
    {
      id: 3,
      title: "Millet Breakfast Bowl",
      author: "Anjali Patel",
      authorInitials: "AP",
      likes: 156,
      comments: 28,
      difficulty: "Easy",
      time: "15 min",
      calories: 280,
      tags: ["Vegan", "Superfood", "Quick"],
      emoji: "🥣"
    }
  ];

  const achievements = [
    { icon: "🥇", title: "Nutrition Expert", description: "Shared 50+ healthy recipes" },
    { icon: "💪", title: "Protein Champion", description: "Met protein goals for 30 days" },
    { icon: "🌱", title: "Veggie Lover", description: "Added veggies to every meal" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Community Hub</h1>
          <p className="text-muted-foreground">
            Share recipes, join challenges, inspire each other
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="h-12">
            <Plus className="mr-2 h-4 w-4" />
            Share Recipe
          </Button>
          <Button variant="outline" className="h-12">
            <Trophy className="mr-2 h-4 w-4" />
            Challenges
          </Button>
        </div>

        {/* Active Challenges */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-warning" />
              Active Challenges
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="p-4 bg-gradient-warm rounded-lg border border-primary/20">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{challenge.emoji}</span>
                    <div>
                      <h4 className="font-medium text-white">{challenge.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-white/80 mt-1">
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {challenge.participants} joined
                        </span>
                        <span>{challenge.timeLeft} left</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="secondary">
                    Join
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-white/90">
                    <span>Progress</span>
                    <span>{challenge.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-white rounded-full h-2 transition-all duration-300"
                      style={{ width: `${challenge.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Featured Recipes */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-success" />
              Community Recipes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="p-4 border border-border rounded-lg space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{recipe.emoji}</span>
                  <div className="flex-1">
                    <h4 className="font-medium">{recipe.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">{recipe.authorInitials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{recipe.author}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{recipe.difficulty}</span>
                  <span>{recipe.time}</span>
                  <span>{recipe.calories} cal</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Heart className="h-4 w-4" />
                      {recipe.likes}
                    </button>
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      {recipe.comments}
                    </button>
                  </div>
                  <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="shadow-card bg-accent/30 border-accent/50">
          <CardHeader>
            <CardTitle className="text-sm">🏅 Your Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <span className="text-2xl">{achievement.icon}</span>
                <div className="flex-1">
                  <h5 className="font-medium text-sm">{achievement.title}</h5>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Community Stats */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-sm">Community Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">2.5K</div>
                <div className="text-xs text-muted-foreground">Recipes Shared</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success">15K</div>
                <div className="text-xs text-muted-foreground">Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-warning">98%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;