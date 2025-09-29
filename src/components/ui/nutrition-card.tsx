import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface NutritionCardProps {
  title: string;
  value: number;
  unit: string;
  target?: number;
  icon?: string;
  variant?: "default" | "primary" | "success" | "warning";
  className?: string;
}

export const NutritionCard = ({ 
  title, 
  value, 
  unit, 
  target,
  icon = "🥗",
  variant = "default",
  className 
}: NutritionCardProps) => {
  const percentage = target ? Math.min((value / target) * 100, 100) : undefined;
  
  const variantStyles = {
    default: "border-border",
    primary: "border-primary/20 bg-primary/5",
    success: "border-success/20 bg-success/5",
    warning: "border-warning/20 bg-warning/5"
  };

  return (
    <Card className={cn("shadow-card", variantStyles[variant], className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-foreground">{value}</span>
            <span className="text-sm text-muted-foreground">{unit}</span>
            {target && (
              <span className="text-xs text-muted-foreground ml-1">
                / {target}{unit}
              </span>
            )}
          </div>
          
          {target && percentage !== undefined && (
            <div className="space-y-1">
              <Progress 
                value={percentage} 
                className="h-2"
              />
              <p className="text-xs text-muted-foreground">
                {percentage.toFixed(0)}% of daily target
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};