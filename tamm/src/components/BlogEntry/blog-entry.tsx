import { format } from "date-fns";
import Image from "https://cdn.midjourney.com/5894744a-f5a1-43ae-ba6f-9b531b2f57cb/0_2.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "lucide-react";

interface BlogEntryProps {
  title: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: number;
  category: string;
  excerpt: string;
  featuredImage: string;
}

export default function BlogEntry({
  title,
  slug,
  author,
  date,
  readTime,
  category,
  excerpt,
}: BlogEntryProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <img
            src={Image}
            alt={title}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <Badge variant="secondary">{category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {format(new Date(date), "MMM d, yyyy")}
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">
          <a href={`/blog/${slug}`} className="hover:underline">
            {title}
          </a>
        </h2>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{author.name}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <ClockIcon className="mr-1 h-3 w-3" />
            {readTime} min read
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <a
          href={`/blog/${slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Read more
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
}
