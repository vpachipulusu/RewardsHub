'use client';

import Link from 'next/link';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { categories } from '@/lib/retailers';
import { ROUTES } from '@/lib/config/routes';
import { useRouter } from 'next/navigation';

export function RetailerNavigation() {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`${ROUTES.RETAILERS}?category=${encodeURIComponent(category)}`);
  };

  return (
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Retailers</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <div className="grid gap-1">
              <h4 className="font-medium leading-none">Categories</h4>
              <p className="text-sm text-muted-foreground">
                Browse retailers by category
              </p>
            </div>
            <div className="grid gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="text-sm text-left hover:text-primary transition-colors cursor-pointer"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}