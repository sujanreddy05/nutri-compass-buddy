// Mock food recognition service
// In a real implementation, this would use TensorFlow.js for image classification

export interface FoodItem {
  name: string;
  confidence: number;
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    sodium: number;
  };
}

export interface RecognitionResult {
  foods: FoodItem[];
  totalNutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    sodium: number;
  };
}

// Mock database of Indian foods for recognition
const foodDatabase = [
  {
    name: "Masoor Dal with Rice",
    keywords: ["dal", "rice", "red lentils", "curry", "yellow"],
    nutrition: { calories: 435, protein: 22.2, carbs: 84.4, fat: 1.2, fiber: 18.0, sodium: 5.6 }
  },
  {
    name: "Chapati",
    keywords: ["roti", "bread", "flatbread", "wheat", "round"],
    nutrition: { calories: 71, protein: 2.7, carbs: 15.7, fat: 0.4, fiber: 2.4, sodium: 1 }
  },
  {
    name: "Paneer Curry",
    keywords: ["paneer", "white", "curry", "tomato", "cheese"],
    nutrition: { calories: 320, protein: 18.3, carbs: 12.2, fat: 20.8, fiber: 2.1, sodium: 18 }
  },
  {
    name: "Banana",
    keywords: ["banana", "yellow", "fruit", "curved"],
    nutrition: { calories: 105, protein: 1.3, carbs: 27, fat: 0.4, fiber: 3.1, sodium: 1 }
  },
  {
    name: "Spinach Curry",
    keywords: ["spinach", "green", "leafy", "palak", "vegetables"],
    nutrition: { calories: 41, protein: 5.4, carbs: 6.8, fat: 0.5, fiber: 4.3, sodium: 126 }
  }
];

export const recognizeFood = async (imageBlob: Blob): Promise<RecognitionResult> => {
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock recognition logic - in real app, this would use TensorFlow.js
  const randomFood = foodDatabase[Math.floor(Math.random() * foodDatabase.length)];
  const confidence = 85 + Math.random() * 10; // Random confidence between 85-95%
  
  const recognizedFood: FoodItem = {
    name: randomFood.name,
    confidence: Math.round(confidence),
    nutrition: randomFood.nutrition
  };

  return {
    foods: [recognizedFood],
    totalNutrition: recognizedFood.nutrition
  };
};

export const analyzeFoodImage = async (imageData: string): Promise<RecognitionResult> => {
  // Convert base64 to blob (for future TensorFlow.js integration)
  const response = await fetch(imageData);
  const blob = await response.blob();
  
  return recognizeFood(blob);
};

// Utility function to get nutrition recommendations
export const getNutritionRecommendations = (nutrition: any): string[] => {
  const recommendations: string[] = [];
  
  if (nutrition.protein < 15) {
    recommendations.push("Consider adding some paneer, dal, or yogurt for more protein");
  }
  
  if (nutrition.fiber < 5) {
    recommendations.push("Add some vegetables or whole grains for more fiber");
  }
  
  if (nutrition.calories > 500) {
    recommendations.push("This is a calorie-dense meal - balance with lighter foods today");
  }
  
  if (nutrition.sodium > 400) {
    recommendations.push("High sodium content - drink plenty of water");
  }
  
  if (recommendations.length === 0) {
    recommendations.push("This looks like a well-balanced meal!");
  }
  
  return recommendations;
};