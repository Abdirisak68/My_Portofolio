import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { mockStorage } from "@/data/mockData";

// === SKILLS ===
export function useSkills() {
  return useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 100));
      return mockStorage.getSkills();
    },
  });
}

// === PROJECTS ===
export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 100));
      return mockStorage.getProjects();
    },
  });
}

// === CONTACT ===
export function useSendMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockStorage.createMessage(data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you soon!",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });
}
