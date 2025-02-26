import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";

interface ChargeCardProps {
  title: string;
  description: string;
}

export const ChargeCard = ({ title, description }: ChargeCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle><span className="text-red-500">◈ </span>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};