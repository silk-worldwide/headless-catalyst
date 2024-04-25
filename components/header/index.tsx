import { ShoppingCart, User } from 'lucide-react';
import { ReactNode, Suspense } from 'react';

import { Button } from '@bigcommerce/components/button';
import {
  NavigationMenu,
  NavigationMenuCollapsed,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuToggle,
} from '@bigcommerce/components/navigation-menu';
import { getSessionCustomerId } from '~/auth';
import { FragmentOf, graphql } from '~/client/graphql';
import { Link } from '~/components/link';

import { QuickSearch } from '../quick-search';
import { StoreLogo, StoreLogoFragment } from '../store-logo';

import { HeaderNav, HeaderNavFragment } from './_actions/header-nav';
import { logout } from './_actions/logout';
import { CartLink } from './cart';

export const HeaderFragment = graphql(
  `
    fragment HeaderFragment on Site {
      settings {
        ...StoreLogoFragment
      }
      ...HeaderNavFragment
    }
  `,
  [StoreLogoFragment, HeaderNavFragment],
);

interface Props {
  cart: ReactNode;
  data: FragmentOf<typeof HeaderFragment>;
}

export const Header = async ({ cart, data }: Props) => {
  const customerId = await getSessionCustomerId();

  return (
    <header>
      <NavigationMenu>
        {data.settings && (
          <NavigationMenuLink asChild className="shrink-0 px-0">
            <Link href="/">
              <StoreLogo data={data.settings} />
            </Link>
          </NavigationMenuLink>
        )}

        <HeaderNav className="hidden xl:flex" data={data.categoryTree} />

        <div className="flex">
          <NavigationMenuList className="h-full">
            {data.settings && (
              <NavigationMenuItem>
                <QuickSearch>
                  <Link className="flex" href="/">
                    <StoreLogo data={data.settings} />
                  </Link>
                </QuickSearch>
              </NavigationMenuItem>
            )}
            {/* Removed user account and shopping cart icons */}
            {/* Insert "Let's Talk" button here */}
            <NavigationMenuItem>
              <button className="py-2.5 px-[30px] text-base leading-6 font-semibold border-none bg-pink-500 text-white text-center hover:bg-pink-700 flex items-center justify-center whitespace-nowrap w-[115px] h-[57px]" aria-label="Let's Talk" type="button">
                Let's Talk
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuToggle className="xl:hidden" />
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>

        <NavigationMenuCollapsed>
          <HeaderNav data={data.categoryTree} inCollapsedNav />
        </NavigationMenuCollapsed>
      </NavigationMenu>
    </header>
  );
};
